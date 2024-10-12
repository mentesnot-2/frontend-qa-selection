<template>
  <div class="relative mb-4 flex h-10 w-full justify-between text-xl text-black">
    <InputField
      v-for="(input, i) in 6"
      :key="i"
      :ref="el => inputRefs[i] = el"
      @next="moveToNext(i)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputField from '~/components/atoms/VerificationInput.vue';

const inputRefs = ref([]);

function moveToNext(index) {
  if (index < inputRefs.value.length - 1) {
    inputRefs.value[index + 1].$refs.inputField.focus(); // Move focus to the next input
  }
}

</script>

<style scoped>
</style>
