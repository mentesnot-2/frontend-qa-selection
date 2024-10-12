<template>
    <p class="text-center text-2xl font-bold text-white">{{ text }}</p>
  </template>
  
  <script setup>
  defineProps({
    text: {
      type: String,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  </style>
  