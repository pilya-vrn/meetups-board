import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meetups: [],
    user: null,
  },
  mutations: {
    resetStore(state) {
      state.meetups = [];
      state.user = null;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setLoadedMeetups(state, lists) {
      state.meetups = lists;
    },
  },
  actions: {
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
