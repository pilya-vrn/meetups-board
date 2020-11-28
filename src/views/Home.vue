<template>
  <v-app id="inspire">
    <v-carousel
      cycle
      height="700"
      hide-delimiter-background
      show-arrows-on-hover>
      <v-carousel-item
        v-for="(item,i) in items"
        v-bind:key="i"
        v-bind:title="item.title"
        >
          <v-img :src="item.src" max-height="700">
            <v-sheet>
          <v-row
              class="fill-height"
              align-content="center"
              justify="center"
            >
              <div class="display-3">
                {{ item.title }}
              </div>
          </v-row>
          </v-sheet>
          </v-img>
        <!-- v-bind:src="item.src" -->

      </v-carousel-item>
    </v-carousel>
  </v-app>
  <!-- <v-sheet
          v-bind:color="colors[i]"
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">
              {{ slide }} Slide
            </div>
          </v-row>
        </v-sheet> -->
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
          title: 'Встреча в донецке',
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
