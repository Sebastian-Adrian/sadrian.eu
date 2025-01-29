<template>
  <div class="about">
    <div  v-motion
      :initial="{ opacity: 0, x: -100 }"
      :enter="{ opacity: 1, x: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }"
      :delay="200" class="profile">
      <h1>Hi, ich bin Sebastian.</h1>
      <h2>Wirtschaftsinformatiker und Entwickler</h2>
      <p>
        Mein halbes Leben gehört die Informatik zu einem großen Teil meiner persönlichen Leidenschaften.
        Seit nunmehr 8 Jahren beschäftige ich mich mit der Entwicklung von JAVA- und WEB-Applikationen.
      </p>
      <p>
        <br>
        Aktuell beschäftige ich mich vor allem mit reaktiven JavaScript Frameworks wie Vue, Angular oder React, sowie
        dem Java Framework Spring Boot.
      </p>
      <p>
        <br>
        Nachfolgend erhalten Sie unter Portfolio einen kleinen Einblick bisheriger Projekte.
      </p>
    </div>
    <div class="slider">
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

$--image-1:url(../assets/slider-1.jpg?format=webp&quality=60)
$--image-2:url(../assets/slider-2.jpg?format=webp&quality=60)
$--image-3:url(../assets/slider-3.jpg?format=webp&quality=60)

.about
  display: flex
  flex-direction: row
  align-items: center
  justify-content: center
  width: 100%
  height: 100%
  top: 0
  right: 0
  left: 0
  position: absolute

.profile
  color: #fff200
  left: 0
  text-align: left
  max-width: calc(35vw - 80px)
  min-width: 400px
  display: block
  position: relative
  transition: .6s
  padding: 1rem 2rem 8px 2rem
  h1,h2
    text-shadow: 1px 0 5px #fff200
    padding-bottom: 8px
  h2
    line-height: 1.5rem

/*  Slider based on Code by Johannes Schiel / Unleashed Design
/*  https://codepen.io/Unleashed-Design/pen/zYMxyNx
.slider
  display: flex
  margin: 10px
  flex-direction: row
  align-items: center
  justify-items: center
  width: 30%
  max-width: 30rem
  gap: 1rem
  z-index: 8000
  .column
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    gap: inherit
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
    border: .1rem solid #fff200
    box-shadow: 1px 0 10px 0 #fff200
    background-position: center center
    background-attachment: fixed
    background-repeat: no-repeat
    background-size: contain

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


@media only screen and (min-width: 781px) and (max-width: 1000px)

  .about
    flex-direction: column-reverse


@media only screen and (min-width: 600px) and (max-width: 780px)

  .about
    flex-direction: column-reverse

@media only screen and (max-width: 599px)

  .slider
    display: none

  .about
    flex-direction: column

  .profile
    max-width: 100vw
    min-width: unset
    h1,h2
      text-shadow: 1px 0 5px #fff200

</style>