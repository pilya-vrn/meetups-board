<template>
  <div class="wrapper">
    <v-carousel cycle show-arrows-on-hover>
      <v-carousel-item v-for="(item, i) in items"
                       :key="i"
                       :title="item.title"
                       :src="item.src">
        <v-sheet height="100%" tile color="transparent">
          <v-row class="fill-height" align="end" justify="center">
              <div class="display-3" style="padding-bottom: 50px;">
                <div class="slide-title ">
                  {{ item.title }}
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
  components: {
    // Header,
  },
  data() {
    return {
      items: [
        {
          // eslint-disable-next-line global-require
          src: require('../assets/voronezh-night-0034.jpg'),
          title: 'Встреча в Воронеже',
        },
        {
          // eslint-disable-next-line global-require
          src: require('../assets/kharkiv.jpg.pagespeed.ce_.BcyzDuEqsy.jpg'),
          title: 'Встреча в Харькове',
        },
        {
          // eslint-disable-next-line global-require
          src: require('../assets/20122011131923.jpg'),
          title: 'Встреча в Донецке',
        },
        {
          // eslint-disable-next-line global-require
          src: require('../assets/9a6838421a399c73a47b8c14ec3ec3e9_w540_h360_cx99_cy0_cw1709_ch1170.jpg'),
          title: 'Встреча в Белгороде',
        },
      ],

    };
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
</style>
