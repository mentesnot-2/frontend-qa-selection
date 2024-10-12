<template>
    <div class="flex flex-col items-center px-6 pt-8">
      <img :src="logo" class="mb-2 h-24 w-24 rounded object-cover" />
      <div class="mb-4 text-lg font-semibold">{{ title }}</div>
      <div class="mb-8 text-white/70">{{ subtitle }}</div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    logo: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  });
  </script>
  
  <style scoped>
  </style>
  