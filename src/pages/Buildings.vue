<script setup>
import BuildingsBlock from "@/components/Blocks/BuildingsBlock.vue";
import {useRoute} from "vue-router";

const $route = useRoute();
</script>

<template>
  <main class="all-buildings flex flex-col gap-[1rem]">
  <h1>{{ $route.name }}</h1>
    <BuildingsBlock/>
  </main>
</template>

<style scoped lang="scss">

</style>
