<template>
  <button
    :class="[
      'py-2 px-4 font-bold rounded flex cursor-pointer justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_#000000] active:scale-95',
      color,
      { 'cursor-not-allowed opacity-50': disabled },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'bg-black text-white',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
</style>
