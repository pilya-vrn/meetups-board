import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meetups: [
      {
        // eslint-disable-next-line global-require
        src: require('../assets/voronezh-night-0034.jpg'),
        title: 'Встреча в Воронеже',
      },
      {
        // eslint-disable-next-line global-require
        src: require('../assets/kharkiv.jpg.pagespeed.ce_.BcyzDuEqsy.jpg'),
        title: 'Встреча в Харькове',
      },
      {
        // eslint-disable-next-line global-require
        src: require('../assets/20122011131923.jpg'),
        title: 'Встреча в Донецке',
      },
      {
        // eslint-disable-next-line global-require
        src: require('../assets/9a6838421a399c73a47b8c14ec3ec3e9_w540_h360_cx99_cy0_cw1709_ch1170.jpg'),
        title: 'Встреча в Белгороде',
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
    createMeetup() {},
    resetStore(state) {
      state.meetups = [];
      state.user = null;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setLoadedMeetups(state, meetups) {
      state.meetups = meetups;
    },
  },
  actions: {
    createMeetup() {},
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
