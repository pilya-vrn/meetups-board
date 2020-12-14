<template>
  <v-container>
    <v-row align="center">
      <v-col cols=8>
    <!-- <v-flex  offset-7 align-self-center> -->
      <v-card v-for="meetup in meetups"
              :key="meetup.meetupId"
              class="primary" dark tile flat>
              <v-row>
                <v-col cols=4>
                  <v-img :src="meetup.imgSrc"
                              height="150px">
                  </v-img>
                </v-col>
              </v-row>
          <v-row><v-col cols=6><v-card-title>
                {{ meetup.title }}
                <v-card-subtitle color="#090974">{{ meetup.date.substr(0, 10) + ' в '
                  + meetup.date.substr(11, 5) }}</v-card-subtitle>
              </v-card-title></v-col></v-row>

        <v-btn  :to="'/meetups/' + meetup.meetupId"
                color="#090974"
                text>
          <v-icon left light>arrow_forward</v-icon>
                    Подробнее
        </v-btn>
      </v-card>
      </v-col>
    <!-- </v-flex> -->
    </v-row>
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
