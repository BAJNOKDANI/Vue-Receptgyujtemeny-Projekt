<script setup>

</script>

<template>
    <section class="mt-3">
        <div class="row">
            <div class="col-lg-6">
                <div class="form">
                    <input type="text" class="form-control search" placeholder="Keress receptet...">
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
<style scoped>
@media (min-width: 768px) and (max-width: 991.98px) {
    .col-lg-3 {
        flex: 0 0 50%;
        max-width: 50%;
    }
}

@media (max-width: 991.98px) {
    .col-lg-6,
    .col-lg-3 {
        margin-bottom: 0.75rem;
    }
}

@media (max-width: 575.98px) {
    .form-control,
    .form-select {
        font-size: 16px;
    }
}
</style>