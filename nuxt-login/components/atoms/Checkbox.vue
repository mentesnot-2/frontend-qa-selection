<template>
    <div
      class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white"
      @click="$emit('toggle')"
    >
      <i class="fa-solid fa-check text-sm" v-if="checked"></i>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      checked: Boolean,
    },
  };
  </script>
  