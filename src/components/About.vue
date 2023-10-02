<template>
  <div class="about-path">
  <div v-motion-slide-visible-once-left class="about">
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
  <div class="container">
    <div class="column column-1">
      <div class="item item-1"></div>
      <div class="item item-2"></div>
      <div class="item item-3"></div>
    </div>
    <div class="column column-2">
      <div class="item item-1"></div>
      <div class="item item-2"></div>
      <div class="item item-3"></div>
    </div>

    <div class="column column-3">
      <div class="item item-1"></div>
      <div class="item item-2"></div>
      <div class="item item-3"></div>
    </div>
  </div>
</div>
</template>
<script>

const componentName = 'About';
</script>
<style lang="sass" scoped>

$--image-1:url(../assets/slider-1.jpg?format=webp&quality=40)
$--image-2:url(../assets/slider-2.jpg?format=webp&quality=40)
$--image-3:url(../assets/slider-3.jpg?format=webp&quality=40)

.about-path
  clip-path: polygon(0 0, 100% 0, 100% 93%, 0 100%) border-box
  background: linear-gradient(327.21deg, rgba(7, 126, 107, 0.24) 3.65%, rgba(2, 197, 173, 0.07) 40.32%), linear-gradient(245.93deg, rgb(6, 149, 147) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #212b30
  display: flex
  flex-direction: row
  align-items: center
  justify-content: space-around
  width: 100%
  height: 100%
  top: 0
  right: 0
  left: 0
  position: absolute

.about
  color: #f1f1f1
  left: 0
  text-align: left
  max-width: calc(35vw - 80px)
  min-width: 400px
  display: block
  position: relative
  transition: .6s

.container
  display: flex
  flex-direction: row
  align-items: center
  justify-items: center
  width: 90%
  max-width: 35rem
  gap: 0.5rem
  z-index: 10000
  .column
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    gap: 0.5rem
    width: 100%
  .column-1
    .item-1
      height: 8rem
      animation: background 10s 150ms infinite ease-in-out

    .item-2
      height: 7rem
      animation: background 10s 300ms infinite ease-in-out

    .item-3
      height: 8rem
      animation: background 10s 450ms infinite ease-in-out
  .column-2
    .item-1
      height: 6rem
      animation: background 10s 150ms infinite ease-in-out

    .item-2
      height: 8rem
      animation: background 10s 300ms infinite ease-in-out

    .item-3
      height: 6rem
      animation: background 10s 450ms infinite ease-in-out
  .column-3
    .item-1
      height: 8rem
      animation: background 10s 280ms infinite ease-in-out
    .item-2
      height: 7rem
      animation: background 10s 95ms infinite ease-in-out
    .item-3
      height: 8rem
      animation: background 10s 350ms infinite ease-in-out
  .column .item
    width: inherit
    border-radius: 0.5rem
    background-position: center center
    background-attachment: fixed
    background-repeat: no-repeat
    background-size: cover

@keyframes background
  0%
    background-image: $--image-1
    filter: blur(0px)

  10%
    background-image: $--image-1
    filter: blur(0px)

  20%
    background-image: $--image-1
    filter: blur(0px)

  30%
    background-image: $--image-1
    filter: blur(2px)

  33%
    background-image: $--image-2
    filter: blur(2px)

  43%
    background-image: $--image-2
    filter: blur(0px)

  53%
    background-image: $--image-2
    filter: blur(0px)

  63%
    background-image: $--image-2
    filter: blur(2px)

  66%
    background-image: $--image-3
    filter: blur(2px)

  76%
    background-image: $--image-3
    filter: blur(0px)

  86%
    background-image: $--image-3
    filter: blur(0px)

  96%
    background-image: $--image-3
    filter: blur(2px)

  100%
    background-image: $--image-1
    filter: blur(2px)

</style>