<script setup>
import { ref } from 'vue';

const search = ref("");

const emit = defineEmits(["keyUp"]);

const press = () => {
    emit("keyUp", search.value);
}

</script>

<template>
    <section class="mt-3">
        <div class="row">
            <div class="col-lg-6">
                <div class="form">
                    <input type="text" v-model="search" class="form-control" placeholder="Keresés..." @keyup="press">
                </div>
            </div>
            <div class="col-lg-3">
                <div class="form">
                    <select class="form-select difficulty">
                        <option selected>Minden nehézség</option>
                        <option value="1">Könnyű</option>
                        <option value="2">Közepes</option>
                        <option value="3">Nehéz</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="form">
                    <select class="form-select">
                        <option selected>Rendezés</option>
                        <option value="1">Név</option>
                        <option value="2">Elkészítési idő szerint</option>
                        <option value="3">Nehézség</option>
                    </select>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>