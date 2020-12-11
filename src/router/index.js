import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignIn from '../views/user/SignIn.vue';
import SignUp from '../views/user/SignUp.vue';
import OrganizeMeetup from '../views/OrganizeMeetup.vue';
import Profile from '../views/Profile.vue';
import ViewMeetups from '../views/ViewMeetups.vue';
// import authGuard from './authGuard';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // beforeEnter: authGuard,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/createmeetups',
    name: 'OrganizeMeetup',
    component: OrganizeMeetup,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/meetups/:meetupId',
    name: 'ViewMeetups',
    component: ViewMeetups,
  },
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});

export default router;
