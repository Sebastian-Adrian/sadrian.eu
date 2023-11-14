<template>
  <div v-motion-slide-visible-once-right :id="componentName">
    <div class="skillset">
      <div class="skillset__cell">
        <div class="icon-box">
          <span>
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960"
                 width="32"><path
                d="M281.731-121.731v-149.257q-57.385-51.895-88.693-116.666-31.307-64.772-31.307-132.972 0-132.375 92.8-225.201 92.8-92.827 225.371-92.827 107.944 0 194.754 65.638 86.809 65.637 112.537 168.901l41.473 164.169q3.604 14.845-5.48 26.53-9.083 11.685-24.724 11.685h-79.808v138.462q0 25.745-18.077 43.642-18.077 17.896-43.461 17.896h-98.462v80h-36.923v-116.923h135.385q10.384 0 17.499-6.923 7.116-6.923 7.116-17.692v-175.385h108.115L751.731-595.5q-23.385-91.885-99.577-149.058-76.192-57.173-172.162-57.173-116.607 0-198.973 81.729-82.365 81.728-82.365 198.771 0 60.188 24.558 114.433 24.557 54.246 70.057 96.108l25.385 23.305v165.654h-36.923Zm212.769-340ZM459.646-380h42.046l2.924-35.762q15.692-2.93 29.884-10.584t24.423-19.192l30.308 14.923 21.077-35.539-28-20.308q6.615-16.769 6.615-33.538t-6.615-33.538l28-20.308-21.077-35.539-30.308 14.923Q548.692-606 534.5-613.601q-14.192-7.602-29.884-10.707L501.585-660h-42.047l-2.923 35.762q-15.692 2.93-29.884 10.584-14.193 7.654-24.423 19.192L372-609.385l-21.077 35.539 28 20.308q-6.615 16.769-6.615 33.538t6.615 33.538l-28 20.308L372-430.615l30.308-14.923q10.23 11.538 24.423 19.139 14.192 7.602 29.884 10.707L459.646-380Zm20.924-65.385q-31.108 0-52.839-21.776Q406-488.937 406-520.045q0-31.109 21.776-52.84 21.776-21.73 52.885-21.73 31.108 0 52.839 21.776 21.731 21.776 21.731 52.884 0 31.109-21.776 52.84-21.776 21.73-52.885 21.73Z"/>
            </svg>
          </span>
          <span>
            Skillset
          </span>
        </div>
        <div class="info-table__content">
          <table>
            <thead>
            <tr>
              <td>Languages</td>
              <td>Frameworks</td>
              <td>Software</td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>JAVA</td>
              <td>SpringBoot</td>
              <td>IntelliJ</td>
            </tr>
            <tr>
              <td>Javascript</td>
              <td>Vue.js</td>
              <td>vsCode</td>
            </tr>
            <tr>
              <td>Python</td>
              <td>PyQt5</td>
              <td>PyCharm</td>
            </tr>
            <tr>
              <td>PHP, HTML5, CSS3 (Sass)</td>
              <td>Node.js</td>
              <td>PhpStorm</td>
            </tr>
            </tbody>
          </table>
          <details>
            <summary></summary>
            <table>
              <tbody>
              <tr>
                <td>Kotlin</td>
                <td>Bootstrap</td>
                <td>Webstorm</td>
              </tr>
              <tr>
                <td>shellscript</td>
                <td>(..))</td>
                <td>Unix</td>
              </tr>
              </tbody>
            </table>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const componentName = 'Skillset'
</script>

<style lang="sass" scoped>

.skillset
  display: flex
  position: relative
  width: 40vw
  height: auto
  text-align: center
  align-items: center
  color: #f1f1f1
  background: rgba(255, 242, 0, 0.27)
  box-shadow: 5px 5px 20px 5px rgba(255, 242, 0, 0.27)
  border-radius: 25px
  border: #fff200 1px solid
  transition: .6s
  padding: 0
  span
    display: flex
    flex-direction: column
    align-items: flex-start

.skillset__cell
  background: none
  display: table-cell
  width: 100%
  border-radius: 25px

table
  text-align: left
  font-size: .9em
  border-spacing: 10px

td
  text-align: left
  font-size: .9em
  border-spacing: 10px
  background-color: rgba(255, 242, 0, 0.38)
  border-top: 1px solid
  border-bottom: 1px solid
  border-radius: 15px
  border-color: #fff200
  padding: 10px
  margin: 0

tbody, p, a
  color: #ffffff

thead
  font-weight: 800
  span
    align-items: center
    vertical-align: center
    text-align: left
    margin: 0
    padding: 0
    display: inline-flex
    font-size: .9rem

details summary
  cursor: pointer

  > *
    display: inline

details[open] summary::after
  content: "ausblenden"

  span
    display: inline-flex
    margin-right: 5px
    padding: 0
    align-items: center
    text-align: left

@media only screen and (max-width: 1024px)

  .skillset
    width: 60vw


</style>