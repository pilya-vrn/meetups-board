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
          <v-img :src="item.src"></v-img>
        <!-- v-bind:src="item.src" -->

        <v-sheet>
          <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-3">
                {{ item.title }}
              </div>
          </v-row>
        </v-sheet>
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
    // HelloWorld,
  },
  data() {
    return {
      items: [
        {
          src: '../assets/voronezh-night-0034.jpg',
          title: '1',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          title: '2',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          title: '3',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          title: '4',
        },
      ],

    };
  },
};
</script>
