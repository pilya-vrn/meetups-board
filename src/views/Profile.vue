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
                        <h3>Изменить</h3>
                        <v-radio-group v-model="changeType">
                          <v-radio label="Имя" :value="'name'"></v-radio>
                          <v-text-field v-if="changeType == 'name'" prepend-icon="person"
                            name="newName" type="text" required v-model="newName"
                            label="Введите новое имя"></v-text-field>
                          <v-radio label="Е-меил" :value="'email'"></v-radio>
                          <v-text-field prepend-icon="email" name="newLogin" type="email"
                            v-if="changeType == 'email'" required v-model="newEmail"
                            label="Введите новый эмейл"></v-text-field>
                          <v-radio label="Пароль" :value="'psw'"></v-radio>
                          <v-text-field v-if="changeType == 'psw'" prepend-icon="lock"
                            name="newPassword" type="password" required v-model="newPsw"
                            label="Введите новый пароль">
                          </v-text-field>
                        </v-radio-group>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="dialog = false">Отмена</v-btn>
                      <v-btn color="primary" @click="changeUserData">Изменить</v-btn>
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

// import { bus } from '../main.js';

export default {
  name: 'Profile',
  data() {
    return {
      tabMode: 'data',
      dialog: false,
      email: '',
      psw: '',
      newName: '',
      newEmail: '',
      newPsw: '',
      changeType: 'name',
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    changeUserData() {
      // const re = /\S+@\S+\.\S+/;
      if ((this.email === '') || (this.psw === '')) {
        // eslint-disable-next-line no-alert
        alert('Введите email и пароль');
      } else if ((this.newEmail === '') && (this.newPsw === '') && (this.newName === '')) {
        // eslint-disable-next-line no-alert
        alert('Заполните поле, которое необходимо изменить');
      } else {
        this.$store.dispatch('changeUserData', {
          email: this.email,
          psw: this.psw,
          newName: this.newName,
          newEmail: this.newEmail,
          newPsw: this.newPsw,
          changeType: this.changeType,
        }).then(() => {
          this.dialog = false;
          this.email = '';
          this.psw = '';
          this.newName = '';
          this.newEmail = '';
          this.newPsw = '';
        });
      }
    },
  },
  // created() {
  //   bus.$on('profileDialogCloser', () => {
  //     this.dialog = false;
  //     this.email = '';
  //     this.psw = '';
  //     this.newName = '';
  //     this.newEmail = '';
  //     this.newPsw = '';
  //   })
  // },
  components: {},
};

</script>
