<script setup>
import { ref } from 'vue';

const props = defineProps({
    konnyu: String,
    kozepes: String,
    nehez: String
});

const search = ref("");
const option = ref("");
const sort = ref("");

const emit = defineEmits(["keyUp", "difficulty", "sort"]);

const press = () => {
    emit("keyUp", search.value);
};

const nehezsegiSzint = () => {
    emit("difficulty", option.value);
};

const rendezes = () => {
    emit("sort", sort.value);
};
</script>

<template>
    <section class="mt-3">
        <div class="row">
            <div class="col-lg-6">
                <input type="text" v-model="search" class="form-control" placeholder="Keresés..." @keyup="press">
            </div>

            <div class="col-lg-3">
                <select class="form-select" v-model="option" @change="nehezsegiSzint">
                    <option value="">Minden nehézség</option>
                    <option value="könnyű">Könnyű</option>
                    <option value="közepes">Közepes</option>
                    <option value="nehéz">Nehéz</option>
                </select>
            </div>

            <div class="col-lg-3">
                <select class="form-select" v-model="sort" @change="rendezes">
                    <option value="">Alapértelmezett sorrend</option>
                    <option value="nev">Név szerint</option>
                    <option value="ido">Elkészítési idő szerint</option>
                    <option value="nehezseg">Nehézség szerint</option>
                </select>
            </div>
        </div>
    </section>
</template>