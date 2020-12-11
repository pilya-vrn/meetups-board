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
                       :src="meetup.imgSrc"
                       @click.prevent="checkMeetup(meetup.meetupId)"
                       style="cursor:pointer">
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
  methods: {
    checkMeetup(meetupId) {
      this.$router.push('/meetups/' + meetupId);
    },
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
