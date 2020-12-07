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
      <v-file-input
        placeholder="Загрузить фото*"
        prepend-icon="mdi-camera"
        @change="uploadPhoto"
        accept="image/png, image/jpeg, image/bmp"
      ></v-file-input>
      <v-img
      max-height="150"
      max-width="250"
      v-bind:src="imgSrc">
      </v-img>
      <span style="padding-top: 50px;">Описание мероприятия*</span>
      <v-textarea v-model="description"></v-textarea>
      <h1 style="padding-top: 30px;">Выберете дату и время</h1>
      <div class="pickers-wrapper">
        <v-date-picker
          v-model="date"
          elevation="15"
          locale="ru"
          v-bind:first-day-of-week="1"></v-date-picker>
          <!-- {{ date }} -->
        <v-time-picker
          v-model="time"
          class="mt-4"
          format="24hr"
          elevation="15"
          ></v-time-picker>
          <!-- {{ time }} -->
      </div>
      <v-btn color="primary" width="200" @click.prevent="createMeetup">Создать встречу</v-btn>
    </v-row>

  </v-container>

</template>

<script>


export default {
  name: 'OrganizeMeetup',
  components: {
  },
  data () {
    const todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + 1);
      return {
        date: todayDate.toISOString().substr(0, 10),
        time: '09:00',
        title: '',
        location: '',
        description: '',
        imgSrc: '',
        file: null,
      }
    },
  methods: {
    uploadPhoto(file) {
      let reader = new FileReader();
      reader.onloadend = () => {
        this.imgSrc = reader.result;
      }

      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.imgSrc = "";
      }
    },
      createMeetup () {
        if ((this.title === '') || (this.location === '') || (this.description === '')) {
        // eslint-disable-next-line no-alert
        alert('Заполните все  поля!');
      } else {
        this.$store.dispatch('createMeetup',
          {
            title: this.title,
            location: this.location,
            photo: '',
            description: this.description,
            date: new Date(`${date}T${time}`).toISOString(),
            imgSrc: this.imgSrc,
          });
      }
    },
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
.pickers-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
