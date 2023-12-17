<script setup>

const $props = defineProps({
    modelValue: {
        required: false,
        default: null
    },
    options: {
        required: true,
        default: []
    },
    value_key: {
        required: false,
        default: 'value'
    },
    label_key: {
        required: false,
        default: 'name'
    },
    isInvalid:{
        required:false,
        default: false
    }
});

defineEmits(['update:modelValue'])
</script>

<template>
    <div>
        <label v-if="$attrs.label" :for="$attrs.for"
               :class="`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${$attrs.labelClass}`">{{ $attrs.label }}</label>
        <select
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            v-bind="$attrs"
            :class="`${isInvalid?'border-red-400':'border-gray-300'} border-[1px] bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`">
            <option v-for="option in $props.options" :value="option[$props.value_key]">{{
                    option[$props.label_key]
                }}
            </option>
        </select>
    </div>
</template>

<style scoped lang="scss">

</style>
