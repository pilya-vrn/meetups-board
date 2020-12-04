<template>
    <v-app-bar app dark class="primary">
      <router-link to="/" tag="span" style="cursor:pointer">
      <v-toolbar-title v-text="'Доска митапов'"></v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn link text v-for="(item, i) in menyBtns" v-bind:key="i" v-bind:to="item.route">
          <v-icon left v-html="item.icon"></v-icon>
          {{item.title}}
        </v-btn>
         <v-btn link text v-if="user" @click="logUserOut">
          <v-icon>exit_to_app</v-icon>выйти</v-btn>
      </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    user() {
      return this.$store.state.user;
    },
    menyBtns() {
      return this.user ?
      [
        {
          icon: 'supervisor_account',
          title: 'просмотр встреч',
          route: '/meetups',
        },
        {
          icon: 'location_on',
          title: 'создать встречу',
          route: '/createmeetups',
        },
        {
          icon: 'person',
          title: 'профиль',
          route: '/profile',
        },
      ] : [
        {
          icon: 'supervisor_account',
          title: 'просмотр встреч',
          route: '/meetups',
        },
        {
          icon: 'tag_faces',
          title: 'Зарегистрироваться',
          route: '/signup',
        },
        {
          icon: 'enhanced_encryption',
          title: 'войти',
          route: '/signin',
        },];
    },
  },
  methods: {
  logUserOut() {
      this.$store.dispatch('logUserOut');
    },
  },
};
</script>
