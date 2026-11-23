<script setup>
import { ref } from 'vue';

const selected = ref(null);

const props = defineProps({
    recipes: Array,
    konnyu: String,
    kozepes: String,
    nehez: String
})

const emit = defineEmits(["deleteRecipe"])

const deleteRecipe = (index) => {
    emit("deleteRecipe", index);
}

const loadImageFromUrl = (image) => {
    return new URL(image, import.meta.url).href;
};

</script>

<template>
    <section class="mt-5">
        <div class="d-flex row">
            <div v-for="(recipe, index) in recipes" class="col-lg-4">
                <div class="card mb-3">
                    <img :src="loadImageFromUrl(recipe.getKep())" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ recipe.getNev() }}</h5>
                        <p class="card-text elkeszIdo">Elkészítési idő: {{ recipe.getElkeszIdo() }}</p>
                        <p class="card-text" :class="{
                            konnyu: recipe.getNehezseg().toLowerCase() === 'könnyű',
                            kozepes: recipe.getNehezseg().toLowerCase() === 'közepes',
                            nehez: recipe.getNehezseg().toLowerCase() === 'nehéz'
                        }">
                            {{ recipe.getNehezseg() }}
                        </p>
                        <button type="button" class="btn btn-primary me-3" data-bs-toggle="modal"
                            data-bs-target="#recipeModal" @click="selected = recipe">Részletek</button>
                        <button type="button" class="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#editModal"
                            @click="selected = recipe">Módosítás</button>
                            <button type="button" class="btn btn-danger" @click="deleteRecipe(index)">Törlés</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="recipeModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content" v-if="selected">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ selected.getNev() }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Bezárás"></button>
                    </div>
                    <div class="modal-body">
                        <img :src="loadImageFromUrl(selected.getKep())" class="modal-kep mb-3" alt="">
                        <p>{{ selected.getLeiras() }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bezárás</button>
                    </div>
                </div>
            </div>
        </div>


        <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content" v-if="selected">
                    <div class="modal-header">
                        <div>
                            <label class="form-label">Név</label>
                            <input v-model="nev" type="text" class="form-control" :placeholder="selected.getNev()">
                        </div>
                    </div>
                    <div class="modal-body">
                        <img :src="loadImageFromUrl(selected.getKep())" class="modal-kep mb-3" alt="">
                        <label class="form-label">Kép URL</label>
                        <input style="width: 50%;" v-model="kep" type="text" class="form-control mb-3">
                        <label class="form-label">Leírás</label>
                        <textarea v-model="leiras" class="form-control" :placeholder="selected.getLeiras()"
                            id="floatingTextarea"></textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bezárás</button>
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

.elkeszIdo {
    color: gray;
}

.card-title {
    font-weight: 600;
}

@media (max-width: 1399.98px) {
    .card img {
        width: 100%;
        object-fit: cover;
    }
}

@media (max-width: 1199.98px) {

    .konnyu,
    .kozepes,
    .nehez {
        width: fit-content;
        padding-right: 10px;
    }
}

@media (min-width: 768px) and (max-width: 991.98px) {
    .col-lg-4 {
        flex: 0 0 50%;
        max-width: 50%;
    }

    .card img {
        height: 240px;
    }
}

@media (max-width: 767.98px) {
    .card img {
        height: 220px;
    }

    .card-title {
        font-size: 1.15rem;
    }

    .elkeszIdo {
        font-size: 16px;
    }

    .konnyu,
    .kozepes,
    .nehez {
        font-size: 14px;
    }

    .btn {
        width: 100%;
    }
}

.modal-kep {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 10px;
}
</style>