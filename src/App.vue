<template>
  <div id="app">
    <v-app>
      <Header></Header>
      <v-main>
        <router-view/>
      </v-main>
      <Footer></Footer>
    </v-app>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>
