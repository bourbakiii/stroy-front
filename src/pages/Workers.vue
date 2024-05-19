<script setup>
import WorkersBlock from "@/components/Workers/WorkersBlock.vue";
import {useRoute} from "vue-router";

const $route = useRoute();
</script>

<template>
  <main class="all-buildings flex flex-col p-[1rem] gap-[1rem]">
    <h1>{{ $route.name }}</h1>
    <WorkersBlock/>
  </main>
</template>

<style scoped lang="scss">

</style>
