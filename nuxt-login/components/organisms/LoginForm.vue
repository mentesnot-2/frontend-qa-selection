<template>
  <div class="fixed bottom-0 left-0 right-0 top-0 z-[90] flex h-full w-full items-center justify-center bg-black text-white backdrop-blur">
    <div class="relative flex h-[40rem] w-[26rem] flex-col rounded-md border border-white/10 bg-black/50 backdrop-blur transition-all duration-300">
      <!-- Outer Border Gradient Effects -->
      <div class="pointer-events-none absolute inset-0 opacity-70">
        <div class="bg-gradient-top absolute -top-[1px] left-0 right-0 h-[1px]"></div>
        <div class="bg-gradient-top absolute -bottom-[1px] left-0 right-0 h-[1px]"></div>
        <div class="bg-gradient-left absolute -left-[1px] bottom-0 top-0 w-[1px]"></div>
        <div class="bg-gradient-left absolute -right-[1px] bottom-0 top-0 w-[1px]"></div>
      </div>

      <!-- Main Content Area -->
      <div class="relative z-10 h-full p-5 text-13">
        <!-- Header Section -->
        <div class="pt-8">
          <div class="relative flex h-32 justify-between overflow-hidden rounded border border-white/20 bg-black/50 px-8 py-6 opacity-80 transition-all duration-300 mb-6">
            <div class="gradient absolute inset-0 opacity-[0.15]"></div>
            <div class="relative flex w-full justify-between opacity-100">
              <!-- Logo -->
              <img src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png" class="h-20 w-20 object-cover" alt="Aladia Logo" />
              <div>
                <div class="mb-2 text-base font-semibold">Welcome to Aladia,</div>
                <div class="text-white/70">Create or access your <br /> account from here</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Section -->
        <form @submit.prevent="handleSubmit">
          <div class="mb-6 text-center">Enter your email</div>
          <!-- Email Input Group -->
          <div class="mb-6 flex flex-col items-center">
            <div class="group relative mb-6 flex h-10 w-full rounded bg-white">
              <div class="flex w-10 items-center justify-center text-xl">
                <i class="fa-solid fa-envelope text-base text-black/70"></i>
              </div>
              <input
                maxlength="100"
                v-model="email"
                class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
                type="email"
                placeholder="Email Address"
                data-cy="email-input"
              />
            </div>
            <!-- Error Message -->
            <p v-if="emailError" class="text-red-500 text-sm text-center" data-cy="error-email">{{ emailError }}</p>
          </div>

          <!-- Enter Button -->
          <div class="relative flex h-10 w-full items-center justify-center rounded-md border border-white/0 bg-black text-center text-sm cursor-pointer transition-all hover:border-white/40 active:scale-95 mb-6" @click="handleSubmit" data-cy="enter-button">
            <div class="gradient absolute inset-0 opacity-50"></div>
            <div>{{ loading ? 'Logging in...' : 'Enter' }}</div>
          </div>
        </form>

        <!-- Social Login Options -->
        <div class="w-full">
          <div class="mb-6 flex items-center justify-between gap-4">
            <div class="h-[1px] w-40 bg-gradient-to-r from-white/0 to-white"></div>
            <div>Or</div>
            <div class="h-[1px] w-40 bg-gradient-to-r from-white to-white/0"></div>
          </div>

          <!-- Social Buttons -->
          <div class="mb-8 flex w-full flex-col gap-4">
            <Button class="flex items-center justify-center gap-4 rounded border border-white/20 py-1.5 transition-all hover:bg-white/20" @click.prevent="googleLogin">
              <img src="../../assets/icons8-google-48.png" class="inline w-5 h-5 mr-2" alt="Google" /> Continue with Google
            </Button>
            <Button class="flex items-center justify-center gap-4 rounded border border-white/20 py-1.5 transition-all hover:bg-white/20" @click.prevent="facebookLogin">
              <img src="../../assets/icons8-facebook-48.png" class="inline w-5 h-5 mr-2" alt="Facebook" /> Continue with Facebook
            </Button>
            <Button class="flex items-center justify-center gap-4 rounded border border-white/20 py-1.5 transition-all hover:bg-white/20" @click.prevent="appleLogin">
              <img src="../../assets/apple-icon.png" class="inline w-5 h-5 mr-2" alt="Apple" /> Continue with Apple
            </Button>
          </div>
        </div>
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
      email: '',
      password: '',
      loading: false,
      emailError: '', // To store email validation error message
    };
  },
  methods: {
    handleSubmit() {
      // Clear previous error
      this.emailError = '';

      // Validate email input
      if (!this.email) {
        this.emailError = 'Email cannot be empty';
        return;
      } else if (!this.isValidEmail(this.email)) {
        this.emailError = 'Please enter a valid email';
        return;
      }

      // If no error, proceed to the signup page
      this.goToSignup();
    },
    isValidEmail(email) {
      // Simple email validation regex
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
      return re.test(email);
    },
    goToSignup() {
      // Redirect to the signup page when "Enter" is clicked
      this.$router.push({path:'/SignupPage',query: { email: this.email }});
      
    },
    googleLogin() {
      // Handle Google login
    },
    facebookLogin() {
      // Handle Facebook login
    },
    appleLogin() {
      // Handle Apple login
    },
  },
};
</script>

<style scoped>
.text-red-500 {
  color: #f56565;
}
.gradient {
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
}
</style>
