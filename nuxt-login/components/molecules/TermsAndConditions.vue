<template>
    <div class="mb-4 flex items-center gap-2 w-full px-6">
      <div class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white" @click="toggleTerms">
        <i class="fa-solid fa-check tex-sm" v-show="acceptTerms"></i>
      </div>
      <div class="text-xs text-white/70">
        I accept <span class="underline text-white">Terms & Conditions</span> and <span class="underline text-white">Privacy Policy</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      acceptTerms: Boolean,
    },
    methods: {
      toggleTerms() {
        this.$emit('toggle');
      },
    },
  };
  </script>
  
  <style scoped>
  /* TermsAndConditions styles */
  </style>
  