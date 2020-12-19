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
          <v-icon>exit_to_app
          </v-icon>выйти
        </v-btn>
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
      let btnsArray = [
        {
          icon: 'supervisor_account',
          title: 'просмотр встреч',
          route: '/meetups',
        }];
      const btnsArrayUser = [
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
      ];
      const btnsArrayVisitor = [
        {
          icon: 'tag_faces',
          title: 'Зарегистрироваться',
          route: '/signup',
        },
        {
          icon: 'enhanced_encryption',
          title: 'войти',
          route: '/signin',
        },
      ];

      if (this.user) {
        btnsArray = btnsArray.concat(btnsArrayUser);
      } else {
        btnsArray = btnsArray.concat(btnsArrayVisitor);
      }
      return btnsArray;
    },
  },
  methods: {
    logUserOut() {
      this.$store.dispatch('logUserOut');
      this.$router.push('/');
    },
  },
};
</script>
