<script setup>

import InputField from "@/components/Fields/InputField.vue";
import TextareaField from "@/components/Fields/TextareaField.vue";
import ButtonElement from "@/components/Elements/ButtonElement.vue";
import {reactive, ref} from "vue";
import ImageUploaderField from "@/components/Fields/ImageUploaderField.vue";

const form = reactive({
  files: null,
  name: null,
  description: null,
  due_to: null
});

const errors = ref({});

</script>

<template>
  <main class="w-full p-[1rem]">
    <form class="flex flex-col max-w-[600px]">
<!--      <ImageUploaderField multiple="true" v-model="form.files" inputId="building-images"/>-->
      <InputField required :isInvalid="errors['name']" v-bind="form.name" label="Name of building"/>
      <TextareaField required :isInvalid="errors['description']" v-bind="form.description"
                     label="Description of building"/>
      <InputField required :isInvalid="errors['due_to']" v-bind="form.due_to" label="Due to" type="date"></InputField>
      <ButtonElement type="submit">Create building</ButtonElement>
    </form>
  </main>
</template>

<style scoped lang="scss">

</style>
