<template>
  <button
    :class="[
      'py-2 px-4 rounded flex justify-center gap-4 border border-white/20 py-1.5 shadow-[0px_3px_#000000] active:scale-95 w-full bg-cover bg-center',
      color,
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
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clickHandler: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.clickHandler();
      }
    },
  },
};
</script>

<style scoped>
</style>
