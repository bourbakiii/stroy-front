<script setup>
import {onMounted, ref} from "vue";
import axiosInstance from "@/axiosInstance.js";
import Worker from "@/components/UI/Worker.vue";

const workers = ref([]);

onMounted(async () => {
  const response = await axiosInstance.get('/workers');
  workers.value = response.data.data;
});
</script>

<template>
  <Worker v-for="worker in workers" :worker="worker"/>
</template>

<style scoped lang="scss">

</style>
