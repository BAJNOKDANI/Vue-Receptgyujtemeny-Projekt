<script setup>
import SearchBar from './components/SearchBar.vue';
import RecipeCard from './components/RecipeCard.vue';
import { recipeData } from './data/recipeData.js';
import { ref } from 'vue';

const form = ref(false)

const formSwitch = () => {
  if (form.value == true) {
    form.value = false;
  }
  else {
    form.value = true;
  }

}
</script>

<template>
  <header>
    <div class="container">
      <section>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#" @click="formSwitch()">ReceptKönyv</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link" href="#">Receptek</a>
                <a class="nav-link" href="#" @click="formSwitch()">Új recept</a>
                <a class="nav-link" href="#">Kedvencek</a>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <h1 class="text-center mt-3">Receptek</h1>
    </div>
  </header>
  <main class="mt-3">
    <div v-if="!form" class="container">
      <SearchBar />
      <RecipeCard :recipeData="recipeData" />
    </div>
    <div v-else class="container">
      <form>
        <div class="mb-3">
          <label class="form-label">Név</label>
          <input type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Elkészítési idő (perc)</label>
          <input type="number" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Nehézség</label>
          <input type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Leírás</label>
          <input type="text" class="form-control">
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-success">Hozzáadás</button>
        </div>
      </form>
    </div>
  </main>
  <footer class="mt-3">
    <p class="text-center">Minden jog fenntartva!</p>
    <p class="text-center">Szabó Zsolt, Szlobodnik Dániel</p>
  </footer>
</template>
<style scoped></style>