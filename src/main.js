import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

// export const bus = new Vue();

new Vue({
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDoT2tWVflKRcS6woVC3Pz3-hFJsz2eyaA',
      authDomain: 'meetups-board.firebaseapp.com',
      databaseURL: 'https://meetups-board.firebaseio.com',
      projectId: 'meetups-board',
      storageBucket: 'meetups-board.appspot.com',
      messagingSenderId: '111257465855',
      appId: '1:111257465855:web:87906478e60ebe1baa2dca',
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('setUser', { id: user.uid, name: user.displayName, email: user.email });
        this.$store.dispatch('loadUserData');
        // this.$store.dispatch('loadMeetups');
        // this.$store.dispatch('loadLists');
      } else {
        this.$store.commit('resetStore');
      }
    });
    this.$store.dispatch('loadMeetups');
  },
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
