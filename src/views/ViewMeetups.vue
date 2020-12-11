<template>
  <div>
    <v-card class="mx-auto" max-width="344">
      <v-img
      :src="currentMeetup.imgSrc"
      height="200px"
      ></v-img>
      <v-card-title :title="currentMeetup.title"> {{ title }}
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src

// import Header from '@/components/Header.vue';

export default {
  name: 'ViewMeetups',
  data() {
    return {
      currentMeetup: null,
    }
  },
  computed: {
    meetups () {
        return this.$store.state.meetups;
      }
  },
  created() {
    this.currentMeetup = this.meetups.find((meetup) => meetup.meetupId === this.$route.params.meetupId);
    console.log(this.$route.params.meetupId)
    console.log(this.currentMeetup)
  },
};
</script>
