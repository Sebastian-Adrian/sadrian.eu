<template>
    <div v-if="repos.length === 0" class="github-box">
      <div class="icon-box">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3">
            <path d="m692.15-170.69-211-209.46q-22.3 10.3-48.51 16.73-26.21 6.42-53.26 6.42-90.66 0-155.33-64.17-64.67-64.16-64.67-154.83 
            0-27.78 5.27-53.43T182-677.15l139.38 137.84 97.7-97.69-136.31-137.85q22.08-10.07 46.42-15.61 24.34-5.54 50.19-5.54 91.67 0 
            155.84 65.17 64.16 65.16 64.16 156.02 0 27.43-6.03 49.62-6.04 22.19-17.12 42.96l213.46 214q10.93 11.54 10.93 27.88 0 16.35-10.76 
            27.1l-45.26 44.27q-10.84 10.75-26.18 9.98-15.34-.77-26.27-11.69Zm27.08-18 54.23-53.23-235.77-233.77q17.69-25.54 
            23.69-54.04t6-45.27q0-79.92-65.57-142.96Q436.23-781 337.69-764l107.39 106.38q8.69 8.88 8.69 20.71t-8.98 20.74l-103.5 
            102.65q-8.98 8.9-20.09 8.9-11.1 0-19.43-8.69L191.38-623.69q-17.69 109 46.04 171.84Q301.15-389 379.38-389q17.52 0 
            48.03-6.62 30.51-6.61 58.05-26.84l233.77 233.77ZM476-484.92Z"/>
          </svg>
        </span>
      </div>
      <h2>Wird gerade gewartet...</h2>
      <p class="box__subtitle">
        Diese Komponente befindet sich aktuell in der Wartung. Schaue später nochmal vorbei.
      </p>

    </div>
    <div v-for="repo in repos" :key="repo.id" v-motion-fade-visible-once :id="componentName"
         v-on:click.stop.prevent="openLink(repo.html_url)">
      <div v-if="!repo.private" class="github-box">
        <div class="icon-box">
          <span>
            <img alt="GitHub-Logo" src="../assets/github-mark-white.png" width="32"/>
          </span>
          <span>
            GitHub
          </span>
        </div>
        <h2>{{ repo.name }}</h2>
        <p class="box__subtitle">{{ repo.description }}</p>
        <div class="github-box__footer">
          <div class="info-table-4__footer__status">
            <span>
              <svg class="icon" height="14" viewBox="0 -960 960 960" width="14" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M242.895-142.154q-22.456 0-37.906-15.8-15.451-15.801-15.451-37.556v-474.21q0-21.756 15.451-37.557
                    5.45-15.8 38.088-15.8h105.846v-105.231h32v105.231h201.231v-105.231h28.923v105.231h105.846q22.638 0
                    38.088 15.8 15.451 15.801 15.451 37.557v474.21q0 21.755-15.451 37.556-15.45 15.8-37.906
                    15.8h-474.21Zm.182-28.923h473.846q9.231 0 16.923-7.692 7.692-7.692 7.692-16.923v-306.462H218.462v306.462q0
                    9.231 7.692 16.923 7.692 7.692 16.923 7.692Zm-24.615-360h523.076v-138.462q0-9.23-7.692-16.923-7.692-7.692-16.923-7.692H243.077q-9.231
                    0-16.923 7.692-7.692 7.693-7.692 16.923v138.462Zm0 0v-163.077 163.077Zm261.801 152.615q-10.532
                    0-18.475-7.679-7.942-7.679-7.942-18.211 0-10.533 7.679-18.475 7.679-7.942 18.212-7.942 10.532 0
                    18.475 7.679 7.942 7.679 7.942 18.211 0 10.533-7.679 18.475-7.679 7.942-18.212 7.942Zm-156 0q-10.532
                    0-18.475-7.679-7.942-7.679-7.942-18.211 0-10.533 7.679-18.475 7.679-7.942 18.212-7.942 10.532 0 18.475
                    7.679 7.942 7.679 7.942 18.211 0 10.533-7.679 18.475-7.679 7.942-18.212 7.942Zm312 0q-10.532
                    0-18.475-7.679-7.942-7.679-7.942-18.211 0-10.533 7.679-18.475 7.679-7.942 18.212-7.942 10.532 0
                    18.475 7.679 7.942 7.679 7.942 18.211 0 10.533-7.679 18.475-7.679 7.942-18.212 7.942Zm-156
                    137.847q-10.532 0-18.475-7.68-7.942-7.679-7.942-18.211 0-10.533 7.679-18.475 7.679-7.942 18.212-7.942
                    10.532 0 18.475 7.679 7.942 7.679 7.942 18.212 0 10.532-7.679 18.474-7.679 7.943-18.212 7.943Zm-156
                    0q-10.532 0-18.475-7.68-7.942-7.679-7.942-18.211 0-10.533 7.679-18.475 7.679-7.942 18.212-7.942 10.532
                    0 18.475 7.679 7.942 7.679 7.942 18.212 0 10.532-7.679 18.474-7.679 7.943-18.212 7.943Zm312 0q-10.532
                    0-18.475-7.68-7.942-7.679-7.942-18.211 0-10.533 7.679-18.475 7.679-7.942 18.212-7.942 10.532 0 18.475
                    7.679 7.942 7.679 7.942 18.212 0 10.532-7.679 18.474-7.679 7.943-18.212 7.943Z"/>
              </svg>
                {{ formatDate(repo.created_at) }}
            </span>
            <span v-if="repo.language">
              <svg class="icon" height="14" viewBox="0 -960 960 960" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="m320-241.333-240-240 241.333-241.334L369-675 174.999-481l192.334 192.334L320-241.333ZM638.667-240
                591-287.666l194.001-194.001L592.667-674 640-721.333l240 240L638.667-240Z"/>
              </svg>
              <span>
                {{ getLanguages(repo.languages) }}
              </span>
            </span>
            <span>
              <svg class="icon" height="14" viewBox="0 -960 960 960" width="14" xmlns="http://www.w3.org/2000/svg"><path
                  d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>
              </svg>
               &nbsp;{{ repo.watchers }}
            </span>
            <span>
              <svg class="icon" fill="#000000" height="14" viewBox="0 0 16 16" width="14"
                   xmlns="http://www.w3.org/2000/svg"><path
                  d="M14 4a2 2 0 1 0-2.47 1.94V7a.48.48 0 0 1-.27.44L8.49 8.88l-2.76-1.4A.49.49 0 0 1 5.46 7V5.94a2 2 0 1 0-1 0V7a1.51 1.51 0 0 0 .82 1.34L8 9.74v1.32a2 2 0 1 0 1 0V9.74l2.7-1.36A1.49 1.49 0 0 0 12.52 7V5.92A2 2 0 0 0 14 4zM4 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5.47 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM12 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
              </svg>
              &nbsp;{{ repo.forks }}
            </span>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import moment from 'moment';
