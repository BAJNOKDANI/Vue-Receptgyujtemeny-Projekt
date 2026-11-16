<script setup>
const props = defineProps({
    recipes: Array
})
const konnyu = "könnyű";
const kozepes = "közepes";
const nehez = "nehéz";

const loadImageFromUrl = (image) => {
    return new URL(image, import.meta.url).href;
};

</script>

<template>
    <section class="mt-5">
        <div class="d-flex row">
            <div  v-for="recipe in recipes" class="col-lg-4">
                <div class="card mb-3">
                    <img :src="loadImageFromUrl(recipe.getKep())" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ recipe.getNev() }}</h5>
                        <p class="card-text elkeszIdo">Elkészítési idő: {{ recipe.getElkeszIdo() }}</p>
                        <p v-if="recipe.getNehezseg() == konnyu" class="card-text konnyu">{{ recipe.getNehezseg() }}</p>
                        <p v-if="recipe.getNehezseg() == kozepes" class="card-text kozepes">{{ recipe.getNehezseg() }}</p>
                        <p v-if="recipe.getNehezseg() == nehez" class="card-text nehez">{{ recipe.getNehezseg() }}</p>
                        <a href="#" class="btn btn-primary">Részletek</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.konnyu,
.kozepes,
.nehez {
    padding: 2px;
    padding-left: 5px;
    border-radius: 10px;
    font-size: 15px;
    color: #fff;
}

.konnyu {
    background-color: green;
    width: 15%;
}

.kozepes {
    background-color: orange;
    width: 17%;
}

.nehez {
    background-color: red;
    width: 14%;
}

.card img {
    height: 300px;
    width: 415px;
}

.elkeszIdo{
    color: gray;
}
.card-title{
    font-weight: 600;
}
</style>