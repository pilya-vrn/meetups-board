<template>
  <v-container v-if="currentMeetup">
    <v-row>
      <v-col>
        <v-img :src="currentMeetup.imgSrc" max-height="60vh" contain />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn color="primary" @click="subscribeOnMeetup(currentMeetup)" v-if="user"
          :loading="loading" :disabled="loading">
          {{ isUserSubscribed ? 'Отписаться' : 'Подписаться' }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1>{{ currentMeetup.title}}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <i>{{ date }}</i>
        ,
        <b>{{ currentMeetup.location }}</b>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>{{ currentMeetup.description }}</p>
      </v-col>
    </v-row>
  </v-container>
  <!-- <div style="padding-top: 20px">
    <v-card class="mx-auto" max-width="344" elevation="15">
      <v-img :src="currentMeetup.imgSrc" height="350px"></v-img>
      <v-card-title>{{ currentMeetup.title }}
        <v-card-subtitle>{{currentMeetup.location}}</v-card-subtitle>
        <v-card-subtitle>{{date}}</v-card-subtitle>
        <v-btn color="primary"
          @click="subscribeOnMeetup(currentMeetup)"
          v-if="user"
          :loading="loading"
          :disabled="loading">
              {{ isUserSubscribed ? 'Отписаться' : 'Подписаться' }}
            </v-btn>
      </v-card-title>
      <v-card-actions>

        <v-btn color="blue" text>
          Описание
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              {{ currentMeetup.description }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card-actions>
    </v-card>
  </div> -->
</template>

<script>
  // @ is an alias to /src

  // import Header from '@/components/Header.vue';

  export default {
    name: 'ViewMeetup',
    props: ['meetupId'],
    data() {
      return {
        // currentMeetup: null,
        show: false,
        subscribe: false,
        loading: false,
        // loader: null,
        // date: '',
      }
    },
    computed: {
      meetups() {
        return this.$store.state.meetups;
      },
      date() {
        const date = new Date(this.currentMeetup.date).toLocaleDateString() + ' в '
        + new Date(this.currentMeetup.date).toLocaleTimeString().substr(1, 4);
        return date;
      },
      user() {
        return this.$store.state.user;
      },
      subscriptions() {
        return this.user.subscriptions || [];
      },
      isUserSubscribed() {
        return this.subscriptions.includes(this.currentMeetup.meetupId);
      },
      currentMeetup() {
        return this.meetups.find((meetup) => meetup.meetupId === this.$route.params.meetupId);
      }
    },
    methods: {
      subscribeOnMeetup(currentMeetup) {
        this.loading = true;

        if (!this.isUserSubscribed) {
          this.$store.dispatch('subscribeOnMeetup', {
              meetupId: currentMeetup.meetupId
            })
            .then(() => {
              this.loading = false;
            });
        } else {
          this.$store.dispatch('unSubscribeOnMeetup', {
              meetupId: currentMeetup.meetupId
            })
            .then(() => {
              this.loading = false;
            });
        }
      },
    },
    created() {
      // this.currentMeetup = this.meetups.find((meetup) => meetup.meetupId === this.$route.params
      //   .meetupId);
      // console.log(this.$route.params.meetupId)
      // console.log(this.currentMeetup)
    },
  };

</script>
