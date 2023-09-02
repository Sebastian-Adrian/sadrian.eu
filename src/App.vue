<template>
  <div>
    <aside>
      <div class="nav">
        <div class="btn btn-one">
          <div class="nav__button__profile__span">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
              <path class="icon" d="M190.256-224.102q56.975-54.487 130.508-87.013 73.534-32.525 159.167-32.525t159.236 32.525q73.602 32.526 130.577 87.013v-533.333q0-4.616-3.847-8.462-3.846-3.847-8.462-3.847h-554.87q-4.616 0-8.462 3.847-3.847 3.846-3.847 8.462v533.333Zm290.693-205.026q54.025 0 91.538-37.513 37.512-37.512 37.512-91.538 0-54.025-37.512-91.538-37.513-37.512-91.538-37.512-54.026 0-91.538 37.512-37.513 37.513-37.513 91.538 0 54.026 37.513 91.538 37.512 37.513 91.538 37.513ZM202.565-140.001q-25.788 0-44.176-18.388t-18.388-44.176v-554.87q0-25.788 18.388-44.176t44.176-18.388h554.87q25.788 0 44.176 18.388t18.388 44.176v554.87q0 25.788-18.388 44.176t-44.176 18.388h-554.87Zm33.331-50.255h488.465v-8.052q-53.334-47.59-115.341-71.334-62.007-23.744-129.02-23.744-66.539 0-128.591 23.552-62.051 23.552-115.513 70.757v8.821Zm245.181-289.127q-32.821 0-55.872-23.051-23.052-23.052-23.052-55.745 0-32.692 23.052-55.744 23.051-23.051 55.744-23.051 32.692 0 55.744 23.105 23.051 23.105 23.051 55.562 0 32.821-23.105 55.873-23.105 23.051-55.562 23.051ZM480-497.256Z"/>
            </svg>
            <span>Profil</span>
          </div>
        </div>
        <div class="btn btn-one">
          <div class="nav__button__profile__span">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
              <path class="icon" d="m320-241.333-240-240 241.333-241.334L369-675 174.999-481l192.334 192.334L320-241.333ZM638.667-240 591-287.666l194.001-194.001L592.667-674 640-721.333l240 240L638.667-240Z"/></svg>
            <span>Portfolio</span>
          </div>
        </div>
        <div class="btn btn-one">
          <div class="nav__button__profile__span">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
              <path class="icon" d="M252-306.666q51.377 0 100.022 11.833t95.978 35.5v-416q-43.667-28.001-94.079-43.001-50.413-15-101.921-15-37.334 0-73.5 8.667Q142.333-716 106.666-702v421.334Q139-294 176.833-300.333q37.833-6.333 75.167-6.333Zm262.667 47.333q48-23.667 94.833-35.5 46.833-11.833 98.5-11.833 37.334 0 75.834 6t69.5 16.666v-418q-33.667-16-70.715-23.667-37.049-7.667-74.619-7.667-51.667 0-100.667 15t-92.666 43.001v416ZM481.333-160q-50-38-108.666-58.667Q314-239.333 252-239.333q-38.358 0-75.346 9.666-36.987 9.667-72.654 25-22.4 11-43.2-2.333Q40-220.334 40-245.334v-469.333q0-13.666 6.5-25.333Q53-751.667 66-758q43.333-21.333 90.263-31.667Q203.193-800 252-800q61.333 0 119.5 16.333Q429.667-767.333 481.333-734q51-33.333 108.5-49.667Q647.333-800 708-800q48.579 0 95.29 10.333Q850-779.333 893.333-758q13 6.333 19.834 18Q920-728.333 920-714.667v469.333q0 26.263-21.5 39.965-21.5 13.702-43.167.702-35-16-71.987-25.333-36.988-9.333-75.346-9.333-62 0-119.333 21-57.334 21-107.334 58.333Zm-204-330.667Z"/></svg>
            <span>Kontakt</span>
          </div>
        </div>
      </div>
      <div class="about">
        <div class="about-box">
          <div class="profile-box">
            <img class="profile-image" src="./assets/foto_small.png">
            <div class="profile-text">
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
          </div>
        </div>
      </div>
    </aside>
    <div class="content">
      <div v-motion-slide-visible-left>
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
      <div v-motion-slide-visible-right>
          <div class="info-table-2">
            <div class="info-table__cell-2">
              <h2>Skillset</h2>
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
                  <summary> </summary>
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
                    <tr>
                      <td>C++</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>United Launch Alliance</td>
                      <td>CCDev1,CCDev2</td>
                      <td>$6.7 million</td>
                    </tr>
                    </tbody>
                  </table>
                </details>
              </div>
            </div>
          </div>
      </div>
      <div v-motion-slide-visible-left>
        <div class="info-table-3">
          <div class="info-table__cell-3">
            <h2>Mars Exploration Program</h2>
            <p class="info-table__subtitle">Perseverance Rover</p>
            <div class="txt-block__content">
              <img class="img-float-l" src="./assets/KI_640.jpg" alt="Sprachmodelle" width="25%"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur dicta dolore dolorem
                doloremque earum est, et exercitationem explicabo impedit libero numquam porro possimus qui quidem
                suscipit velit, veniam voluptatibus.
              </p>
              <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-motion-slide-visible-right>
        <div class="info-table-2">
          <div class="info-table__cell-2">
            <h2>Skillset</h2>
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
                <summary> </summary>
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
                  <tr>
                    <td>C++</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>United Launch Alliance</td>
                    <td>CCDev1,CCDev2</td>
                    <td>$6.7 million</td>
                  </tr>
                  </tbody>
                </table>
              </details>
            </div>
          </div>
        </div>
      </div>
      <div v-motion-slide-visible-left>
        <div class="info-table-3">
          <div class="info-table__cell-3">
            <h2>Mars Exploration Program</h2>
            <p class="info-table__subtitle">Perseverance Rover</p>
            <div class="txt-block__content">
              <img class="img-float-l" src="./assets/KI_640.jpg" alt="Sprachmodelle" width="25%"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur dicta dolore dolorem
                doloremque earum est, et exercitationem explicabo impedit libero numquam porro possimus qui quidem
                suscipit velit, veniam voluptatibus.
              </p>
              <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-motion-slide-visible-right>
        <div class="info-table-2">
          <div class="info-table__cell-2">
            <h2>Skillset</h2>
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
                <summary> </summary>
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
                  <tr>
                    <td>C++</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>United Launch Alliance</td>
                    <td>CCDev1,CCDev2</td>
                    <td>$6.7 million</td>
                  </tr>
                  </tbody>
                </table>
              </details>
            </div>
          </div>
        </div>
      </div>
      <div v-motion-slide-visible-left>
        <div class="info-table-3">
          <div class="info-table__cell-3">
            <h2>Mars Exploration Program</h2>
            <p class="info-table__subtitle">Perseverance Rover</p>
            <div class="txt-block__content">
              <img class="img-float-l" src="./assets/KI_640.jpg" alt="Sprachmodelle" width="25%"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur dicta dolore dolorem
                doloremque earum est, et exercitationem explicabo impedit libero numquam porro possimus qui quidem
                suscipit velit, veniam voluptatibus.
              </p>
              <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-motion-slide-visible-right>
        <div class="info-table-2">
          <div class="info-table__cell-2">
            <h2>Skillset</h2>
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
                <summary> </summary>
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
                  <tr>
                    <td>C++</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>United Launch Alliance</td>
                    <td>CCDev1,CCDev2</td>
                    <td>$6.7 million</td>
                  </tr>
                  </tbody>
                </table>
              </details>
            </div>
          </div>
        </div>
      </div>
      <div v-motion-slide-visible-left>
        <div class="info-table-3">
          <div class="info-table__cell-3">
            <h2>Mars Exploration Program</h2>
            <p class="info-table__subtitle">Perseverance Rover</p>
            <div class="txt-block__content">
              <img class="img-float-l" src="./assets/KI_640.jpg" alt="Sprachmodelle" width="25%"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur dicta dolore dolorem
                doloremque earum est, et exercitationem explicabo impedit libero numquam porro possimus qui quidem
                suscipit velit, veniam voluptatibus.
              </p>
              <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-motion-slide-visible-right>
        <div class="info-table-2">
          <div class="info-table__cell-2">
            <h2>Skillset</h2>
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
                <summary> </summary>
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
                  <tr>
                    <td>C++</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>United Launch Alliance</td>
                    <td>CCDev1,CCDev2</td>
                    <td>$6.7 million</td>
                  </tr>
                  </tbody>
                </table>
              </details>
            </div>
          </div>
        </div>
      </div>
      <div v-motion-slide-visible-left>
        <div class="info-table-3">
          <div class="info-table__cell-3">
            <h2>Mars Exploration Program</h2>
            <p class="info-table__subtitle">Perseverance Rover</p>
            <div class="txt-block__content">
              <img class="img-float-l" src="./assets/KI_640.jpg" alt="Sprachmodelle" width="25%"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur dicta dolore dolorem
                doloremque earum est, et exercitationem explicabo impedit libero numquam porro possimus qui quidem
                suscipit velit, veniam voluptatibus.
              </p>
              <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-motion-slide-visible-right>
        <div class="info-table-2">
          <div class="info-table__cell-2">
            <h2>Skillset</h2>
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
                <summary> </summary>
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
                  <tr>
                    <td>C++</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>United Launch Alliance</td>
                    <td>CCDev1,CCDev2</td>
                    <td>$6.7 million</td>
                  </tr>
                  </tbody>
                </table>
              </details>
            </div>
          </div>
        </div>
      </div>
      <div v-motion-slide-visible-left>
        <div class="info-table-3">
          <div class="info-table__cell-3">
            <h2>Mars Exploration Program</h2>
            <p class="info-table__subtitle">Perseverance Rover</p>
            <div class="txt-block__content">
              <img class="img-float-l" src="./assets/KI_640.jpg" alt="Sprachmodelle" width="25%"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur dicta dolore dolorem
                doloremque earum est, et exercitationem explicabo impedit libero numquam porro possimus qui quidem
                suscipit velit, veniam voluptatibus.
              </p>
              <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
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
import styles from './assets/style.css';
export default {
  name: 'App',
}

</script>
<style>
</style>

