<template>
  <template v-if="!$store.state.isLoading">
    <slot></slot>
  </template>
  <LoaderComponent v-else/>
</template>

<script setup>
import LoaderComponent from '@/components/LoaderComponent.vue';
</script>
