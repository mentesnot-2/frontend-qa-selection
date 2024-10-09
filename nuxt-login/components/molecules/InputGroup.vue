<template>
  <div class="mb-4 relative">
    <!-- Label -->
    <Label>{{ label }}</Label>

    <!-- Wrapper for input and icon -->
    <div class="flex items-center border border-gray-300 rounded w-full p-2">
      <!-- Icon (image) with specified path -->
      <img
        v-if="iconSrc"
        :src="iconSrc"
        alt="icon"
        class="w-6 h-6 mr-2"
      />

      <!-- Input field -->
      <Input :type="type" :placeholder="placeholder" v-model="inputValue" class="flex-grow"/>
    </div>
  </div>
</template>

<script>
import Label from '~/components/atoms/Label.vue';
import Input from '~/components/atoms/Input.vue';

export default {
  components: {
    Label,
    Input,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    iconSrc: {
      type: String,
      default: '', // The path to the icon image
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style scoped>
/* Additional styling can go here if needed */
</style>
