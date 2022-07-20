<template>
  <div class="modal-trigger" @mousedown.stop="handleOpen">
    <slot name="trigger"></slot>
  </div>
  <Teleport to="body">
    <Transition name="modal">
      <div class="modal-container" v-if="show">
        <div class="modal-backdrop" @mousedown.stop="handleClose"></div>
        <div class="modal-content">
          <slot name="content" :close="handleClose"></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
const handleOpen = () => {
  show.value = true;
};
const handleClose = () => {
  show.value = false;
};
</script>

<style scoped>
.modal-trigger {
  display: inline-block;
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  isolation: isolate;
  z-index: 100;
}

.modal-backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: var(--black-shadow);
}

.modal-content {
  padding: 1rem;
  border-radius: 6px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
