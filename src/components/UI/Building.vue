<script setup>
defineProps({
  building:{
    required: true
  }
})
</script>

<template>
  <RouterLink :to="`/buildings/${$props.building.id}`" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{$props.building.name}}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{$props.building.address}}</p>
  </RouterLink>

</template>

<style scoped lang="scss">

</style>
