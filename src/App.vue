<template>
  <Navigation :skillsetIsVisible="skillsetIsVisible" :servicesIsVisible="servicesIsVisible"
              :portfolioIsVisible="portfolioIsVisible" :contactIsVisible="contactIsVisible">
  </Navigation>
  <Waypoint @change="changeSkillsetState">
    <section class="aboutSection">
      <About>
      </About>
    </section>
    <section class="aboutSection">
      <Skillset>
      </Skillset>
    </section>
  </Waypoint>
  <section class="serviceSection">
    <Waypoint @change="changeServiceState">
      <Services>
      </Services>
    </Waypoint>
  </section>
  <section class="githubSection">
    <Waypoint @change="changePortfolioState">
      <suspense>
        <GitHub>
        </GitHub>
      </suspense>
    </Waypoint>
  </section>
  <section class="serviceSection">
    <waypoint @change="changeContactState">
      <component :is="currentComponent" @unload-contact-component="unloadContactComponent">
      </component>
    </waypoint>
  </section>
    <Footer>
    </Footer>
</template>
<script>

import GitHub from "@/components/GitHub.vue";
import Contact from "@/components/Contact.vue";
import Services from "@/components/Services.vue";
import About from "@/components/About.vue";
import Navigation from "@/components/Navigation.vue";
import LandingPage from "@/components/LandingPage.vue";
import {Waypoint} from "vue-waypoint";
import Skillset from "@/components/Skillset.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  data() {
    return {
      servicesIsVisible: false,
      skillsetIsVisible: false,
      portfolioIsVisible: false,
      contactIsVisible: false,
      isContactFormSend: false,
      currentComponent: 'Contact',
    };
  },
  components: {Footer, Waypoint, Navigation, GitHub, Contact, Services, About, Skillset, LandingPage},
  methods: {
    // übergibt die aktuelle Position auf Screen und prüft auf Sichtbarkeit ('IN')
    changeServiceState (state) {
      this.servicesIsVisible = state.going === 'IN';
    },
    changeSkillsetState (state) {
      this.skillsetIsVisible = state.going === 'IN';
    },
    changePortfolioState (state) {
      this.portfolioIsVisible = state.going === 'IN';
    },
    changeContactState(state) {
      this.contactIsVisible = state.going === 'IN';
    },

    unloadContactComponent() {
      this.currentComponent = 'LandingPage';
    },
  }
}
</script>
<style lang="sass" scoped>


section
  justify-content: center
  align-content: center
  align-items: center
  display: flex
  position: relative
  width: calc(100%)
  top: 0
  bottom: 0
  min-height: 100vh
  padding: 8vh 0 0 0
  z-index: 2

.aboutSection
  background: #020101 url(assets/noise.svg)
  flex-direction: row

.serviceSection
  background: #020101 url(assets/noise.svg)

.githubSection
  background: #020101 url(assets/noise.svg)
  flex-direction: column
  height: 100%

.wayin
  animation: fadein 1s ease 0s 1 normal forwards

@keyframes fadein
  0%
    opacity: 0
    transform: translateX(-50px)


  100%
    opacity: 1
    transform: translateX(0)


.wayout
  animation: fadeout 1s ease 0s 1 normal forwards


@keyframes fadeout
  0%
    opacity: 1
    transform: translateX(0)


  100%
    opacity: 0
    transform: translateX(-50px)


@media only screen and (min-width: 600px) and (max-width: 780px)

  section
    width: 100%
    min-height: 100vh
    padding-top: 0

@media only screen and (max-width: 599px)

  section
    width: 100%
    right: 0
    min-height: 100vh
    padding-top: 0

</style>

