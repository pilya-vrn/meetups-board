<template>
  <v-dialog v-model="dialog" persistent max-width="550">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Изменить данные</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">Изменить данные?</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field prepend-icon="email" name="login" label="example@gmail.com" type="email"
            required v-model="email">
          </v-text-field>
          <v-text-field id="password" prepend-icon="lock" name="password" label="Введите пароль"
            type="password" required v-model="psw">
          </v-text-field>
          <h3>Изменить</h3>
          <v-radio-group v-model="changeType">
            <v-radio label="Имя" :value="'name'"></v-radio>
            <v-text-field v-if="changeType == 'name'" prepend-icon="person" name="newName"
              type="text" required v-model="newName" label="Введите новое имя"></v-text-field>
            <v-radio label="Е-меил" :value="'email'"></v-radio>
            <v-text-field prepend-icon="email" name="newLogin" type="email"
              v-if="changeType == 'email'" required v-model="newEmail" label="Введите новый эмейл">
            </v-text-field>
            <v-radio label="Пароль" :value="'psw'"></v-radio>
            <v-text-field v-if="changeType == 'psw'" prepend-icon="lock" name="newPassword"
              type="password" required v-model="newPsw" label="Введите новый пароль">
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
</template>

<script>
export default {
  name: 'UserDialog',
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
};

</script>
