<script setup>
import {useRoute} from "vue-router";
import BrigadesList from "@/components/Brigades/BrigadesList.vue";
import {onMounted, ref} from "vue";
import axiosInstance from "@/axiosInstance.js";

const brigades = ref([]);

onMounted(async () => {
  const response = await axiosInstance.get('/brigades');
  brigades.value = response.data.data
});

const $route = useRoute();
</script>

<template>
  <main class="all-buildings flex flex-col p-[1rem] gap-[1rem] w-full">
    <h1>{{ $route.name }}</h1>
    <BrigadesList :brigades="brigades"/>
  </main>
</template>

<style scoped lang="scss">

</style>
