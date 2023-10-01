<template>
  <div v-motion-pop-visible-once class="contact-box" :id="componentName">
      <div class="icon-box">
        <span class="contact-logo">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="white" height="32" viewBox="0 -960 960 960" width="32">
            <path d="M567.692-512.308h264.616v-184.615H567.692v184.615ZM700-557.692l-98.462-68.462v-35.385L700-593.077l98.462-68.462v35.385L700-557.692ZM104.615-175.384q-27.615 0-46.115-18.5Q40-212.384 40-240v-480q0-27.616 18.5-46.116t46.115-18.5h750.77q27.615 0 46.115 18.5Q920-747.616 920-720v480q0 27.616-18.5 46.116t-46.115 18.5h-750.77Zm486.77-40.001h264q9.23 0 16.923-7.692Q880-230.769 880-240v-480q0-9.231-7.692-16.923-7.693-7.692-16.923-7.692h-750.77q-9.23 0-16.923 7.692Q80-729.231 80-720v480q0 9.231 7.692 16.923 7.693 7.692 16.923 7.692h24q42-54.23 102.154-87.115Q290.923-335.385 360-335.385T489.231-302.5q60.154 32.885 102.154 87.115ZM360-390.769q41.539 0 70.769-29.231Q460-449.231 460-490.769q0-41.539-29.231-70.77Q401.539-590.77 360-590.77t-70.769 29.231Q260-532.308 260-490.769q0 41.538 29.231 70.769 29.23 29.231 70.769 29.231ZM182-215.385h356q-34.769-38-80.885-59-46.115-21-97.115-21-51 0-97 21t-81 59ZM360-430.77q-24.692 0-42.346-17.653Q300-466.077 300-490.769q0-24.693 17.654-42.346 17.654-17.654 42.346-17.654 24.692 0 42.346 17.654Q420-515.462 420-490.769q0 24.692-17.654 42.346Q384.692-430.77 360-430.77ZM480-480Z"/>
          </svg>
        </span>
        <span>Kontakt</span>
      </div>
      <form>
        <label>Name</label>
        <input v-model="contact_name" required type="text">
        <label>E-Mail</label>
        <span v-if="email">
          <label v-if="!validEmail" class="invalidMailLabel">Ungültige Email</label>
        </span>
        <input v-model="email" :class="{ invalidMailInput: !validEmail && email }" required type="email">
        <label>Betreff</label>
        <input v-model="subject" required type="text">
        <label>Nachricht</label>
        <textarea v-model="message" required rows="8"></textarea>
      </form>
      <div class="submit">
        <button @click="sendEmail">abschicken</button>
      </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';

const email = ref('');
const contact_name = ref('');
const subject = ref('');
const message = ref('');
const componentName = 'Contact';

const validEmail = computed(() => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value);
});

const sendEmail = async () => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: email.value,
        subject: subject.value,
        text: message.value,
        name: contact_name.value,
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
};
</script>

<style scoped>

.contact-box {
  display: block;
  position: relative;
  width: 40vw;
  height: auto;
  text-align: center;
  align-items: center;
  color: #f1f1f1;
  background: rgba(101, 128, 212, 0.27);
  box-shadow: 5px 5px 20px 5px rgba(101, 128, 212, 0.45);
  border-radius: 25px;
  border: #7898FB 1px solid;
  transition: 0.6s;
  padding: 0;
}

.contact-logo {
  height: 32px;
  width: 32px;
}

form {
  margin: 0.8rem auto;
  max-width: 420px;
  padding: 20px;
  text-align: left;
}

label {
  display: inline-block;
  font-size: 0.85rem;
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
  border-color: red;
}

input:focus {
  background-color: #E6E6E1;
  border-color: #6C9959;
  outline: none;
}

.submit {
  margin: 0.8rem;
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
  font-size: 0.85rem;
  font-style: italic;
  font-weight: bold;
  margin-left: 10px;
  text-align: center;
}
</style>
