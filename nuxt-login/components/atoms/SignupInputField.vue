<template>
    <div class="group relative mb-4 flex h-10 w-[20rem] rounded bg-white">
      <div class="flex items-center justify-center text-xl mx-6">
        <slot name="icon"></slot>
      </div>
      <input
        :type="type"
        :maxlength="maxlength"
        :value="modelValue"
        :placeholder="placeholder"
        class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none w-full"
      />
      <slot name="toggle-icon"></slot>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text',
      },
      maxlength: {
        type: Number,
        default: 100,
      },
      modelValue: String,
      placeholder: String,
    },
    emits: ['update:modelValue'],
  };
  </script>
  