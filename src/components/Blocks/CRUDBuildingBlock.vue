<script setup>

import InputField from "@/components/Fields/InputField.vue";
import TextareaField from "@/components/Fields/TextareaField.vue";
import ButtonElement from "@/components/Elements/ButtonElement.vue";
import {computed, onBeforeMount, reactive, ref} from "vue";
import ImageUploaderField from "@/components/Fields/ImageUploaderField.vue";
import axiosInstance from "@/axiosInstance.js";
import {useRoute, useRouter} from "vue-router";
import {useToast} from "vue-toastification";
import ErrorsListElement from "@/components/Elements/ErrorsListElement.vue";

const $router = useRouter();
const $route = useRoute();
const toast = useToast();
onBeforeMount(async () => {
  if (!$route.params.id) return;
  try {
    const response = await axiosInstance.get(`buildings/${$route.params.id}`)
    form.value = response.data.data;
  } catch (error) {
    toast.error(error?.response.data.message || error.message);
  }
});


const form = ref({
  files: null,
  name: null,
  address: null,
  description: null,
  due_to: null
});

const errors = ref({});

async function createHandler() {
  try {
    const response = await axiosInstance.post('buildings', form.value);
    form.value.id = response.data.data;
    $router.push({path: `/buildings/${response.data.data}`});
    toast.success("Success");
  } catch (error) {
    toast.error(error?.response?.data?.message || error.message);
    if (error?.response.status === 403) errors.value = error?.response.data.error;
  }
}


async function editHandler() {
  try {
    await axiosInstance.put('buildings', form.value);
    toast.success("Success");
  } catch (error) {
    toast.error(error?.response?.data?.message || error.message);
    if (error?.response.status === 403) errors.value = error?.response.data.error;
  }
}

const submitHandler = computed(() => $route.params.id ? editHandler : createHandler);
const button_name = computed(() => $route.params.id ? 'Редактировать объект' : 'Создать объект');
</script>

<template>
  <form @submit.prevent="submitHandler" class="flex flex-col max-w-[600px] gap-[1rem]">
    <InputField required :isInvalid="errors['name']" v-model="form.name" label="Название объекта"/>
    <InputField required :isInvalid="errors['address']" v-model="form.address" label="Адрес объекта"/>
    <TextareaField :isInvalid="errors['description']" v-model="form.description"
                   label="Описание объекта"/>
    <InputField required :isInvalid="errors['due_to']" v-model="form.due_to" label="Срок сдачи"
                type="date"></InputField>
    <ButtonElement type="submit">{{button_name}}</ButtonElement>
    <ErrorsListElement :errors="errors"/>
  </form>
</template>

<style scoped lang="scss">

</style>
