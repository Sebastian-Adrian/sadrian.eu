<template>
  <div class="contact-box" v-motion-pop-visible-once>
    <div class="contact-box__cell">
      <div class="box-title">
        <span class="contact-logo">
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
        <button @click="sendEmail">
          abschicken
        </button>
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
  },
  methods: {
    async sendEmail() {
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: this.email,
            subject: this.subject,
            text: this.message,
            name: this.contact_name
          }),
        });

        if (response.ok) {
          console.log('E-Mail erfolgreich gesendet');
        } else {
          console.error('Fehler beim Senden der E-Mail');
        }
      } catch (error) {
        console.error('Fehler beim Senden der E-Mail', error);
      }
    },
  },
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
