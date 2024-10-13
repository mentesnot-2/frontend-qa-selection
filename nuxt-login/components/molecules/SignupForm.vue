<template>
  <div>
    <InputField v-model="name" placeholder="Name">
      <template #icon>
        <i class="fa-solid fa-user text-base text-black/70"></i>
      </template>
    </InputField>

    <InputField v-model="surname" placeholder="Surname">
      <template #icon>
        <i class="fa-solid fa-user text-base text-black/70"></i>
      </template>
    </InputField>

    <InputField v-model="email" placeholder="Email" :disabled="true">
      <template #icon>
        <i class="fa-solid fa-envelope text-base text-black/70"></i>
      </template>
    </InputField>

    <InputField v-model="password" placeholder="Password" type="password">
      <template #icon>
        <i class="fa-solid fa-key text-base text-black/70"></i>
      </template>
      <template #toggle-icon>
        <i class="fa-solid fa-eye-slash absolute right-3 top-[0.7rem] text-base text-black/50 cursor-pointer"></i>
      </template>
    </InputField>

    <InputField v-model="confirmPassword" placeholder="Confirm Password" type="password">
      <template #icon>
        <i class="fa-solid fa-key text-base text-black/70"></i>
      </template>
      <template #toggle-icon>
        <i class="fa-solid fa-eye-slash absolute right-3 top-[0.7rem] text-base text-black/50 cursor-pointer"></i>
      </template>
    </InputField>

    <Button :disabled="!acceptTerms" :clickHandler="signup" class="bg-[url('assets/bg-img.jpg')]">{{ loading ? 'Signing up...' : 'Enter' }}</Button>
  </div>
</template>

<script>
import InputField from '@/components/atoms/Input.vue';
import Button from '@/components/atoms/Button.vue';

export default {
  components: {
    InputField,
    Button,
  },
  props: {
    loading: Boolean,
    acceptTerms: Boolean,
  },
  data() {
    return {
      name: '',
      surname: '',
      email: this.$route.query.email || '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    async signup() {
      setTimeout(() => {
        this.$router.push('/VerificationPage');
      }, 1000);
    },
  },
};
</script>
