<script setup>
const props = defineProps({
    recipes: Array
})

</script>

<template>
    <section class="mt-5">
        <div class="d-flex">
            <div v-for="recipe in recipes" class="card" style="width: 18rem;">
                <img src="" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">{{ recipe.getNev() }}</h5>
                    <p class="card-text">{{ recipe.getElkeszIdo() }}</p>
                    <p class="card-text">{{ recipe.getNehezseg() }}</p>
                    <a href="#" class="btn btn-primary">Kedvencekhez adás</a>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>