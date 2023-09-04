<template>
  <div class="github">
    <div v-for="repo in repos" ref="repos" key="index" class="info-table-4" v-motion-fade-visible v-on:click.stop.prevent="openLink(repo.html_url)">
      <div class="info-table__cell-1">
        <div class="info-table__headline">
          <h2>{{ repo.name }}</h2>
        </div>
        <p class="info-table__subtitle">{{ repo.description }}</p>
        <div class="info-table__content">
        </div>
        <div class="info-table-4__footer">
          <div class="info-table-4__footer__status">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="20">
                <path
                    d="M242.895-142.154q-22.456 0-37.906-15.8-15.451-15.801-15.451-37.556v-474.21q0-21.756 15.451-37.557
                    5.45-15.8 38.088-15.8h105.846v-105.231h32v105.231h201.231v-105.231h28.923v105.231h105.846q22.638 0
                    38.088 15.8 15.451 15.801 15.451 37.557v474.21q0 21.755-15.451 37.556-15.45 15.8-37.906
                    15.8h-474.21Zm.182-28.923h473.846q9.231 0 16.923-7.692 7.692-7.692 7.692-16.923v-306.462H218.462v306.462q0
                    9.231 7.692 16.923 7.692 7.692 16.923 7.692Zm-24.615-360h523.076v-138.462q0-9.23-7.692-16.923-7.692-7.692-16.923-7.692H243.077q-9.231
                    0-16.923 7.692-7.692 7.693-7.692 16.923v138.462Zm0 0v-163.077 163.077Zm261.801 152.615q-10.532
                    0-18.475-7.679-7.942-7.679-7.942-18.211 0-10.533 7.679-18.475 7.679-7.942 18.212-7.942 10.532 0
                    18.475 7.679 7.942 7.679 7.942 18.211 0 10.533-7.679 18.475-7.679 7.942-18.212 7.942Zm-156 0q-10.532 0-18.475-7.679-7.942-7.679-7.942-18.211 0-10.533 7.679-18.475 7.679-7.942 18.212-7.942 10.532 0 18.475 7.679 7.942 7.679 7.942 18.211 0 10.533-7.679 18.475-7.679 7.942-18.212 7.942Zm312 0q-10.532 0-18.475-7.679-7.942-7.679-7.942-18.211 0-10.533 7.679-18.475 7.679-7.942 18.212-7.942 10.532 0 18.475 7.679 7.942 7.679 7.942 18.211 0 10.533-7.679 18.475-7.679 7.942-18.212 7.942Zm-156 137.847q-10.532 0-18.475-7.68-7.942-7.679-7.942-18.211 0-10.533 7.679-18.475 7.679-7.942 18.212-7.942 10.532 0 18.475 7.679 7.942 7.679 7.942 18.212 0 10.532-7.679 18.474-7.679 7.943-18.212 7.943Zm-156 0q-10.532 0-18.475-7.68-7.942-7.679-7.942-18.211 0-10.533 7.679-18.475 7.679-7.942 18.212-7.942 10.532 0 18.475 7.679 7.942 7.679 7.942 18.212 0 10.532-7.679 18.474-7.679 7.943-18.212 7.943Zm312 0q-10.532 0-18.475-7.68-7.942-7.679-7.942-18.211 0-10.533 7.679-18.475 7.679-7.942 18.212-7.942 10.532 0 18.475 7.679 7.942 7.679 7.942 18.212 0 10.532-7.679 18.474-7.679 7.943-18.212 7.943Z"/>
              </svg>
              <a>{{ repo.created_at }}
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {Octokit} from "octokit";
  const octokit = new Octokit({auth: `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`});
  let repos = await octokit.request('GET /user/repos', {
    affiliation: 'owner',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
  repos = repos.data
  let anzahlRepos = repos.length
  console.log(repos);

  function openLink(link) {
    window.open(link)
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
