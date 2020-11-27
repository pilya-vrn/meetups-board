<template>
  <v-app>
    <v-toolbar app dark class="primary">
      <v-toolbar-title v-text="'Доска митапов'"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-for="(item, i) in menyBtns" v-bind:key="i" v-bind:to="item.route">
          <v-icon left v-html="item.icon"></v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    menyBtns() {
      return [
        {
          icon: 'supervisor_account',
          title: 'просмотр встреч',
          route: '/meetups',
        },
        {
          icon: 'location_on',
          title: 'создать встречу',
          route: '/organizemeetup',
        },
        {
          icon: 'person',
          title: 'профиль',
          route: '/profile',
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
        },
      ];
    },
  },

};
</script>
