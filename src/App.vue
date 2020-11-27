<template>
  <div id="app">
      <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
// import MainPage from '@/components/MainPage.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
    // MainPage,
  },
  data: () => ({
    //
  }),
};
</script>
