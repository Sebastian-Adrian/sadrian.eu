<template>
<div v-motion-slide-visible-once-left class="about" :class="{hidden: isVisible}">
  <div class="about-box">
    <div class="profile-box">
      <img class="profile-image" src="@/assets/foto_small.png">
      <div class="profile-text">
        <h1>Hi, ich bin Sebastian.</h1>
        <h2>Wirtschaftsinformatiker und Entwickler</h2>
        <p>
          Mein halbes Leben gehört die Informatik zu einem großen Teil meiner persönlichen Leidenschaften.
          Seit nunmehr 8 Jahren beschäftige ich mich mit der Entwicklung von JAVA- und WEB Applikationen.
        </p>
        <p>
          (...) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur dicta dolore
          dolorem doloremque earum est, et exercitationem explicabo impedit libero numquam porro possimus qui
          quidem suscipit velit, veniam voluptatibus. (...)
        </p>
      </div>
    </div>
  </div>
</div>
</template>


<script>

export default {
  data() {
    return {
      isVisible: false,
    };
  },
  created() {
    // Hören Sie auf das Ereignis "visibility-changed" von mitt
    this.$mitt.on('visibility-changed', (isVisible) => {
      this.isVisible = isVisible;
    });
  },
};

const componentName = 'About';
</script>
<style>
.hidden {
  display: none;
}
</style>