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
                      <h3 class="headline mb-0"><v-icon>person</v-icon> {{ user.name }}</h3>
                      <h3 class="headline mb-0"><v-icon>email</v-icon> {{ user.email }}</h3>
                    </div>
                  </v-card-title>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                      <v-dialog v-model="dialog" persistent max-width="550">
                        <template v-slot:activator="{ on }">
                         <v-btn color="primary" dark v-on="on">Изменить данные</v-btn>
                        </template>
                      <v-card>
                        <v-card-title class="headline">Изменить данные?</v-card-title>
                        <v-card-text>
                          <v-form>
                            <v-text-field prepend-icon="email" name="login" label="example@gmail.com"
                            type="email" required v-model="email">
                            </v-text-field>
                            <v-text-field id="password" prepend-icon="lock" name="password"
                            label="Введите пароль" type="password" required v-model="psw">
                            </v-text-field>
                          </v-form>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="primary"  @click="dialog = false">Отмена</v-btn>
                          <v-btn color="primary"  @click="dialog = false">Изменить</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
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

// import Header from '@/components/Header.vue';

export default {
  name: 'Profile',
  data() {
    return {
      tabMode: 'data',
      dialog: false,
      email: '',
      psw: '',
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  components: {
  },
};
</script>
