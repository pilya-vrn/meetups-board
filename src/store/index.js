/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
// import { bus } from '../main.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meetups: [{
      // eslint-disable-next-line global-require
      imgSrc: require('../assets/voronezh-night-0034.jpg'),
      title: 'Встреча в Воронеже',
      meetupId: 'vrn',
      location: 'Воронеж, Адмиралтейская набережная',
      description: 'Будем удить рыбу',
      createdBy: '',
      date: '2020-12-28T06:00:00.000Z',
    },
    {
      // eslint-disable-next-line global-require
      imgSrc: require('../assets/kharkiv.jpg.pagespeed.ce_.BcyzDuEqsy.jpg'),
      title: 'Встреча в Харькове',
      meetupId: 'harkv',
      location: 'Харьков, площадь Ленина',
      description: 'Собираю народ для игры в прятки',
      createdBy: '',
      date: '2020-12-28T16:00:00.000Z',
    },
    {
      // eslint-disable-next-line global-require
      imgSrc: require('../assets/20122011131923.jpg'),
      title: 'Встреча в Донецке',
      meetupId: 'doneck',
      location: 'Донецк, Центральная библиотека',
      description: 'Коллективное чтение А.П.Чехова, попробуем поставить "Вишневый сад"',
      createdBy: '',
      date: '2020-12-29T18:00:00.000Z',
    },
    {
      // eslint-disable-next-line global-require
      imgSrc: require(
        '../assets/9a6838421a399c73a47b8c14ec3ec3e9_w540_h360_cx99_cy0_cw1709_ch1170.jpg',
      ),
      title: 'Встреча в Белгороде',
      meetupId: 'blgrd',
      location: 'Белгород, Автовокзал',
      description: 'Заказываем автобус для поездки на озеро',
      createdBy: '',
      date: '2020-12-30T15:00:00.000Z',
    },
    ],
    user: {
      id: null,
      name: null,
      email: null,
      subscriptions: null,
    },
    // {
    //   userId: , {
    //                title:
    //                location:
    //                photo:
    //                description:
    //                date:
    //                createdBy:
    //              }
    // }
  },
  mutations: {
    setUserName(state, name) {
      state.user.name = name;
    },
    setUserEmail(state, email) {
      state.user.email = email;
    },
    setLoadedMeetups(state, meetups) {
      state.meetups = state.meetups.concat(meetups);
    },
    createMeetup(state, payload) {
      state.meetups.push(payload);
    },
    resetStore(state) {
      // state.meetups = [];
      state.user = null;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    subscribeOnMeetup(state, meetupId) {
      if (!state.user.subscriptions) {
      Vue.set(state.user, 'subscriptions', []);
      }
      state.user.subscriptions.push(meetupId);
    },
    unSubscribeOnMeetup(state, meetupId) {
      const meetupIndex = state.user.subscriptions.indexOf(meetupId);
      state.user.subscriptions.splice(meetupIndex, 1);
    },
    setLoadedSubscriptions(state, subscriptions) {
      Vue.set(state.user, 'subscriptions', subscriptions);
  },
  },
  actions: {
    async loadUserData({ state, commit }) {
      const userId = state.user.id;
      const data = await firebase
          .database()
          .ref(`users/${userId}`)
          .once('value');
      const dbUserData = data.val();
      if (dbUserData) {
          commit(
              'setLoadedSubscriptions',
              Object.keys(dbUserData.subscriptions)
          );
      }
    },
    async unSubscribeOnMeetup({commit}, payload) {
      await firebase.database().ref(`users/${payload.userId}/subscriptions/${payload.meetupId}`)
      .set(false);
      const meetupId = payload.payload;
      commit('unSubscribeOnMeetup', meetupId)
    },
    async subscribeOnMeetup({commit}, payload) {
      // console.log(payload);
      await firebase.database().ref(`users/${payload.userId}/subscriptions/${payload.meetupId}`)
      .set(true);
      commit('subscribeOnMeetup', payload.meetupId);
    },
    async loadMeetups({
      commit,
    }) {
      const data = await firebase.database().ref('meetups').once('value');
      const meetups = [];
      const dbMeetups = data.val();
      // console.log(dbMeetups);
      for (const key in dbMeetups) {
        meetups.push({
          meetupId: key,
          title: dbMeetups[key].title,
          createdBy: dbMeetups[key].createdBy,
          date: dbMeetups[key].date,
          description: dbMeetups[key].description,
          imgSrc: dbMeetups[key].imgSrc,
          location: dbMeetups[key].location,
        });
      }
      commit('setLoadedMeetups', meetups);
    },
    async changeUserData({ commit }, payload) {
      const { currentUser } = firebase.auth();
      const credential = firebase.auth.EmailAuthProvider.credential(payload.email, payload.psw);
      try {
        await currentUser.reauthenticateWithCredential(credential);

        if (payload.changeType === 'name') {
          currentUser.updateProfile({ displayName: payload.newName });
          commit('setUserName', payload.newName);
        } if (payload.changeType === 'email') {
          currentUser.updateEmail(payload.newEmail);
          commit('setUserEmail', payload.newEmail);
        } if (payload.changeType === 'psw') {
          currentUser.updatePassword(payload.newPsw);
        }
      } catch (err) {
        // eslint-disable-next-line no-alert
        alert(err.message);
      }
    },
    async createMeetup({ state, commit }, payload) {
      const userId = state.user.id;
      const meetup = {
        imgSrc: '',
        title: payload.title,
        description: payload.description,
        date: payload.date,
        location: payload.location,
        createdBy: userId,
      };
      const data = await firebase.database().ref('meetups').push(meetup);

      const filename = payload.photoFile.name;
      const ext = filename.slice(filename.lastIndexOf('.'));
      const fileData = await firebase
        .storage()
        .ref(`meetups/${data.key}${ext}`)
        .put(payload.photoFile);
      const imgSrc = await fileData.ref.getDownloadURL();
      await firebase
        .database()
        .ref('meetups')
        .child(data.key)
        .update({
          imgSrc,
        });
      meetup.imgSrc = imgSrc;
      commit('createMeetup', {
        meetupId: data.key,
        ...meetup,
      });
      // console.log(data)
    },
    async signUserUp({
      commit,
    }, {
      email,
      psw,
      name,
    }) {
      try {
        const {
          user,
        } = await firebase.auth().createUserWithEmailAndPassword(email, psw);
        const newUser = {
          id: user.uid,
        };
        await firebase.auth().currentUser.updateProfile({
          displayName: name,
        })
          .then(() => {
            commit('setUserName', name);
          });
        commit('setUser', newUser);
      } catch (err) {
        // eslint-disable-next-line no-alert
        alert(err.message);
      }
    },
    async signUserIn({
      commit,
    }, {
      email,
      psw,
    }) {
      try {
        const {
          user,
        } = await firebase.auth().signInWithEmailAndPassword(email, psw);
        const { currentUser } = firebase.auth();
        const newUser = {
          id: user.uid,
          name: currentUser.displayName,
          email: currentUser.email,
        };
        commit('setUser', newUser);
      } catch (err) {
        // eslint-disable-next-line no-alert
        alert(err.message);
      }
    },
    logUserOut({
      commit,
    }) {
      firebase.auth().signOut();
      commit('setUser', null);
    },
  },
  modules: {},
});
