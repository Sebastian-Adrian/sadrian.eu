<template>
  <Navigation>
  </Navigation>

  <div>
      <About :class="{
        'wayout' : !servicesIsVisible && !skillsetIsVisible,
        'wayin' : servicesIsVisible || skillsetIsVisible
      }">
      </About>

    <div class="content-container">
      <div class="content">
        <div v-motion-slide-visible-once-left>
          <div class="info-table-1">
            <div class="info-table__cell-1">
              <div class="info-table__headline">
                <h2>Sebastian Adrian</h2>
              </div>
              <p class="info-table__subtitle">Wirtschaftsinformatiker</p>
              <div class="info-table__content">
                <p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Waypoint @change="changeSkillsetState">
          <Skillset>
          </Skillset>
        </Waypoint>
        <Waypoint @change="changeServiceState">
          <Services>
          </Services>
        </Waypoint>
        <suspense>
          <GitHub>
          </GitHub>
        </suspense>
        <Contact>
        </Contact>
      </div>
    </div>
  </div>
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
      skillsetIsVisible: true,
    };
  },
  components: {Waypoint, Navigation, GitHub, Contact, Services, About, Skillset},
  methods: {
    changeServiceState (state) {
      this.servicesIsVisible = state.going === 'IN';
    },
    changeSkillsetState (state) {
      this.skillsetIsVisible = state.going === 'IN';
    }
  }
}
</script>
<style>

.wayin {
  animation: fadein 1s ease 0s 1 normal forwards;
}

@keyframes fadein {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.wayout {
  animation: fadeout 1s ease 0s 1 normal forwards;
}

@keyframes fadeout {
  0% {
    opacity: 1;
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    transform: translateX(-50px);
  }
}

</style>

