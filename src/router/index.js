import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignIn from '../views/user/SignIn.vue';
import SignUp from '../views/user/SignUp.vue';
import OrganizeMeetup from '../views/OrganizeMeetup.vue';
import Profile from '../views/Profile.vue';
import ViewMeetups from '../views/ViewMeetups.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
    path: '/meetups',
    name: 'ViewMeetups',
    component: ViewMeetups,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
