<template>
  <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Регистрация</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="example@gmail.com"
                  type="email" required v-model="email">
                  </v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password"
                  label="Введите пароль" type="password" required v-model="psw">
                  </v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password"
                  label="Повторите пароль" type="password" required v-model="pswRpt">
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.prevent="signUp">Зарегистрировать</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      psw: '',
      pswRpt: '',
    };
  },
  methods: {
    signUp() {
      const re = /\S+@\S+\.\S+/;
      if (this.psw !== this.pswRpt) {
        // eslint-disable-next-line no-alert
        alert('Пароли не совпадают!');
      } else if ((this.email === '') || (this.psw === '') || (this.pswRpt === '')) {
        // eslint-disable-next-line no-alert
        alert('Заполните все  поля!');
      } else if (!re.test(this.email)) {
        // eslint-disable-next-line no-alert
        alert('Введите корректный email');
      } else {
        // eslint-disable-next-line no-alert
        alert('успешная регистрация!');
      }
      this.email = '';
      this.psw = '';
      this.pswRpt = '';
    },
  },
};
</script>
