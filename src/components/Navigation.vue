<template>
  <div class="nav-container">
    <div class="nav">
      <div class="nav-border" ref="nav-border"></div>
      <div class="btn btn-one" @click="scrollToTop">
        <div class="btn_span">
          <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="40">
            <path class="icon"
                  d="M190.256-224.102q56.975-54.487 130.508-87.013 73.534-32.525 159.167-32.525t159.236 32.525q73.602 32.526 130.577 87.013v-533.333q0-4.616-3.847-8.462-3.846-3.847-8.462-3.847h-554.87q-4.616 0-8.462 3.847-3.847 3.846-3.847 8.462v533.333Zm290.693-205.026q54.025 0 91.538-37.513 37.512-37.512 37.512-91.538 0-54.025-37.512-91.538-37.513-37.512-91.538-37.512-54.026 0-91.538 37.512-37.513 37.513-37.513 91.538 0 54.026 37.513 91.538 37.512 37.513 91.538 37.513ZM202.565-140.001q-25.788 0-44.176-18.388t-18.388-44.176v-554.87q0-25.788 18.388-44.176t44.176-18.388h554.87q25.788 0 44.176 18.388t18.388 44.176v554.87q0 25.788-18.388 44.176t-44.176 18.388h-554.87Zm33.331-50.255h488.465v-8.052q-53.334-47.59-115.341-71.334-62.007-23.744-129.02-23.744-66.539 0-128.591 23.552-62.051 23.552-115.513 70.757v8.821Zm245.181-289.127q-32.821 0-55.872-23.051-23.052-23.052-23.052-55.745 0-32.692 23.052-55.744 23.051-23.051 55.744-23.051 32.692 0 55.744 23.105 23.051 23.105 23.051 55.562 0 32.821-23.105 55.873-23.105 23.051-55.562 23.051ZM480-497.256Z"/>
          </svg>
          <span>Profil</span>
        </div>
      </div>
      <div class="btn btn-one" @click="scrollToComponent('Services')">
        <div class="btn_span">
          <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="40">
            <path class="icon"
                  d="M190.256-224.102q56.975-54.487 130.508-87.013 73.534-32.525 159.167-32.525t159.236 32.525q73.602 32.526 130.577 87.013v-533.333q0-4.616-3.847-8.462-3.846-3.847-8.462-3.847h-554.87q-4.616 0-8.462 3.847-3.847 3.846-3.847 8.462v533.333Zm290.693-205.026q54.025 0 91.538-37.513 37.512-37.512 37.512-91.538 0-54.025-37.512-91.538-37.513-37.512-91.538-37.512-54.026 0-91.538 37.512-37.513 37.513-37.513 91.538 0 54.026 37.513 91.538 37.512 37.513 91.538 37.513ZM202.565-140.001q-25.788 0-44.176-18.388t-18.388-44.176v-554.87q0-25.788 18.388-44.176t44.176-18.388h554.87q25.788 0 44.176 18.388t18.388 44.176v554.87q0 25.788-18.388 44.176t-44.176 18.388h-554.87Zm33.331-50.255h488.465v-8.052q-53.334-47.59-115.341-71.334-62.007-23.744-129.02-23.744-66.539 0-128.591 23.552-62.051 23.552-115.513 70.757v8.821Zm245.181-289.127q-32.821 0-55.872-23.051-23.052-23.052-23.052-55.745 0-32.692 23.052-55.744 23.051-23.051 55.744-23.051 32.692 0 55.744 23.105 23.051 23.105 23.051 55.562 0 32.821-23.105 55.873-23.105 23.051-55.562 23.051ZM480-497.256Z"/>
          </svg>
          <span>Services</span>
        </div>
      </div>
      <div class="btn btn-one" @click="scrollToComponent('GitHub')">
        <div class="btn_span">
          <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="40">
            <path class="icon"
                  d="m320-241.333-240-240 241.333-241.334L369-675 174.999-481l192.334 192.334L320-241.333ZM638.667-240 591-287.666l194.001-194.001L592.667-674 640-721.333l240 240L638.667-240Z"/>
          </svg>
          <span>Portfolio</span>
        </div>
      </div>
      <div class="btn btn-one" @click="scrollToComponent('Contact')">
        <div class="btn_span">
          <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="40">
            <path class="icon"
                  d="M252-306.666q51.377 0 100.022 11.833t95.978 35.5v-416q-43.667-28.001-94.079-43.001-50.413-15-101.921-15-37.334 0-73.5 8.667Q142.333-716 106.666-702v421.334Q139-294 176.833-300.333q37.833-6.333 75.167-6.333Zm262.667 47.333q48-23.667 94.833-35.5 46.833-11.833 98.5-11.833 37.334 0 75.834 6t69.5 16.666v-418q-33.667-16-70.715-23.667-37.049-7.667-74.619-7.667-51.667 0-100.667 15t-92.666 43.001v416ZM481.333-160q-50-38-108.666-58.667Q314-239.333 252-239.333q-38.358 0-75.346 9.666-36.987 9.667-72.654 25-22.4 11-43.2-2.333Q40-220.334 40-245.334v-469.333q0-13.666 6.5-25.333Q53-751.667 66-758q43.333-21.333 90.263-31.667Q203.193-800 252-800q61.333 0 119.5 16.333Q429.667-767.333 481.333-734q51-33.333 108.5-49.667Q647.333-800 708-800q48.579 0 95.29 10.333Q850-779.333 893.333-758q13 6.333 19.834 18Q920-728.333 920-714.667v469.333q0 26.263-21.5 39.965-21.5 13.702-43.167.702-35-16-71.987-25.333-36.988-9.333-75.346-9.333-62 0-119.333 21-57.334 21-107.334 58.333Zm-204-330.667Z"/>
          </svg>
          <span>Kontakt</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  props: {
    servicesIsVisible: {
      type: Boolean,
      default: false,
    },
    skillsetIsVisible: {
      type: Boolean,
      default: false,
    },
    portfolioIsVisible: {
      type: Boolean,
      default: false,
    },
    contactIsVisible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    servicesIsVisible(newValue) {
      if (newValue) {
        const navbar = this.$refs["nav-border"];
        navbar.style.boxShadow = "4px 0 15px 2px #9e4c8e"
      }
    },
    skillsetIsVisible(newValue) {
      // Führe Aktionen basierend auf der Sichtbarkeit des Skillsets aus
    },
    portfolioIsVisible(newValue) {
      // Führe Aktionen basierend auf der Sichtbarkeit des Portfolios aus
    },
  },
  methods: {
    scrollToComponent(componentName) {
      const componentElement = document.getElementById(componentName);

      if (componentElement) {
        componentElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
    scrollToTop() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
    handleScroll() {
      const navbar = this.$refs["nav-border"];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Berechne den Prozentsatz der Scrollhöhe
      const scrollPercentage = (scrollPosition / (fullHeight - windowHeight)) * 100;
      const setNavbarStyle = (height, background, boxShadow) => {
        navbar.style.height = height;
        navbar.style.background = background;
        navbar.style.boxShadow = boxShadow;
      };

      const height = `${scrollPercentage}%`;

      if (scrollPercentage < 5) {
        setNavbarStyle(height, "#fff200", "4px 0 15px 2px #fff200");
      } else if (scrollPercentage < 35) {
        setNavbarStyle(height, "#fff200", "4px 0 15px 2px #fff200");
      } else if (scrollPercentage < 50) {
        setNavbarStyle(height, "#9e4c8e", "4px 0 15px 2px #9e4c8e");
      } else if (scrollPercentage < 80) {
        setNavbarStyle(height, "#5CE5D5", "4px 0 15px 2px #5CE5D5");
      } else {
        setNavbarStyle(height, "#7898FB", "4px 0 15px 2px #7898FB");
      }
    },
  },
};
</script>

<style lang="sass" scoped>

.nav-container
  display: block
  position: fixed
  top: 0
  left: 0
  bottom: 0
  width: 140px
  z-index: 10000

.nav
  display: flex
  flex-direction: column
  justify-content: center
  box-sizing: border-box
  height: 100%
  width: 140px
  text-align: center
  left: 0
  right: 0
  line-height: 1
  z-index: 10000
  background-color: rgb(64, 64, 64)
  border-right: .1rem solid rgba(255, 255, 255, 0.32)
  box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.3)

