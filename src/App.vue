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
      <Services :scrollState="scrollState">
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
  <section class="contactSection">
    <waypoint @change="changeContactState">
      <Contact>
      </Contact>
    </waypoint>
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
import { reactive } from 'vue';

const globalStore = reactive({
  lastScrollTop: 0
});

export default {
  name: 'App',
  data() {
    return {
      servicesIsVisible: false,
      skillsetIsVisible: false,
      portfolioIsVisible: false,
      contactIsVisible: false,
      scrollState: null,
    };
  },
  components: {Waypoint, Navigation, GitHub, Contact, Services, About, Skillset},
  methods: {
    // übergibt die aktuelle Position auf Screen und prüft auf Sichtbarkeit ('IN')
    changeServiceState (state) {
      if (state.going === 'IN') {
        addEventListener("scroll", this.scrollEventHandler('services'))
      } else {
        removeEventListener("scroll", this.scrollEventHandler('services'));
      }
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
    getAnteil(element) {
      {
        const myDiv = document.getElementById(element);
        this.scrollState = this.getScrollState(myDiv);
      }
    },
    // Sichtbaren Bereich des Browsers ermitteln
    getViewportHeight() {
      return {
        top: window.scrollY,
        bottom: window.scrollY + window.innerHeight
      };
    },
    // Position und Höhe eines Elements erhalten
    getElementHeight(element) {
      const rect = element.getBoundingClientRect();
      return {
        top: rect.top + window.scrollY,
        bottom: rect.bottom + window.scrollY,
        height: rect.height
      };
    },
    getScrollPercentage() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Berechne den Prozentsatz der Scrollhöhe
      const scrollPercentage = (scrollPosition / (fullHeight - windowHeight)) * 100;
    },
    // Sichtbaren Anteil der Höhe eines Elements und Scrollrichtung ermitteln
    getScrollState(element) {
      const viewport = this.getViewportHeight();
      const elementHeight = this.getElementHeight(element);
      const visibleHeight = Math.min(elementHeight.bottom, viewport.bottom) - Math.max(elementHeight.top, viewport.top);
      const st = window.scrollY || document.documentElement.scrollTop;

      if (visibleHeight > 0) {
        const visibleHeightPercent = (visibleHeight / elementHeight.height) * 100;
        let direction;
        if (st > this.lastScrollTop) {
          direction = "down";
        } else if (st < this.lastScrollTop) {
          direction = "up";
        }
        this.lastScrollTop = st

        return {
          visiblePercent: Math.min(visibleHeightPercent, 100), // Begrenze den Wert auf maximal 100%
          scrollDirection: direction,
        };
      } else {
        return 0;
      }
    },
    scrollEventHandler(elementID) {
      return () => {
        this.getAnteil(elementID)
      };
    }
  },
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

.serviceSection, .contactSection
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

