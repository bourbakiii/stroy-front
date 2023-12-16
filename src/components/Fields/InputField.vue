<script setup>
const $props = defineProps({
    modelValue: {
        required: false,
        default: null
    }
})

defineEmits(['update:modelValue'])
</script>

<template>
    <div>
        <label v-if="$attrs.label" :for="$attrs.for"
               :class="`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${$attrs.labelClass}`">{{ $attrs.label }}</label>
        <input :value="modelValue"
               @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs"
               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
</template>

<style scoped lang="scss">

</style>
