<template>
    <div v-for="repo in repos" v-motion-fade-visible-once class="github-box"
         v-on:click.stop.prevent="openLink(repo.html_url)">
      <div class="github-box__cell">
        <div class="box-title">
          <span>
            <img alt="GitHub-Logo" src="../assets/github-mark-white.png" width="32"/>
          </span>
          <span>
            GitHub
          </span>
        </div>
        <h2>{{ repo.name }}</h2>
        <p class="info-table__subtitle">{{ repo.description }}</p>
        <div class="info-table-4__footer">
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
                {{formatDate(repo.created_at)}}
            </span>
            <span v-if="repo.language">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 -960 960 960" width="14">
                <path d="m320-241.333-240-240 241.333-241.334L369-675 174.999-481l192.334 192.334L320-241.333ZM638.667-240
                591-287.666l194.001-194.001L592.667-674 640-721.333l240 240L638.667-240Z"/>
              </svg>
              <span>
                {{repo.language}}
              </span>
            </span>
            <span>
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 -960 960 960" width="14"><path
                  d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>
              </svg>
               &nbsp;{{repo.watchers}}
            </span>
            <span>
              <svg class="icon" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                   fill="#000000"><path d="M14 4a2 2 0 1 0-2.47 1.94V7a.48.48 0 0 1-.27.44L8.49 8.88l-2.76-1.4A.49.49 0 0 1 5.46 7V5.94a2 2 0 1 0-1 0V7a1.51 1.51 0 0 0 .82 1.34L8 9.74v1.32a2 2 0 1 0 1 0V9.74l2.7-1.36A1.49 1.49 0 0 0 12.52 7V5.92A2 2 0 0 0 14 4zM4 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5.47 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM12 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
              </svg>
              &nbsp;{{repo.forks}}
            </span>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
  import {Octokit} from "octokit";
  import moment from 'moment';
  import {forEach} from "core-js/internals/array-iteration";
  import { onMounted } from 'vue';

  const octokit = new Octokit({auth: `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`});
  let repos = await octokit.request('GET /user/repos', {
    affiliation: 'owner',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
  repos = repos.data;
  repos.forEach(async (repo) => {
    repo.languages = await (octokit.request('GET /repos/' + repo.owner.login + '/' + repo.name + '/languages', {
      owner: repo.owner.login,
      repo: repo.name,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }));
  })

  function openLink(link) {
    window.open(link)
  }
  function formatDate(date) {
    if (date) {
      return moment(String(date)).format('YYYY-MM-DD')
    }
  }

</script>

<style scoped>
</style>
