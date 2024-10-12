<template>
  <div class="fixed bottom-0 left-0 right-0 top-0 z-[90] flex h-full w-full items-center justify-center bg-black text-white backdrop-blur">
    <SignupForm />
  </div>
</template>

<script>
import SignupForm from '~/components/organisms/SignupContainer.vue';

export default {
  components: {
    SignupForm,
  },
};
</script>
