<template>
    <div v-motion-slide-visible-once-left :id="componentName">
      <div class="service" id="services">
        <div class="service__cell">
          <div class="icon-box">
          <span>
            <svg height="32" viewBox="0 -960 960 960" width="32"
                 xmlns="http://www.w3.org/2000/svg"><path fill="white"
                d="M472.5-166.154v-36.923h260.308q9.615 0 17.115-6.154 7.5-6.154 7.5-16.153v-272.462q0-111.039-82.038-185.519Q593.346-757.846 480-757.846q-113.462 0-195.5 74.481-82.038 74.48-82.038 185.519v222.769h-18.27q-23.808 0-40.923-15.961-17.115-15.962-17.115-39.77v-74.269q0-17.808 11.653-30.885 11.654-13.077 27.731-22.153l.693-48.539q1.961-61 28.096-113.654 26.134-52.654 68.538-91.327 42.404-38.673 98.693-60.442Q417.846-793.846 480-793.846q62.154 0 118.135 21.769 55.98 21.769 98.634 60.327 42.654 38.557 68.539 90.961Q791.193-568.385 793.654-507l.692 48.154q15.308 6.961 27.404 19.154 12.096 12.192 12.096 29.5v85.269q0 17.308-12.096 29.5t-27.404 19.154v50.885q0 24.846-17.961 42.038-17.962 17.192-43.577 17.192H472.5Zm-95.385-254.654q-12.038 0-20.731-7.923-8.692-7.923-8.692-19.577 0-11.654 8.692-20.154 8.693-8.5 20.731-8.5 11.654 0 20.346 8.5 8.693 8.5 8.693 20.154t-8.693 19.577q-8.692 7.923-20.346 7.923Zm206.154 0q-12.038 0-20.73-7.923-8.693-7.923-8.693-19.577 0-11.654 8.693-20.154 8.692-8.5 20.73-8.5 11.654 0 20.347 8.5 8.692 8.5 8.692 20.154t-8.692 19.577q-8.693 7.923-20.347 7.923Zm-310.385-62.923q-4.5-87.384 57.462-148.904 61.962-61.519 151.539-61.519 75.23 0 134 45.269 58.769 45.27 72.115 118.616-78.231-1.116-145.404-39.423Q475.423-608 439.769-677.231q-13.961 67.5-58.596 118.135-44.635 50.635-108.289 75.365Z"/>
            </svg>
          </span>
          <span>
            Services
          </span>
          </div>
          <p class="box__subtitle">Folgende Leistungen biete ich an</p>
            <table>
              <tr>
                <th>
                  <span>
                    <svg fill="white" height="32" viewBox="0 -960 960 960" width="32" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M480-120q-74.615 0-140.308-28.423Q274-176.846 225.09-225.5q-48.911-48.654-77-114.423Q120-405.692 120-480.821q0-74.692 28.09-140.269 28.089-65.577 77-114.231 48.91-48.654 114.602-76.666Q405.385-840 480-840q74.692 0 140.346 28.013Q686-783.975 734.91-735.321q48.911 48.654 77.001 114.231Q840-555.513 840-480.821q0 75.129-28.089 140.898-28.09 65.769-77.001 114.423-48.91 48.654-114.564 77.077Q554.692-120 480-120Zm0-32.41q38.154-44.718 62.205-91.026 24.052-46.307 39.334-105.949H378.615Q394.769-287.282 418.564-241q23.795 46.282 61.436 88.59Zm-44.923-4.872q-30.103-34.282-54.68-85.705-24.577-51.423-36.859-106.398H180.102q37.308 80.924 102.449 129.744 65.141 48.821 152.526 62.359Zm90.513-.154q82.82-11.589 150.141-62.282 67.321-50.692 104.167-129.667H616.616q-16.283 56.103-40.526 107.013-24.244 50.911-50.5 84.936ZM168.513-383.231h168.513q-4.539-26.718-6.27-50.884-1.73-24.167-1.73-46.706 0-23.153 1.807-46.756 1.808-23.603 6.346-49.346H168.513q-7.359 21.897-11.013 46.32-3.654 24.423-3.654 49.782 0 25.872 3.654 50.526 3.654 24.654 11.013 47.064Zm202.666 0h217.795q4.693-27.846 6.5-50.679 1.808-22.834 1.808-46.911 0-23.41-1.808-45.833-1.807-22.423-6.5-50.269H371.179q-4.692 27.846-6.5 50.269-1.807 22.423-1.807 45.833 0 24.077 1.807 46.911 1.808 22.833 6.5 50.679Zm251.642 0h168.666q7.359-22.41 11.013-47.064t3.654-50.526q0-25.359-3.654-49.782-3.654-24.423-11.013-46.32h-168q4.026 28.974 5.834 52.167 1.807 23.192 1.807 43.935 0 22.693-1.884 46.295-1.885 23.603-6.423 51.295Zm-6.359-227.538h163.436q-36.795-81.641-102.193-131.052-65.397-49.41-152.782-61.666 30.103 37.974 53.834 87.833 23.73 49.859 37.705 104.885Zm-237.847 0h203.59q-15.692-58.718-41.025-107.667-25.334-48.949-61.18-88.846-34.872 36.666-59.077 83.743t-42.308 112.77Zm-198.513 0h163.59q13.667-54.564 37.064-104.09 23.398-49.526 53.654-88.475-87.641 12.77-152.423 61.898T180.102-610.769Z"/>
                    </svg>
                    <a>Webdevelopment</a>
                  </span>
                </th>
                <th>
                  <span>
                   <svg height="32" viewBox="0 -960 960 960" width="32" xmlns="http://www.w3.org/2000/svg">
                     <path fill="white"
                         d="M408.41-163.333h143.18v-30.769H408.41v30.769ZM298.461-80q-24.577 0-41.519-16.942Q240-113.884 240-138.461v-683.078q0-24.577 16.942-41.519Q273.884-880 298.461-880h363.078q24.577 0 41.519 16.942Q720-846.116 720-821.539v683.078q0 24.577-16.942 41.519Q686.116-80 661.539-80H298.461Zm-24.615-163.076v104.615q0 9.231 7.692 16.923 7.692 7.692 16.923 7.692h363.078q9.231 0 16.923-7.692 7.692-7.692 7.692-16.923v-104.615H273.846Zm0-33.846h412.308v-478.463H273.846v478.463Zm0-512.309h412.308v-32.308q0-9.231-7.692-16.923-7.692-7.692-16.923-7.692H298.461q-9.231 0-16.923 7.692-7.692 7.692-7.692 16.923v32.308Zm0 546.155v129.23-129.23Zm0-546.155V-846.154v56.923Z"/>
                   </svg>
                    <a>UI-Design</a>
                  </span>
                </th>
              </tr>
              <tr>
                <td>
                  Ich entwickle moderne und individuelle Responsive-Webseiten
                </td>
                <td>
                  Ich gestalte moderne und benutzerfreundliche UserInterfaces
                </td>
              </tr>
            </table>
          </div>
      </div>
    </div>
