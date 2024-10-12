<template>
    <div class="flex h-10 w-full justify-between text-xl text-black">
      <Input
        v-for="(digit, index) in digits"
        :key="index"
        :maxlength="1"
        @update:modelValue="updateDigit(index, $event)"
        class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
      />
    </div>
  </template>
  
  <script>
  import Input from '@/components/atoms/Input.vue';
  
  export default {
    components: {
      Input,
    },
    data() {
      return {
        digits: Array(6).fill(''),
      };
    },
    methods: {
      updateDigit(index, value) {
        this.$set(this.digits, index, value);
        if (value && index < this.digits.length - 1) {
          this.$refs[`input-${index + 1}`].focus();
        }
      },
    },
  };
  </script>
  