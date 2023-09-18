<template>
  <div v-motion-pop-visible-once class="contact-box" ref="contactBox">
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
        <input v-model="contact_name" required type="text">
        <label>E-mail</label>
        <span v-if="email">
          <label v-if="!validEmail" class="invalidMailLabel">ungültige Email</label>
        </span>
        <input v-model="email" :class="{invalidMailInput: !validEmail && email}" required type="email">
        <label>Betreff </label>
        <input v-model="subject" required type="text">
        <label>Nachricht </label>
        <textarea v-model="message" required rows="8"></textarea>
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
import emitter from "@/helpers/eventBus"
export default {
  computed:
    {
      validEmail() {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)
      }
    },
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
  mounted() {
    // Auf das Ereignis hören und scrollen
    emitter.on('contactBox', () => {
      // Zugriff auf das Ziel-Element über die Ref-Referenz
      const targetElement = this.$refs.contactBox;

      // Scrollen zum Ziel-Element
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

</script>

<style scoped>
form {
  margin: 30px auto;
  max-width: 420px;
  padding: 20px;
  text-align: left;
}

label {
  display: inline-block;
  font-size: .85rem;
  margin: 15px 0 5px;
}

input {
  background-color: #fffffa;
  border-radius: 5px;
  box-sizing: border-box;
  display: block;
  padding: 5px 6px;
  width: 100%;

}

.invalidMailInput {
  border-color: red;
}

.invalidMailInput:focus {
  border-color: red
}


input:focus {
  background-color: #E6E6E1;
  border-color: #6C9959;
  outline: none;
}

textarea {
  background-color: #fffffa;
  border-radius: 5px;
  box-sizing: border-box;
  display: block;
  padding: 5px 6px;
  width: 100%;
}

textarea:focus {
  background-color: #E6E6E1;
  border-color: #6C9959;
  outline: none;
}

.invalidMailLabel {
  color: #d00000;
  font-size:.85rem;
  font-style: italic;
  font-weight: bold;
  margin-left: 10px;
  text-align: center;
}

</style>
