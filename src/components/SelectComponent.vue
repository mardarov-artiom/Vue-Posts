<template>
  <!-- eslint-disable-next-line -->
  <select v-model="sortBy">
    <option disabled selected hidden value="">Sort posts by...</option>
    <option
      v-for="option in $store.state.sortOptions"
      :key="option.name"
      :value="option.name"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script setup>
import useStateModel from '@/composables/useStateModel.js';

const sortBy = useStateModel('sortBy', 'setSort');
</script>

<style scoped>
select {
  padding: 0.5rem;
  border: 1px solid var(--black);
  border-radius: 6px;
  font-weight: bold;
  font-size: 0.8rem;
}
</style>
