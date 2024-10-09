<template>
  <div>
    <div 
    class="flex items-center justify-center mb-6 w-full border border-gray-300 rounded-lg mt-6 w-10 w-10 pt-2 pb-2 ">
      <div class="w-1/2 flex flex-start">
        <img src="../../assets/aladia_logo-removebg-preview.png" alt="Welcome" class="w-full object-cover " />
      </div>

      <div class="w-1/2 p-2">
        <h2 class="text-lg font-bold ">Welcome to Aladia,</h2>
        <p class="text-gray-300">Create or access your account from here</p>
      </div>
    </div>



    <form @submit.prevent="login">
      <InputGroup
        label="Enter your email"
        type="email"
        placeholder="Email Address"
        iconSrc="../../assets/icons8-gmail-30.png"
        v-model="email"
      />
      <div class="text-center">
        <Button :disabled="loading" class="w-full">{{ loading ? 'Logging in...' : 'Enter' }}</Button>
      </div>

      <!-- Social Logins -->
      <div class="mt-4">
        <div class="flex items-center my-2">
          <hr class="flex-grow border-t border-gray-600" />
          <span class="mx-4 text-gray-400">Or</span>
          <hr class="flex-grow border-t border-gray-600" />
        </div>

        <Button class="w-full mb-2 bg-black text-black" @click.prevent="googleLogin">
          <img src="../../assets/icons8-google-48.png" alt="Google" class="inline w-5 h-5 mr-2" /> Continue with Google
        </Button>
        <Button class="w-full mb-2 bg-black text-black" @click.prevent="facebookLogin">
          <img src="../../assets/icons8-facebook-48.png" alt="Facebook" class="inline w-5 h-5 mr-2" /> Continue with Facebook
        </Button>
        <Button class="w-full mb-2 bg-black text-black" @click.prevent="appleLogin">
          <img src="../../assets/apple-icon.png" alt="Apple" class="inline w-5 h-5 mr-2" /> Continue with Apple
        </Button>
      </div>
    </form>

    <!-- Footer -->
    <div class="text-center text-gray-400 mt-6">
      <a href="#" class="hover:text-white underline">Terms & Conditions</a>
    </div>
  </div>
</template>

<script>
import InputGroup from '~/components/molecules/InputGroup.vue';
import Button from '~/components/atoms/Button.vue';

export default {
  components: {
    InputGroup,
    Button,
  },
  data() {
    return {
      email: '',
      password: '',
      loading: false,
    };
  },
  methods: {
    login() {
      this.loading = true;
      // Handle login logic here
      this.loading = false;
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
</style>