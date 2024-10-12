<template>
  <div class="fixed bottom-0 left-0 right-0 top-0 z-[90] flex h-full w-full items-center justify-center bg-black text-white backdrop-blur">
    <div class="relative flex h-[40rem] w-[26rem] flex-col rounded-md border border-white/20 bg-black/50 opacity-100 backdrop-blur transition-all duration-300 p-5">
      <div class="pointer-events-none absolute inset-0 opacity-70">
        <div class="bg-gradient-top absolute -top-[1px] left-0 right-0 h-[1px]"></div>
        <div class="bg-gradient-top absolute -bottom-[1px] left-0 right-0 h-[1px]"></div>
        <div class="bg-gradient-left absolute -left-[1px] bottom-0 top-0 w-[1px]"></div>
        <div class="bg-gradient-left absolute -right-[1px] bottom-0 top-0 w-[1px]"></div>
      </div>

      <div class="next-icon flex h-8 cursor-pointer items-center justify-center gap-2 pb-4 transition-all active:scale-95 mt-6 text-sm" @click.prevent="goToHome">
        <div class="inline-flex items-center justify-center pt-0.5 rotate-180">
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        Back to Log in
      </div>

      <ProfileImageUpload />
      <SignupForm />
      <div class="cursor-pointer text-center text-white/40 mt-4"> Terms & Conditions </div>
    </div>
  </div>
</template>

<script>
import ProfileImageUpload from '~/components/molecules/ProfileImageUpload.vue';
import SignupForm from '~/components/organisms/SignupForm.vue';

export default {
  components: {
    ProfileImageUpload,
    SignupForm,
  },
  methods: {
    goToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
/* SignupTemplate styles */
.bg-gradient-top {
  background: linear-gradient(to right, transparent, #ffffff00, transparent);
}
.bg-gradient-left {
  background: linear-gradient(to bottom, transparent, #ffffff04, transparent);
}
</style>
