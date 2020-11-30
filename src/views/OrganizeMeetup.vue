<template>
  <v-container>
    <v-row class="wrapper">
      <h1>Запланировать новую встречу</h1>
      <v-text-field label="Введите название мероприятия*"
        type="text" required v-model="title" style="padding-top: 30px;">
      </v-text-field>
      <v-text-field label="Введите место проведения*"
        type="text" required v-model="location" style="padding-top: 30px;">
      </v-text-field>
      <v-btn color="primary" width="200">Загрузить картинку</v-btn>
      <span style="padding-top: 50px;">Описание мероприятия*</span>
      <v-textarea v-model="description"></v-textarea>
      <h1 style="padding-top: 30px;">Запланировать новую встречу</h1>
      <v-row style="padding-top: 15px;">
        <v-date-picker
          v-model="datePicker"></v-date-picker>
        <v-time-picker
          v-model="timeStep"
          v-bind:allowed-minutes="allowedStep"
          class="mt-4"
          format="24hr"
          style="padding-left: 15px;"></v-time-picker>
      </v-row>
      <v-btn color="primary" width="200">Создать встречу</v-btn>
    </v-row>

  </v-container>

</template>

<script>


export default {
  name: 'OrganizeMeetup',
  components: {
  },
  data () {
      return {
        datePicker: new Date().toISOString().substr(0, 10),
        time: '09:00',
        title: '',
        location: '',
        description: '',
      }
    },
  methods: {
      allowedHours: v => v % 2,
      allowedMinutes: v => v >= 10 && v <= 50,
      allowedStep: m => m % 10 === 0,
    },
};
</script>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
  color: rgb(159, 173, 175);
  display: grid;
  /* font-family: ; */
}
</style>
