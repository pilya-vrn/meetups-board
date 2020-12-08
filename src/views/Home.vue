<template>
  <div class="wrapper">
    <div class="btn-wrapper">
      <v-btn
        to="/meetups"
        depressed
        color="primary"
        style="margin-right: 25px;"
        large>просмотр встреч</v-btn>
      <v-btn
        to="/createmeetups"
        depressed
        color="primary"
        large
        v-if="user">создать встречу</v-btn>
  </div>
    <v-carousel cycle show-arrows-on-hover>
      <v-carousel-item v-for="(meetup, i) in meetups"
                       :key="i"
                       :title="meetup.title"
                       :src="meetup.src">
        <v-sheet height="100%" tile color="transparent">
          <v-row class="fill-height" align="end" justify="center">
              <div class="display-3" style="padding-bottom: 50px;">
                <div class="slide-title ">
                  {{ meetup.title }}
                </div>
              </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      // items: [
      //   {
      //     // eslint-disable-next-line global-require
      //     src: require('../assets/voronezh-night-0034.jpg'),
      //     title: 'Встреча в Воронеже',
      //   },
      //   {
      //     // eslint-disable-next-line global-require
      //     src: require('../assets/kharkiv.jpg.pagespeed.ce_.BcyzDuEqsy.jpg'),
      //     title: 'Встреча в Харькове',
      //   },
      //   {
      //     // eslint-disable-next-line global-require
      //     src: require('../assets/20122011131923.jpg'),
      //     title: 'Встреча в Донецке',
      //   },
      //   {
      //     // eslint-disable-next-line global-require
      //     src: require('../assets/9a6838421a399c73a47b8c14ec3ec3e9_w540_h360_cx99_cy0_cw1709_ch1170.jpg'),
      //     title: 'Встреча в Белгороде',
      //   },
      // ],
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    meetups () {
        return this.$store.state.meetups;
    },
  },
};
</script>
<style scoped>
.wrapper {
  max-width: 1000px;
  margin: 0 auto;
}
.slide-title {
  background: rgba(0,0,0,.3);
  padding: 5px;
}
.btn-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 15px;
}
</style>
