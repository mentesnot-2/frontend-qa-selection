<template>
    <div class="fixed bottom-0 left-0 right-0 top-0 z-[90] flex h-full w-full items-center justify-center bg-black text-white backdrop-blur">
      <!-- Signup Container -->
      <div class="relative flex h-[40rem] w-[26rem] flex-col rounded-md border border-white/20 bg-black/50 opacity-100 backdrop-blur transition-all duration-300 p-5">
        <!-- Gradient Border Effect -->
        <div class="pointer-events-none absolute inset-0 opacity-70">
          <div class="bg-gradient-top absolute -top-[1px] left-0 right-0 h-[1px]"></div>
          <div class="bg-gradient-top absolute -bottom-[1px] left-0 right-0 h-[1px]"></div>
          <div class="bg-gradient-left absolute -left-[1px] bottom-0 top-0 w-[1px]"></div>
          <div class="bg-gradient-left absolute -right-[1px] bottom-0 top-0 w-[1px]"></div>
        </div>
  
        <!-- Back to Login Button -->
        <div class="next-icon flex h-8 cursor-pointer items-center justify-center gap-2 pb-4 transition-all active:scale-95 mt-6 text-sm" @click.prevent="goToHome">
          <div class="inline-flex items-center justify-center pt-0.5 rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" class="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
              <path class="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round"></path>
            </svg>
          </div> 
          Back to Log in
        </div>
  
        <!-- Profile Image and Greeting Section -->
        <div class="flex flex-col items-center px-4">
          <div class="mb-4 flex w-full items-end gap-6 px-4">
            <div class="relative h-24 w-24 rounded border border-white/20 transition-all hover:border-white">
              <div class="gradient absolute inset-0 opacity-20"></div>
              <img src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png" alt="Profile" class="absolute inset-0 h-full w-full rounded object-cover" />
              <input type="file" accept="image/*" class="absolute inset-0 opacity-0 cursor-pointer" />
            </div>
            <div>
              <div class="mb-1 text-sm font-semibold">Nice to meet you,</div>
              <div class="text-xs text-white/70"> Upload a profile picture <br /> and complete your <br /> presentation </div>
            </div>
          </div>
  
          <!-- Terms & Conditions -->
          <div class="mb-4 flex items-center gap-2 w-full px-6">
            <div class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white" @click="toggleTerms">
              <i class="fa-solid fa-check tex-sm" v-show="acceptTerms"></i>
            </div>
            <div class="text-xs text-white/70"> I accept <span class="underline text-white">Terms & Conditions</span> and <span class="underline text-white">Privacy Policy</span></div>
          </div>
  
          <!-- Signup Form -->
          <form @submit.prevent="signup">
            <div class="group relative mb-4 flex h-10 w-[20rem] rounded bg-white">
              <div class="flex w-10 items-center justify-center text-xl">
                <i class="fa-solid fa-user text-base text-black/70"></i>
              </div>
              <!-- Set input width to w-full to occupy full space -->
              <input maxlength="100" v-model="name" placeholder="Name" class="h-full flex-1 rounded bg-white text-sm text-black outline-none w-full" />
            </div>
  
            <div class="group relative mb-4 flex h-10 w-full rounded bg-white">
              <div class="flex w-10 items-center justify-center text-xl">
                <i class="fa-solid fa-user text-base text-black/70"></i>
              </div>
              <!-- Set input width to w-full to occupy full space -->
              <input maxlength="100" v-model="surname" placeholder="Surname" class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none w-full" />
            </div>
  
            <div class="group relative mb-4 flex h-10 w-full rounded bg-[#A8A8A8]">
              <div class="flex w-10 items-center justify-center text-xl">
                <i class="fa-solid fa-envelope text-base text-black/70"></i>
              </div>
              <!-- Set input width to w-full to occupy full space -->
              <input maxlength="100" v-model="email" disabled placeholder="Email Address" class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none w-full" />
            </div>
  
            <div class="group relative mb-4 flex h-10 w-full rounded bg-white">
              <div class="flex w-10 items-center justify-center text-xl">
                <i class="fa-solid fa-key text-base text-black/70"></i>
              </div>
              <!-- Set input width to w-full to occupy full space -->
              <input type="password" v-model="password" maxlength="100" placeholder="Password" class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none w-full" />
              <i class="fa-solid fa-eye-slash absolute right-3 top-[0.7rem] scale-100 cursor-pointer text-base text-black/50 transition-all active:scale-90"></i>
            </div>
  
            <div class="group relative mb-4 flex h-10 w-full rounded bg-white">
              <div class="flex w-10 items-center justify-center text-xl">
                <i class="fa-solid fa-key text-base text-black/70"></i>
              </div>
              <!-- Set input width to w-full to occupy full space -->
              <input type="password" v-model="confirmPassword" maxlength="100" placeholder="Confirm Password" class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none w-full" />
              <i class="fa-solid fa-eye-slash absolute right-3 top-[0.7rem] scale-100 cursor-pointer text-base text-black/50 transition-all active:scale-90"></i>
            </div>
  
  
            <!-- Submit Button -->
            <Button :disabled="loading || !acceptTerms" class="w-full">{{ loading ? 'Signing up...' : 'Enter' }}</Button>
          </form>
  
          <!-- Terms & Conditions Link -->
          <div class="cursor-pointer text-center text-white/40 mt-4"> Terms & Conditions </div>
        </div>
      </div>
    </div>
</template>
  
<script>
  import Button from '~/components/atoms/Button.vue';
  
  export default {
    components: {
      Button,
    },
    data() {
      return {
        name: '',
        surname: '',
        email: 'user@example.com', // Example email, can be populated dynamically
        password: '',
        confirmPassword: '',
        acceptTerms: false,
        loading: false,
      };
    },
    methods: {
      goToHome() {
        this.$router.push('/');
      },
      signup() {
        this.loading = true;
        // Handle signup logic here
        setTimeout(() => {
          this.loading = false;
          alert('Signed up successfully!');
        }, 1000);
      },
      toggleTerms() {
        this.acceptTerms = !this.acceptTerms;
      },
    },
  };
</script>
  
<style scoped>
  .bg-gradient-top {
    background: linear-gradient(to right, transparent, #ffffff00, transparent);
  }
  .bg-gradient-left {
    background: linear-gradient(to bottom, transparent, #ffffff04, transparent);
  }
</style>