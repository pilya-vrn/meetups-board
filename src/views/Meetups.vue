<template>
  <v-container>
    <v-layout v-for="meetup in meetups"
              :key="meetup.meetupId"
              row wrap class="mb-2">
      <v-flex offset-sm1 offset-md2 xs12 sm10 md8>
      <v-card class="primary">
        <v-container fluid>
           <v-layout row>
              <v-flex xs5 sm4 md3>
                  <v-img :src="meetup.imgSrc"
                              height="150px">
                  </v-img>
              </v-flex>
          <v-flex xs7 sm8 md9>
          <v-card-title>
                  <div>
                    <h4 class="white--text mb-0">{{ meetup.title }}</h4>
                    <v-card-subtitle>{{ meetup.date.substr(0, 10) + ' в '
                     + meetup.date.substr(11, 5) }}</v-card-subtitle>
                    <!-- <div>{{ meetup.date.substr(0, 10) + ' в '
                  + meetup.date.substr(11, 5) }}</div> -->
                  </div>
                <!-- {{ meetup.title }}
                <v-card-subtitle color="#090974">{{ meetup.date.substr(0, 10) + ' в '
                  + meetup.date.substr(11, 5) }}</v-card-subtitle> -->
              </v-card-title>
        <v-btn  :to="'/meetups/' + meetup.meetupId"
                color="#090974"
                text>
          <v-icon left light>arrow_forward</v-icon>
                    Подробнее
        </v-btn>
        </v-flex>
        </v-layout>
        </v-container>
      </v-card>
      </v-flex>
      </v-layout>
  </v-container>

</template>

<script>
export default {
  name: 'Meetups',
  data() {
    return {
      currentMeetup: null,
      };
  },
  computed: {
    meetups () {
        return this.$store.state.meetups;
      },
  },
}
</script>

<style scoped>

</style>
