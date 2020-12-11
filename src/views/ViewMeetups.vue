<template>
  <div>
    <v-card class="mx-auto" max-width="344">
      <v-img
      :src="currentMeetup.imgSrc"
      height="200px"
      ></v-img>
      <v-card-title> {{ currentMeetup.title }}
      <v-card-subtitle>
      {{currentMeetup.location}}
    </v-card-subtitle>
      </v-card-title>
      <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
    </v-card-actions>
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
      show: false,
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
