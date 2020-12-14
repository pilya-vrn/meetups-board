import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meetups: [
      {
        // eslint-disable-next-line global-require
        imgSrc: require('../assets/voronezh-night-0034.jpg'),
        title: 'Встреча в Воронеже',
        meetupId:'vrn',
        location: 'Воронеж, Адмиралтейская набережная',
        description: 'Будем удить рыбу',
        createdBy: '',
        date: '2020-12-21T06:00:00.000Z',
      },
      {
        // eslint-disable-next-line global-require
        imgSrc: require('../assets/kharkiv.jpg.pagespeed.ce_.BcyzDuEqsy.jpg'),
        title: 'Встреча в Харькове',
        meetupId:'harkv',
        location: 'Харьков, площадь Ленина',
        description: 'Собираю народ для игры в прятки',
        createdBy: '',
        date: '2020-12-21T06:00:00.000Z',
      },
      {
        // eslint-disable-next-line global-require
        imgSrc: require('../assets/20122011131923.jpg'),
        title: 'Встреча в Донецке',
        meetupId:'doneck',
        location: 'Донецк, Центральная библиотека',
        description: 'Коллективное чтение А.П.Чехова, попробуем поставить "Вишневый сад"',
        createdBy: '',
        date: '2020-12-21T06:00:00.000Z',
      },
      {
        // eslint-disable-next-line global-require
        imgSrc: require('../assets/9a6838421a399c73a47b8c14ec3ec3e9_w540_h360_cx99_cy0_cw1709_ch1170.jpg'),
        title: 'Встреча в Белгороде',
        meetupId:'blgrd',
        location: 'Белгород, Автовокзал',
        description: 'Заказываем автобус для поездки на озеро',
        createdBy: '',
        date: '2020-12-21T06:00:00.000Z',
      },
    ],
    user: null,
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
  },
  actions: {
    async loadMeetups({state, commit}) {
      // const userId = state.user.id;
      const data = await firebase.database().ref(`meetups`).once('value');
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
    async createMeetup({state, commit}, payload) {
      const userId = state.user.id;
      let meetup = {
        imgSrc: '',
        title: payload.title,
        description: payload.description,
        date: payload.date,
        location: payload.location,
        createdBy: userId,
      };
      const data = await firebase.database().ref(`meetups`).push(meetup);

      const filename = payload.photoFile.name;
      const ext = filename.slice(filename.lastIndexOf('.'));
      const fileData = await firebase
          .storage()
          .ref('meetups/' + data.key + ext)
          .put(payload.photoFile);
      const imgSrc = await fileData.ref.getDownloadURL();
      await firebase
          .database()
          .ref('meetups')
          .child(data.key)
          .update({ imgSrc });
      meetup.imgSrc = imgSrc;
      commit('createMeetup', {
        meetupId: data.key, ...meetup });
        // console.log(data)
    },
    async signUserUp({ commit }, { email, psw }) {
      try {
        const { user } = await firebase.auth().createUserWithEmailAndPassword(email, psw);
        const newUser = { id: user.uid };
        commit('setUser', newUser);
      } catch (err) {
        // eslint-disable-next-line no-alert
        alert(err.message);
      }
    },
    async signUserIn({ commit }, { email, psw }) {
      try {
        const { user } = await firebase.auth().signInWithEmailAndPassword(email, psw);
        const newUser = { id: user.uid };
        commit('setUser', newUser);
      } catch (err) {
        // eslint-disable-next-line no-alert
        alert(err.message);
      }
    },
    logUserOut({ commit }) {
      firebase.auth().signOut();
      commit('setUser', null);
    },
  },
  modules: {
  },
});
