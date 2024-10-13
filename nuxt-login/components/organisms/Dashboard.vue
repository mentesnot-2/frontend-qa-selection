<template>
    <div class="flex items-center justify-center h-screen bg-black text-white">
      <div class="text-center">
        <h1 class="text-3xl mb-6" data-cy="welcome-text">Welcome to Aladia</h1>
        <Button className="bg-red-500 hover:bg-red-600" :clickHandler="logout" dataCy="logout-btn">
          Logout
        </Button>
      </div>
    </div>
  </template>
  
  <script>
  import Button from '~/components/atoms/Button.vue';
  
  export default {
    components: {
      Button,
    },
    methods: {
      logout() {
        this.$router.push('/logout');
      },
    },
  };
  </script>
  