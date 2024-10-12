<template>
    <button :class="computedClasses" :disabled="disabled">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      disabled: Boolean,
    },
    computed: {
      computedClasses() {
        return this.disabled
          ? 'w-full bg-gray-500 cursor-not-allowed'
          : 'w-full bg-blue-600 text-white cursor-pointer';
      },
    },
  };
  </script>
  