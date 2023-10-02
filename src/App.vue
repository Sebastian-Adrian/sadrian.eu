<template>
  <Navigation>
  </Navigation>


  <Waypoint @change="changeSkillsetState">
    <section class="aboutSection">
      <About>
      </About>
    </section>
  </Waypoint>
  <Waypoint @change="changeServiceState">
    <section class="serviceSection">
      <Services>
      </Services>
    </section>
  </Waypoint>
  <Waypoint @change="changePortfolioState">
  <section class="githubSection">
    <suspense>
      <GitHub>
      </GitHub>
    </suspense>
  </section>
  </Waypoint>
  <section class="serviceSection">
    <Contact>
    </Contact>
  </section>

  <!--
      <div class="footer">
        <ul>
          <li><a href="#">Impressum</a></li>
          <li><a href="#">Datenschutz</a></li>
          <li><a href="#">^</a></li>
        </ul>
      </div>-->
</template>
<script>

import GitHub from "@/components/GitHub.vue";
import Contact from "@/components/Contact.vue";
import Services from "@/components/Services.vue"
import About from "@/components/About.vue"
import Navigation from "@/components/Navigation.vue"
import {Waypoint} from "vue-waypoint";
import Skillset from "@/components/Skillset.vue";

export default {
  name: 'App',
  data() {
    return {
      servicesIsVisible: false,
      skillsetIsVisible: false,
      portfolioIsVisible: false,
    };
  },
  components: {Waypoint, Navigation, GitHub, Contact, Services, About, Skillset},
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
    }
  }
}
</script>
<style lang="sass" scoped>

section
  justify-content: space-around
  align-content: center
  align-items: center
  display: flex
  position: relative
  width: calc(100% - 140px)
  top: 0
  bottom: 0
  right: -140px
  min-height: 100vh
  padding-top: 8vh

.aboutSection
  background: #020101
  flex-direction: row

.serviceSection
  background: #020101
//background: linear-gradient(327.21deg, rgba(126, 7, 120, 0.24) 3.65%, rgba(178, 2, 197, 0.07) 40.32%), linear-gradient(245.93deg, rgb(182, 100, 153) 0%, rgba(203, 25, 209, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #020101

.githubSection
  background: #020101
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



</style>

