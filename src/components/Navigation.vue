<template>
    <nav>
      <ul>
        <li @click="scrollToTop">
          <a>
              <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32">
                <path fill="white"
                      d="M190.256-224.102q56.975-54.487 130.508-87.013 73.534-32.525 159.167-32.525t159.236 32.525q73.602 32.526 130.577 87.013v-533.333q0-4.616-3.847-8.462-3.846-3.847-8.462-3.847h-554.87q-4.616 0-8.462 3.847-3.847 3.846-3.847 8.462v533.333Zm290.693-205.026q54.025 0 91.538-37.513 37.512-37.512 37.512-91.538 0-54.025-37.512-91.538-37.513-37.512-91.538-37.512-54.026 0-91.538 37.512-37.513 37.513-37.513 91.538 0 54.026 37.513 91.538 37.512 37.513 91.538 37.513ZM202.565-140.001q-25.788 0-44.176-18.388t-18.388-44.176v-554.87q0-25.788 18.388-44.176t44.176-18.388h554.87q25.788 0 44.176 18.388t18.388 44.176v554.87q0 25.788-18.388 44.176t-44.176 18.388h-554.87Zm33.331-50.255h488.465v-8.052q-53.334-47.59-115.341-71.334-62.007-23.744-129.02-23.744-66.539 0-128.591 23.552-62.051 23.552-115.513 70.757v8.821Zm245.181-289.127q-32.821 0-55.872-23.051-23.052-23.052-23.052-55.745 0-32.692 23.052-55.744 23.051-23.051 55.744-23.051 32.692 0 55.744 23.105 23.051 23.105 23.051 55.562 0 32.821-23.105 55.873-23.105 23.051-55.562 23.051ZM480-497.256Z"/>
              </svg>
          </a>
          <span>
            Profil
          </span>
        </li>
        <li @click="scrollToComponent('Skillset')">
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960"
                 width="32"><path fill="white"
                d="M281.731-121.731v-149.257q-57.385-51.895-88.693-116.666-31.307-64.772-31.307-132.972 0-132.375 92.8-225.201 92.8-92.827 225.371-92.827 107.944 0 194.754 65.638 86.809 65.637 112.537 168.901l41.473 164.169q3.604 14.845-5.48 26.53-9.083 11.685-24.724 11.685h-79.808v138.462q0 25.745-18.077 43.642-18.077 17.896-43.461 17.896h-98.462v80h-36.923v-116.923h135.385q10.384 0 17.499-6.923 7.116-6.923 7.116-17.692v-175.385h108.115L751.731-595.5q-23.385-91.885-99.577-149.058-76.192-57.173-172.162-57.173-116.607 0-198.973 81.729-82.365 81.728-82.365 198.771 0 60.188 24.558 114.433 24.557 54.246 70.057 96.108l25.385 23.305v165.654h-36.923Zm212.769-340ZM459.646-380h42.046l2.924-35.762q15.692-2.93 29.884-10.584t24.423-19.192l30.308 14.923 21.077-35.539-28-20.308q6.615-16.769 6.615-33.538t-6.615-33.538l28-20.308-21.077-35.539-30.308 14.923Q548.692-606 534.5-613.601q-14.192-7.602-29.884-10.707L501.585-660h-42.047l-2.923 35.762q-15.692 2.93-29.884 10.584-14.193 7.654-24.423 19.192L372-609.385l-21.077 35.539 28 20.308q-6.615 16.769-6.615 33.538t6.615 33.538l-28 20.308L372-430.615l30.308-14.923q10.23 11.538 24.423 19.139 14.192 7.602 29.884 10.707L459.646-380Zm20.924-65.385q-31.108 0-52.839-21.776Q406-488.937 406-520.045q0-31.109 21.776-52.84 21.776-21.73 52.885-21.73 31.108 0 52.839 21.776 21.731 21.776 21.731 52.884 0 31.109-21.776 52.84-21.776 21.73-52.885 21.73Z"/>
            </svg>
          </a>
          <span>
            Skillset
          </span>
        </li>
        <li @click="scrollToComponent('Services')">
          <a>
            <svg height="32" viewBox="0 -960 960 960" width="32"
                 xmlns="http://www.w3.org/2000/svg"><path fill="white"
                d="M472.5-166.154v-36.923h260.308q9.615 0 17.115-6.154 7.5-6.154 7.5-16.153v-272.462q0-111.039-82.038-185.519Q593.346-757.846 480-757.846q-113.462 0-195.5 74.481-82.038 74.48-82.038 185.519v222.769h-18.27q-23.808 0-40.923-15.961-17.115-15.962-17.115-39.77v-74.269q0-17.808 11.653-30.885 11.654-13.077 27.731-22.153l.693-48.539q1.961-61 28.096-113.654 26.134-52.654 68.538-91.327 42.404-38.673 98.693-60.442Q417.846-793.846 480-793.846q62.154 0 118.135 21.769 55.98 21.769 98.634 60.327 42.654 38.557 68.539 90.961Q791.193-568.385 793.654-507l.692 48.154q15.308 6.961 27.404 19.154 12.096 12.192 12.096 29.5v85.269q0 17.308-12.096 29.5t-27.404 19.154v50.885q0 24.846-17.961 42.038-17.962 17.192-43.577 17.192H472.5Zm-95.385-254.654q-12.038 0-20.731-7.923-8.692-7.923-8.692-19.577 0-11.654 8.692-20.154 8.693-8.5 20.731-8.5 11.654 0 20.346 8.5 8.693 8.5 8.693 20.154t-8.693 19.577q-8.692 7.923-20.346 7.923Zm206.154 0q-12.038 0-20.73-7.923-8.693-7.923-8.693-19.577 0-11.654 8.693-20.154 8.692-8.5 20.73-8.5 11.654 0 20.347 8.5 8.692 8.5 8.692 20.154t-8.692 19.577q-8.693 7.923-20.347 7.923Zm-310.385-62.923q-4.5-87.384 57.462-148.904 61.962-61.519 151.539-61.519 75.23 0 134 45.269 58.769 45.27 72.115 118.616-78.231-1.116-145.404-39.423Q475.423-608 439.769-677.231q-13.961 67.5-58.596 118.135-44.635 50.635-108.289 75.365Z"/>
            </svg>
          </a>
          <span>
            Services
          </span>
        </li>
        <li @click="scrollToComponent('GitHub')">
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32">
              <path fill="white"
                    d="m320-241.333-240-240 241.333-241.334L369-675 174.999-481l192.334 192.334L320-241.333ZM638.667-240 591-287.666l194.001-194.001L592.667-674 640-721.333l240 240L638.667-240Z"/>
            </svg>
          </a>
          <span>
            Portfolio
          </span>
        </li>
        <li @click="scrollToComponent('Contact')">
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="32" viewBox="0 -960 960 960"
                 width="32">
              <path fill="white"
                    d="M567.692-512.308h264.616v-184.615H567.692v184.615ZM700-557.692l-98.462-68.462v-35.385L700-593.077l98.462-68.462v35.385L700-557.692ZM104.615-175.384q-27.615 0-46.115-18.5Q40-212.384 40-240v-480q0-27.616 18.5-46.116t46.115-18.5h750.77q27.615 0 46.115 18.5Q920-747.616 920-720v480q0 27.616-18.5 46.116t-46.115 18.5h-750.77Zm486.77-40.001h264q9.23 0 16.923-7.692Q880-230.769 880-240v-480q0-9.231-7.692-16.923-7.693-7.692-16.923-7.692h-750.77q-9.23 0-16.923 7.692Q80-729.231 80-720v480q0 9.231 7.692 16.923 7.693 7.692 16.923 7.692h24q42-54.23 102.154-87.115Q290.923-335.385 360-335.385T489.231-302.5q60.154 32.885 102.154 87.115ZM360-390.769q41.539 0 70.769-29.231Q460-449.231 460-490.769q0-41.539-29.231-70.77Q401.539-590.77 360-590.77t-70.769 29.231Q260-532.308 260-490.769q0 41.538 29.231 70.769 29.23 29.231 70.769 29.231ZM182-215.385h356q-34.769-38-80.885-59-46.115-21-97.115-21-51 0-97 21t-81 59ZM360-430.77q-24.692 0-42.346-17.653Q300-466.077 300-490.769q0-24.693 17.654-42.346 17.654-17.654 42.346-17.654 24.692 0 42.346 17.654Q420-515.462 420-490.769q0 24.692-17.654 42.346Q384.692-430.77 360-430.77ZM480-480Z"/>
            </svg>
          </a>
          <span>
            Kontakt
          </span>
        </li>
      </ul>
    </nav>
