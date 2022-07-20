<template>
  <ModalComponent>
    <template #trigger>
      <ButtonComponent>Add Post</ButtonComponent>
    </template>
    <template #content="{ close }">
      <div class="controls-wrapper">
        <label for="title">
          Post title
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Post title"
            v-model.trim="title"
            v-auto-focus
          />
        </label>
        <label for="body">
          Post body
          <input
            type="text"
            id="body"
            name="body"
            placeholder="Post body"
            v-model.trim="body"
          />
        </label>
      </div>
      <div class="controls-actions">
        <ButtonComponent type="danger" @click="close">Cancel</ButtonComponent>
        <ButtonComponent
          type="success"
          @click="$store.dispatch('addPost'); close();"
        >
          Save
        </ButtonComponent>
      </div>
    </template>
  </ModalComponent>
</template>

<script setup>
import ModalComponent from '@/components/ModalComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import useStateModel from '@/composables/useStateModel.js';

const title = useStateModel('post.title', 'setPostTitle');
const body = useStateModel('post.body', 'setPostBody');
</script>

<style scoped lang="scss">
.controls-wrapper {
  label {
    display: block;
    width: 100%;

    input {
      margin-top: 0.5em;
      display: block;
      width: 100%;
      max-width: 300px;
      min-width: 300px;
      padding: 0.5em 1em;
      border: 1px solid var(--black);
      border-radius: 5px;
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
}

.controls-actions {
  margin-top: 1rem;
  text-align: right;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
}
</style>
