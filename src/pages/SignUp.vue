<script setup>
import axiosInstance from "@/axiosInstance.js";
import {onBeforeMount, reactive, ref} from "vue";
import InputField from "@/components/Fields/InputField.vue";
import SelectField from "@/components/Fields/SelectField.vue";
import ButtonElement from "@/components/Elements/ButtonElement.vue";
import ErrorsListElement from "@/components/Elements/ErrorsListElement.vue";
import {createRouter, useRouter} from "vue-router";

let type_of_users = ref(null);
const $router = useRouter();

onBeforeMount(async () => {
  const response = await axiosInstance.get("types/users");
  type_of_users.value = response.data.data.type_of_users;
})
const form = reactive({
  email: null,
  password: null,
  password_confirmation: null,
  user_type_id: null
});
const errors = ref({});

async function signUpHandler() {
  errors.value = {};
  try {
    await axiosInstance.post("auth/signup", form);
    $router.push('/sign-in');
  } catch (error) {
    if (error?.response.status === 403) errors.value = error?.response.data.error;
  }
}

</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900 w-full py-[2rem] h-auto">
    <form @submit.prevent="signUpHandler" class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
      <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="space-y-4 md:space-y-6 p-[1rem]">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Регситрация
          </h1>
          <div class="space-y-4 md:space-y-6">
            <InputField :isInvalid="Boolean(errors['first_name'])" v-model.trim="form.first_name" label="First name"
                        type="text" name="first_name" id="first_name" required/>
            <InputField :isInvalid="Boolean(errors['middle_name'])" v-model.trim="form.middle_name" label="Middle name"
                        type="text" name="middle_name" id="middle_name" required/>
            <InputField :isInvalid="Boolean(errors['last_name'])" v-model.trim="form.last_name" label="Last name"
                        type="text" name="last_name" id="last_name" required/>
            <InputField :isInvalid="Boolean(errors['email'])" v-model.trim="form.email" label="Email" type="email"
                        name="email" id="email" required/>
            <InputField :isInvalid="Boolean(errors['password'])" v-model.trim="form.password" placeholder="••••••••"
                        label="Password" name="password" type="password" required/>
            <InputField :isInvalid="Boolean(errors['password_confirmation'])" v-model.trim="form.password_confirmation"
                        placeholder="••••••••" label="Password confirmation" name="password_confirmation"
                        type="password" required/>
            <SelectField :isInvalid="Boolean(errors['user_type_id'])" v-model.trim="form.user_type_id"
                         :options="type_of_users" value_key="id" label_key="name" label="Type"/>
            <ButtonElement type="submit">Sign up</ButtonElement>
            <ErrorsListElement v-if="Object.keys(errors).length>0" :errors="errors"/>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Уже есть аккаунт?
              <RouterLink to="/sign-in" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Войти
              </RouterLink>
            </p>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<style scoped lang="scss">

</style>
