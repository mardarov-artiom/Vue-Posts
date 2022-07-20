<template>
  <button class="button" type="button" :class="props.type">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
  },
});
</script>

<style scoped lang="scss">
.button {
  font-size: 0.8rem;
  padding: 0.5em;
  background-color: var(--blue);
  color: #fff;
  border-radius: 5px;
  border: 2px solid var(--blue);
  transition: 0.3s;

  &:hover:not([disabled]) {
    color: var(--blue);
  }

  &.success {
    background-color: var(--green);
    border: 2px solid var(--green);

    &:hover:not([disabled]) {
      color: var(--black);
    }
  }

  &.danger {
    background-color: var(--danger);
    border: 2px solid var(--danger);

    &:hover:not([disabled]) {
      color: var(--danger);
    }
  }
}

.button:hover:not([disabled]) {
  background-color: #fff;
  cursor: pointer;
}

.button[disabled] {
  background-color: var(--gray);
  border-color: var(--gray);
  cursor: not-allowed;
}
</style>
