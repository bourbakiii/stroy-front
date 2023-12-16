<template>
    <!-- <transition name="opacity-transition" mode="out-in"> -->
        <component :key="$route.meta.layout" :is="LAYOUT_COMPONENT">
            <template v-slot:page-render>
                <router-view v-slot="{ Component, route }">
                    <transition name="opacity-transition" mode="out-in">
                        <component :key="$route.path" class="page" :is="Component" />
                    </transition>
                </router-view>
            </template>
        </component>
    <!-- </transition> -->
</template>

<script setup>
import { defineAsyncComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const $route = ref(useRoute());

console.log($route.value.fullPath);
const DEFAULT_LAYOUT_NAME = 'empty-layout';
let LAYOUT_COMPONENT = null;
let CURRENT_LAYOUT_NAME = ref(DEFAULT_LAYOUT_NAME);
watch($route.value, value => {
    if (value.meta.layout === CURRENT_LAYOUT_NAME.value) return;
    CURRENT_LAYOUT_NAME.value = value.meta.layout || DEFAULT_LAYOUT_NAME;
});
watch(CURRENT_LAYOUT_NAME, () => {
    console.log("Called");
    console.log(`@/layouts/${CURRENT_LAYOUT_NAME.value}.vue`)
    LAYOUT_COMPONENT = defineAsyncComponent(() => import(`@/layouts/${CURRENT_LAYOUT_NAME.value}.vue`))
}, { immediate: true });
</script>

<style lang="scss">
@import '@/assets/scss/transitions.scss';
</style>