import { fetchRepos } from '@/services/githubService';

const componentName = 'GitHub';
const repos = ref([]);

// GitHub Datum in richtiges Format setzen
const formatDate = (date) => {
  if (date) {
    return moment(String(date)).format('YYYY-MM-DD');
  }
};

const openLink = (link) => {
  window.open(link);
};

const getLanguages = (languagesObj) => {
  if (languagesObj) {
    return Object.keys(languagesObj).join(', ');
  } else {
    return 'Unknown'; // Fallback, wenn keine Sprachen vorhanden sind
  }
};

onMounted(async () => {
  try {
    const reposData = await fetchRepos();
    repos.value = reposData;
    // nach Datum sortieren
    repos.value.sort(({created_at: a}, {created_at: b}) => new Date(b) - new Date(a));
  } catch (error) {
    console.error('Fehler beim Abrufen der Repo Daten:', error);
  }
});
</script>

<style lang="sass" scoped>

.github-box
  display: flex
  flex-direction: column
  background: rgba(92, 229, 213, 0.27)
  border: #5CE5D5 1px solid
  border-radius: 25px
  box-shadow: 5px 5px 20px 5px rgba(92, 229, 213, 0.44)
  width: 40vw
  text-align: center
  color: #f1f1f1
  cursor: pointer
  margin: 1.5rem
  z-index: 1
  transition: transform 0.2s ease
  transform: scale(1)
  h2
    margin: 10px
  p
    margin: 5px
  &:hover
    z-index: 200
    transform: translateY(-5px) scale(1.03)

.github-box__footer
  height: 24px
  width: 100%
  font-size: .8rem
  display: flex
  justify-content: left
  justify-items: center
  margin: 0
  padding-left: 5%

@media only screen and (min-width: 781px) and (max-width: 1400px)

  .github-box
    width: 65vw

@media only screen and (min-width: 600px) and (max-width: 780px)

  .github-box
    width: 60vw

@media only screen and (max-width: 599px)

  .github-box
    width: 85vw
    h2
      margin: 10px
      font-size: 1.3rem

  .github-box__footer
    height: auto
    width: 100%
    font-size: .7rem
    justify-content: left
    justify-items: center
    align-content: start
    align-items: start
    margin-top: 10px
    padding-left: 5%

  .box__subtitle
    color: white
    font-size: .9em
    margin: 5px

</style>
