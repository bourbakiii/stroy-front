<script setup>
import {useRoute} from "vue-router";
import CRUDWorkerBlock from "@/components/Workers/CRUDWorker.vue";

const $route = useRoute();
</script>

<template>
  <main class="crud-building flex flex-col gap-[1rem] p-[1rem] w-full">
    <h1>{{ $route.name }}</h1>
    <CRUDWorkerBlock/>
  </main>
</template>

<style scoped lang="scss">

</style>
