<template>
  <div style="padding-top: 20px">
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
  </div>
</template>

<script>
  // @ is an alias to /src

  // import Header from '@/components/Header.vue';

  export default {
    name: 'ViewMeetup',
    data() {
      return {
        currentMeetup: null,
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
        const date = this.currentMeetup.date.substr(0, 10) + ' в ' +
          this.currentMeetup.date.substr(11, 5);
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
    },
    methods: {
      subscribeOnMeetup(currentMeetup) {
        if (!this.isUserSubscribed) {
          this.loading = true;
          this.$store.dispatch('subscribeOnMeetup', {
            userId: this.user.id,
            meetupId: currentMeetup.meetupId,
          }).then(() => {
          this.loading = false;
        });
        } else {
          this.loading = true;
          this.$store.dispatch('unSubscribeOnMeetup', {
            userId: this.user.id,
            meetupId: currentMeetup.meetupId,
          }).then(() => {
          this.loading = false;
        });
        }
        // this.subscribe = !this.subscribe;
        // if (this.subscribe) {
        //   this.user.subscribedMeetups = currentMeetup.imgSrc;
        // } else {
        //   this.user.subscribedMeetups = '';
        // }
      },
    },
    created() {
      this.currentMeetup = this.meetups.find((meetup) => meetup.meetupId === this.$route.params
        .meetupId);
      // console.log(this.$route.params.meetupId)
      // console.log(this.currentMeetup)
    },
  };

</script>