.nav-border
  background-color: #fff200
  width: 1px
  margin-left: auto
  margin-right: auto
  position: absolute
  top: 0
  bottom: 0
  right: 0
  box-shadow: 4px 0 15px 2px #fff200
  height: 0%
  -webkit-transition: all
  -moz-transition: all
  -ms-transition: all
  -o-transition: all
  transition: all 1s ease


.btn
  line-height: 50px
  height: 50px
  text-align: left
  width: 140px
  cursor: pointer

.btn-one
  color: #FFF
  transition: all 0.3s
  position: relative
  span, svg
    transition: all 0.3s
  &::before
    content: ''
    position: absolute
    bottom: 0
    left: 0
    width: calc(100% - 1px)
    height: 100%
    z-index: 0.5
    opacity: 0
    transition: all 0.3s
    border-top-width: 1px
    border-bottom-width: 1px
    border-top-style: solid
    border-bottom-style: solid
    transform: scale(0.1, 1)
    border-top-color: #a95198
    border-bottom-color: #a95198
  &:hover
    span
      letter-spacing: 2px
    svg
      transform: scale(0.8)
    &::before
      opacity: 1
      transform: scale(1, 1)
  &::after
    content: ''
    position: absolute
    bottom: 0
    left: 0
    width: calc(100% - 1px)
    height: 100%
    z-index: 1
    transition: all 0.3s
    background-color: rgba(255, 255, 255, 0.1)
    overflow: hidden
  &:hover::after
    opacity: 0
    transform: scale(0.1, 1)


.btn_span
  display: flex
  align-items: center
  justify-content: left
  span
    transition: all .3s
    padding: 5px
  &:hover
    svg
      transform: scale(0.7)
    &::before
      content: ''
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      height: 100%
      z-index: 1
      opacity: 0
      transition: all 0.3s
      border-top-width: 1px
      border-bottom-width: 1px
      border-top-style: solid
      border-bottom-style: solid
      border-top-color: rgba(255, 255, 255, 0.5)
      border-bottom-color: rgba(255, 255, 255, 0.5)
      transform: scale(0.1, 1)

</style>