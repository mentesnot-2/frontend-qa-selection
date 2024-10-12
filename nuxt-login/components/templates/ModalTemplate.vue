<template>
    <div class="fixed bottom-0 left-0 right-0 top-0 z-[90] flex h-full w-full items-center justify-center bg-black text-white backdrop-blur">
      <div class="relative flex h-[40rem] w-[24rem] flex-col rounded-md border border-white/10 bg-black/50 opacity-0 backdrop-blur transition-all duration-300" :style="{ opacity: 1 }">
        <div class="pointer-events-none absolute inset-0 opacity-70">
          <div class="bg-gradient-top absolute -top-[1px] left-0 right-0 h-[1px]"></div>
          <div class="bg-gradient-top absolute -bottom-[1px] left-0 right-0 h-[1px]"></div>
          <div class="bg-gradient-left absolute -left-[1px] bottom-0 top-0 w-[1px]"></div>
          <div class="bg-gradient-left absolute -right-[1px] bottom-0 top-0 w-[1px]"></div>
        </div>
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>
  