<script setup>
defineProps({
  to:{
    required: true,
    type:String
  }
})
</script>

<template>
  <RouterLink v-bind="$attrs" :to="$props.to" class="font-medium text-primary-600 hover:underline dark:text-primary-500"><slot/></RouterLink>
</template>

<style scoped lang="scss">

</style>
