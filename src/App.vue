<template>
  <header>
    <NavigationComponent />
  </header>
  <section name="main" class="main">
    <router-view/>
  </section>
</template>
<script setup>
import NavigationComponent from '@/components/NavigationComponent.vue';
</script>

<style>
  @import '@/assets/base.css';

  .main {
    padding: calc(50px + 1rem) 1rem 1rem 1rem;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
  }
</style>
