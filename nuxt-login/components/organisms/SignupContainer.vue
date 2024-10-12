<template>
    <div class="fixed bottom-0 left-0 right-0 top-0 z-[90] flex h-full w-full items-center justify-center bg-black text-white backdrop-blur">
      <div class="relative flex h-[40rem] w-[24rem] flex-col rounded-md border border-white/20 bg-black/50 opacity-100 backdrop-blur transition-all duration-300 p-5">
        
        <!-- Gradient Border Effect -->
        <div class="pointer-events-none absolute inset-0 opacity-70">
          <div class="bg-gradient-top absolute -top-[1px] left-0 right-0 h-[1px]"></div>
          <div class="bg-gradient-top absolute -bottom-[1px] left-0 right-0 h-[1px]"></div>
          <div class="bg-gradient-left absolute -left-[1px] bottom-0 top-0 w-[1px]"></div>
          <div class="bg-gradient-left absolute -right-[1px] bottom-0 top-0 w-[1px]"></div>
        </div>
        
        <!-- Back to Login Button -->
        <div class="next-icon flex h-8 cursor-pointer items-center justify-center gap-2 pb-4 transition-all active:scale-95 mt-6 text-sm" @click="goToHome">
        <img src="../../assets/left-removed.png" alt="Back to Log in" class="h-4 w-4" />
        Back to Log in
        </div>
        
        <!-- Profile Image and Greeting Section -->
        <div class="flex flex-col items-center justify-center">
          
          <!-- Arrange Profile Image and Text in a Row -->
          <div class="flex items-center gap-8 mb-4 w-full pl-4">
            <ProfileImageUploader />
            <div class="flex flex-col text-left w-2/5 flex-end">
                <div class="text-base text-white mb-1">Nice to meet you!</div>
                <div class="text-xs text-white/70">
                Upload a profile picture and complete your presentation
                </div>
            </div>
          </div>
          
          <!-- Terms & Conditions -->
          <div class="mb-4 flex items-center gap-2 w-full px-6">
            <Checkbox :checked="acceptTerms" @toggle="toggleTerms" />
            <div class="text-xs text-white/70">
              I accept <span class="underline text-white">Terms & Conditions</span> and <span class="underline text-white">Privacy Policy</span>
            </div>
          </div>
          
          <!-- Signup Form -->
          <SignupForm :loading="loading" :acceptTerms="acceptTerms" />
          
          <!-- Terms & Conditions Link -->
          <div class="cursor-pointer text-center text-white/40 mt-4"> Terms & Conditions </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ProfileImageUploader from '@/components/molecules/ProfileImageUploader.vue';
  import SignupForm from '@/components/molecules/SignupForm.vue';
  import Checkbox from '@/components/atoms/Checkbox.vue';
  
  export default {
    components: {
      ProfileImageUploader,
      SignupForm,
      Checkbox,
    },
    data() {
      return {
        email: this.$route.query.email || '',
        acceptTerms: false,
        loading: false,
      };
    },
    methods: {
      goToHome() {
        this.$router.push('/');
      },
      toggleTerms() {
        this.acceptTerms = !this.acceptTerms;
      },
    },
  };
  </script>
  