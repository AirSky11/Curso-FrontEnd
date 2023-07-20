<template>
    <div>
    <p>{{Hola}}</p>
    </div>

    <div v-html="redHotHtmlDiv"></div>
</template>

<script setup>
import { ref, reactive } from "vue";

let Hola = ref ("Bienvenido")
</script>

<style scoped>

</style>