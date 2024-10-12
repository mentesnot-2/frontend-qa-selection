<template>
  <div class="relative h-24 w-24 rounded-full transition-all hover:border-white cursor-pointer rounded-sm">
    
    <div class="gradient absolute inset-0 opacity-20"></div>
    <img
      :src="profileImage"
      alt="Profile"
      class="absolute inset-0 h-full w-full rounded-full object-cover"
    />

    <!-- File Input -->
    <input type="file" accept="image/*" class="absolute inset-0 opacity-0 cursor-pointer" />
  </div>
</template>

<script>
export default {
  props: {
    profileImage: {
      type: String,
      default: 'https://develop.aladia.io/_nuxt/image.ChQ3biW9.png', // Default profile image
    },
  },
};
</script>

<style scoped>
.gradient {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.3));
}
</style>
