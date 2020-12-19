<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm10 offset-sm1>
        <v-tabs v-model="tabMode" color="accent" fixed-tabs slider-color="succes">
          <v-tab ripple :key="'data'">
            Мои данные
          </v-tab>
          <v-tab ripple :key="'meetups'">
            Мои митапы
          </v-tab>
          <v-tab-item :key="'data'">
            <v-card>
              <!-- <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                    aspect-ratio="2.75"
                  ></v-img> -->

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">
                    <v-icon>person</v-icon> {{ user.name }}
                  </h3>
                  <h3 class="headline mb-0">
                    <v-icon>email</v-icon> {{ user.email }}
                  </h3>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>
                <UserDialog></UserDialog>
              </v-card-actions>
            </v-card>

          </v-tab-item>
          <v-tab-item :key="'meetups'">

          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src

// import { bus } from '../main.js';
import UserDialog from '@/components/UserDialog.vue';

export default {
  name: 'Profile',
  components: {
    UserDialog,
  },
  data() {
    return {
      tabMode: 'data',
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};

</script>