</template >
<script setup>
  const componentName = 'Services'
</script>
<style lang="sass" scoped>

.service
  display: flex
  position: relative
  width: 40vw
  height: auto
  text-align: center
  align-items: center
  color: #f1f1f1
  box-shadow: 5px 5px 20px 5px rgba(161, 27, 146, 0.44)
  border-radius: 25px
  border: #9e4c8e 1px solid
  transition: .6s
  span
    display: flex
    flex-direction: row
    align-items: center

.service__cell
  background: rgba(161, 27, 146, 0.27)
  display: table-cell
  width: 100%
  border-radius: 25px
  padding: 10px

table
  text-align: left
  font-size: .9em
  border-spacing: 10px
  width: 100%
  padding-right: 0.8rem
  td, th
    width: 30%
    text-align: left
    font-size: .9em
    background-color: rgba(91, 53, 94, 0.38)
    border-top: 1px solid
    border-bottom: 1px solid
    border-radius: 15px
    border-color: #9e4c8e
    padding: 10px
    margin: 0
    a
      font-size: .9rem
  th
    font-weight: 800
    span
      display: flex
      flex-direction: row
      align-items: center
      vertical-align: center
      text-align: left
      font-size: .9rem


@media only screen and (min-width: 781px) and (max-width: 1400px)

  .service
    width: 65vw


@media only screen and (min-width: 600px) and (max-width: 780px)

  .service
    width: 75vw

    thead
      span
        flex-direction: column

    table
      font-size: .8rem

@media only screen and (min-width: 450px) and (max-width: 599px)

  .service
    width: 85vw
  table
    border-spacing: 5px
    padding-right: 0
    td, th
      font-size: .7rem
      padding: 5px
    a
      display: none
    th
      span
        align-content: center
        justify-content: center

@media only screen and (max-width: 449px)

  .service
    width: 85vw
    table
      border-spacing: 4px
      padding-right: 0
      td, th
        font-size: .6rem
        padding: 4px
      a
        display: none
      th
        span
          align-content: center
          justify-content: center

</style>