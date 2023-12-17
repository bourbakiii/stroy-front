<script setup>
    import {computed} from "vue";

    const $props = defineProps({
        errors: {
            required: true,
            type: Object,
        }
    })

    const computerErrors = computed(()=>Object.values($props.errors).map(el=>el[0]));
</script>

<template>
    <div class="flex flex-col text-[0.8rem]">
        <p v-for="error in computerErrors" class="error text-red-600">{{error}}</p>
    </div>
</template>

<style scoped lang="scss">

</style>
