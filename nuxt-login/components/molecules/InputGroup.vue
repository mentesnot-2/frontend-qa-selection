<template>
  <div class="mb-4 relative">
    <Label>{{ label }}</Label>
    <div class="flex items-center border border-gray-300 rounded w-full p-2">
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
