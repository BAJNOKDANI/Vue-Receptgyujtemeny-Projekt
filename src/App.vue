<script setup>
import SearchBar from './components/SearchBar.vue';
import RecipeCard from './components/RecipeCard.vue';
import { recipeData } from './data/recipeData.js';
import Recipe from './classes/Recipe.js';
import { ref, computed } from 'vue';

const form = ref(false)
const recipes = ref([]);

const nev = ref("");
const elkeszites = ref("");
const nehezseg = ref("");
const leiras = ref("");


const search = ref("");




const init = () => {
  for (let i = 0; i < recipeData.length; i++) {
    const r = recipeData[i];
    recipes.value.push(new Recipe(r.kep, r.nev, r.elkeszIdo, r.nehezseg, r.leiras))
  }
}

init()

const formSwitch = () => {
  if (form.value == true) {
    form.value = false;
  }
  else {
    form.value = true;
  }
}


  const loadImageFromUrl = (image) =>{
    return new URL(image, import.meta.url).href;
    }

const addRecipe = () =>{
recipes.value.push(new Recipe(nev.value, elkeszites.value, nehezseg.value, leiras.value))
console.log(recipes.value)
}

const keyup = (f) => {
  search.value = f;
}

const searchedRecipes = computed(() => {
  if (search.value == "") {
    return recipes.value;
  }
  else {
    return recipes.value.filter(r => r.getNev().toLowerCase().includes(search.value.toLowerCase()));
  }
});



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
      <SearchBar @keyUp="keyup"/>
      <RecipeCard :recipes="searchedRecipes" />
    </div>
    <div v-else class="container">
      <form>
        <div class="mb-3">
          <label class="form-label">Név</label>
          <input v-model="nev" type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Elkészítési idő (perc)</label>
          <input v-model="elkeszites" type="number" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Nehézség</label>
          <input v-model="nehezseg" type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Leírás</label>
          <input v-model="leiras" type="text" class="form-control">
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-success" @click="addRecipe">Hozzáadás</button>
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