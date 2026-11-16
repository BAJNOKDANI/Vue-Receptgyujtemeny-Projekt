<script setup>
const props = defineProps({
    recipeList: Array
})

</script>

<template>
    <section class="mt-5">
        <div class="d-flex">
            <div v-for="recipe in recipeList" class="card" style="width: 18rem;">
                <img src="" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">{{ recipe.getNev() }}</h5>
                    <p class="card-text">{{ recipe.getLeiras() }}</p>
                    <a href="#" class="btn btn-primary">Kedvencekhez adás</a>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>