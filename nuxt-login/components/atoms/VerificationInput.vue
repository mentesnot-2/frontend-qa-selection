<template>
    <input
      :maxlength="maxlength"
      class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
      @input="handleInput"
      ref="inputField"
    />
  </template>
  
  <script setup>
  const props = defineProps({
    maxlength: {
      type: Number,
      default: 1,
    },
  });
  
  const emit = defineEmits(['next']);
  
  // Emit 'next' event when input is filled
  function handleInput(event) {
    if (event.target.value.length >= props.maxlength) {
      emit('next');
    }
  }
  </script>
  
  <style scoped>
  </style>
  