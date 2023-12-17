<script setup>
import axiosInstance from "@/axiosInstance.js";
import {reactive, ref} from "vue";
import InputField from "@/components/Fields/InputField.vue";
import ButtonElement from "@/components/Elements/ButtonElement.vue";
import ErrorsListElement from "@/components/Elements/ErrorsListElement.vue";
import LinkElement from "@/components/Elements/LinkElement.vue";
import {useRouter} from "vue-router";
import {useToast} from "vue-toastification";

const toast = useToast();


const $router = useRouter();

const form = reactive({
  email: null,
  password: null,
});
const errors = ref({});
async function signUpHandler() {
  errors.value = {};
  try {
    await axiosInstance.post("auth/signin", form);
    $router.push('/');
  } catch (error) {
    toast.error(error.response.data.message || error.message);
    if (error.response.status === 403) console.log("Validation errors");
    errors.value = error.response.data.error;
  }
}

</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900 w-full py-[10vh] min-h-screen">
    <form @submit.prevent="signUpHandler" class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
      <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="space-y-4 md:space-y-6 p-[1rem]">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <div class="space-y-4 md:space-y-6">
            <InputField :isInvalid="Boolean(errors['email'])" v-model.trim="form.email" label="Email" type="email"
                        name="email" id="email" required/>
            <InputField :isInvalid="Boolean(errors['password'])" v-model.trim="form.password" placeholder="••••••••"
                        label="Password" name="password" type="password" required/>
            <ButtonElement type="submit"/>
            <ErrorsListElement v-if="Object.keys(errors).length>0" :errors="errors"/>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Want to create account?
              <LinkElement to="/sign-up">Sign up</LinkElement>
            </p>
            <LinkElement to="/forgot-password"> Forgot password?</LinkElement>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<style scoped lang="scss">

</style>