</template>
<script>

export default {

  mounted() {
    // window.addEventListener("scroll", this.handleScroll);
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
  /*
  watch: {

    servicesIsVisible(isVisible) {
      if (!isVisible && this.skillsetIsVisible) {
        this.setNavbarStyles("#fff200", "4px 0 15px 2px #fff200");
      } else if (!isVisible && this.portfolioIsVisible) {
        this.setNavbarStyles("#5CE5D5", "4px 0 15px 2px #5CE5D5");
      }
    },
    skillsetIsVisible(isVisible) {
      if (!isVisible && this.servicesIsVisible) {
        this.setNavbarStyles("#9e4c8e", "4px 0 15px 2px #9e4c8e");
      }
    },
    portfolioIsVisible(isVisible) {
      if (!isVisible && this.contactIsVisible) {
        this.setNavbarStyles("#7898FB", "4px 0 15px 2px #7898FB");
      } else if (!isVisible && this.servicesIsVisible) {
        this.setNavbarStyles("#9e4c8e", "4px 0 15px 2px #9e4c8e");
      }
    },
    contactIsVisible(isVisible) {
      if (!isVisible && this.portfolioIsVisible) {
        this.setNavbarStyles("#5CE5D5", "4px 0 15px 2px #5CE5D5");
      }
    },
  },

     */
  methods: {
    scrollToComponent(componentName) {
      const componentElement = document.getElementById(componentName);

      if (componentElement) {
        componentElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
      }
    },
    scrollToTop() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
    setNavbarStyles(background, boxShadow) {
      const navbar = this.$refs["nav-border"];
      navbar.style.background = background;
      navbar.style.boxShadow = boxShadow;
    },
    handleScroll() {
      const navbar = this.$refs["nav-border"];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Berechne den Prozentsatz der Scrollhöhe
      const scrollPercentage = (scrollPosition / (fullHeight - windowHeight)) * 100;
      const setNavbarScrollHeight = (height) => {
        navbar.style.height = height;
      };

      const height = `${scrollPercentage}%`;

      if (scrollPercentage < 5) {
        setNavbarScrollHeight(height);
      } else if (scrollPercentage < 35) {
        setNavbarScrollHeight(height);
      } else if (scrollPercentage < 50) {
        setNavbarScrollHeight(height);
      } else if (scrollPercentage < 80) {
        setNavbarScrollHeight(height);
      } else {
        setNavbarScrollHeight(height);
      }
    },
  },
};
</script>

<style lang="sass" scoped>

nav
  display: flex
  position: fixed
  width: 100vw
  top: 0
  left: 0
  bottom: 0
  z-index: 10000
  height: 50px
  ul
    display: flex
    flex-direction: row
    justify-content: center
    height: 50px
    width: 100%
    margin: 0
    padding: 0
    list-style: none
    background-color: rgb(64, 64, 64)
    box-shadow: 0 4px 15px 2px rgba(187, 187, 187, 0.45)
  li
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    color: #FFF
    cursor: pointer
    width: 140px
    position: relative
    list-style: none
    a
      font-size: 1rem
    svg, a
      transition: all 0.3s
    svg
      transform: scale(0)
      margin: 0 -2rem 0 0
    &::before
      content: ''
      position: absolute
      left: 0
      bottom: 0
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
      border-top-color: #ffffff
      border-bottom-color: #ffffff
    &:hover
      a
        letter-spacing: 2px
      svg
        transform: scale(1)
        transform-origin: -4rem 50%
        margin: 0 .3rem 0 0
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
      transition: all 0.3s
      background-color: rgba(255, 255, 255, 0.1)
      overflow: hidden
    &:hover::after
      opacity: 0
      transform: scale(0.1, 1)

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
  height: 0
  -webkit-transition: all
  -moz-transition: all
  -ms-transition: all
  -o-transition: all
  transition: all 1s ease

@media only screen and (min-width: 600px) and (max-width: 780px)


@media only screen and (max-width: 599px)

  nav
    ul
      li
        svg
          transform: scale(1)
          margin: 0 .3rem 0 0
        span
          display: none
</style>