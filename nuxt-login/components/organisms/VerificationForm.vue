<template>
  <div class="relative z-10 h-full p-7 text-13">
    <LogoAndMessage
      logo="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"
      title="sb sb"
      subtitle="Thanks for joining Aladia."
    />
    <div class="mb-8 text-center text-white/70">
      Please enter below the 6-digit code we sent you through your registration e-mail:
    </div>
    <CodeInput />
    <div class="mb-12 flex w-full justify-center">
      <div class="flex cursor-pointer items-center justify-center text-xs transition-all">
        <div class="text-white/50">You didn't receive any mail?</div>
      </div>
    </div>
    <Button :clickHandler="goToDashboard" class="bg-[url('assets/bg-img.jpg')]">Enter</Button>
  </div>
</template>

<script setup>
import LogoAndMessage from '~/components/molecules/LogoAndMessage.vue';
import CodeInput from '~/components/molecules/VerificationInput.vue';
import Button from '~/components/atoms/Button.vue';
const goToDashboard = () => {
  this.$router.push('/dashboard');
};
</script>

<style scoped>
</style>
