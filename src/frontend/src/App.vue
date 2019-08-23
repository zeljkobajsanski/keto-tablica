<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <router-link class="navbar-brand" to="/">Navbar</router-link>
      <button aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation"
              class="navbar-toggler" data-target="#navbarsExampleDefault" data-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <router-link class="nav-item" tag="li" to="/macro-calculator">
            <a class="nav-link">Macro Calculator</a>
          </router-link>
          <router-link class="nav-item" tag="li" to="/meal-planner">
            <a class="nav-link">Meal Planner</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <main class="container" role="main">
      <div class="starter-template">
        <router-view></router-view>
      </div>
    </main><!-- /.container -->
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
  components: {
  },
})
export default class App extends Vue {}
</script>

<style>
  body {
    padding-top: 5rem;
  }

  .starter-template {
    /*padding: 3rem 1.5rem;*/
  }

  .m-b-0 {
    margin-bottom: 0 !important;
  }
</style>
