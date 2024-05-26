<script setup>
import CRUDBrigade from "@/components/Brigades/CRUDBrigade.vue";
import {useRoute} from "vue-router";

const $route = useRoute();
</script>

<template>
  <main class="crud-building flex flex-col gap-[1rem] p-[1rem] w-full">
    <h1>{{ $route.name }}</h1>
    <CRUDBrigade/>
  </main>
</template>

<style scoped lang="scss">
</style>
