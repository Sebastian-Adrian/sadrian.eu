<template>
  <div class="contact-box" v-motion-pop-visible>
    <div class="info-table__cell-2">
      <div class="box-title">
        <span>
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32">
            <path
              d="M570.769-515.385h259.577v-179.692H570.769v179.692Zm129.846-43.423-97.346-67.951v-34.664l97.539 67.846 97.038-67.846v34.769l-97.231 67.846ZM108.128-182.154q-25.758 0-43.558-17.8-17.801-17.801-17.801-43.637v-473.318q0-25.836 17.8-43.637 17.801-17.8 43.559-17.8h743.744q25.758 0 43.558 17.8 17.801 17.801 17.801 43.637v473.318q0 25.836-17.801 43.637-17.8 17.8-43.558 17.8H108.128Zm476.988-36.923h266.576q9.231 0 16.923-7.692 7.693-7.692 7.693-16.923v-473.116q0-9.231-7.693-16.923-7.692-7.692-16.923-7.692H108.308q-9.231 0-16.923 7.692-7.693 7.692-7.693 16.923v473.116q0 9.231 7.693 16.923 7.692 7.692 16.923 7.692h24.499q41.5-52.385 100.052-84.038 58.551-31.654 126.218-31.654 67.299 0 125.664 31.599 58.365 31.6 100.375 84.093ZM358.649-388.923q40.747 0 69.453-28.597 28.706-28.598 28.706-69.231 0-40.634-28.677-69.249-28.676-28.616-69.423-28.616t-69.17 28.538q-28.423 28.538-28.423 69.087 0 40.709 28.394 69.388 28.394 28.68 69.14 28.68ZM182.5-219.077h352.423q-34.1-37.434-79.667-58.102-45.567-20.667-96.469-20.667-50.902 0-96.317 20.677-45.415 20.677-79.97 58.092Zm176.366-206.769q-25.289 0-43.058-17.903-17.769-17.902-17.769-42.961 0-25.059 17.672-43.021 17.673-17.961 42.962-17.961 25.288 0 43.25 17.836 17.961 17.836 17.961 42.798 0 25.125-17.946 43.168-17.947 18.044-43.072 18.044ZM480-480.5Z"/>
          </svg>
        </span>
        <span>
          Kontakt
        </span>
      </div>
      <form>
        <label>Name </label>
        <input type="text" required v-model="contact_name">
        <label>E-mail </label>
        <input type="email" required v-model="email">
        <label>Betreff </label>
        <input type="text" required v-model="subject">
        <label>Nachricht </label>
        <textarea required v-model="message" rows="8"></textarea>
      </form>
      <div class="submit">

      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      contact_name: '',
      subject: '',
      message: ''
    }
  }
}

</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  text-align: left;
  padding: 20px;
}

label {
  display: inline-block;
  margin: 15px 0 5px;
  font-size: .85rem;
}

input {
  display: block;
  padding: 5px 6px;
  width: 100%;
  box-sizing: border-box;

}

textarea {
  display: block;
  padding: 5px 6px;
  width: 100%;
  box-sizing: border-box;
}


</style>
