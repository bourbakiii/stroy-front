<script setup>
defineProps({
  worker: {
    required: true
  }
})

defineEmits(['click']);
</script>

<template>
  <div @click="$emit('click')"
       class="w-full h-full max-w-[200px] shadow-2xl bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
    <img class="object-center object-cover h-auto grow w-full"
         src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
         alt="photo">
    <div class="text-center p-1">
      <p class="text-gray-700 font-bold mb-2">{{ $props.worker.name }}</p>
      <p v-if="$props.worker?.type_of_worker" class="text-base text-gray-400 font-normal">{{ $props.worker?.type_of_worker.name }}</p>
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>
