<template>
  <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Войти</v-toolbar-title>
              </v-toolbar>
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
                <v-btn color="primary" @click.prevent="signIn">Войти</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      psw: '',
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/');
      }
    },
  },
  methods: {
    signIn() {
      const re = /\S+@\S+\.\S+/;
      if ((this.email === '') || (this.psw === '')) {
        // eslint-disable-next-line no-alert
        alert('Заполните все  поля!');
      } else if (!re.test(this.email)) {
        // eslint-disable-next-line no-alert
        alert('Введите корректный email');
      } else {
        this.$store.dispatch('signUserIn', {
          email: this.email,
          psw: this.psw,
        });
      }
      this.email = '';
      this.psw = '';
      this.name = '';
    },
  },
};
</script>
