<template>
  <div class="post">
    <div
      class="post-header"
      @mousedown.stop="$router.push('/post/' + post.id)">
      {{ props.post.title }}
    </div>
    <div class="post-body">{{ props.post.body }}</div>
    <div class="post-actions">
      <ButtonComponent
        type="danger"
        @click.stop="$store.dispatch('removePost', props.post.id)"
      >
        Remove
      </ButtonComponent>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.post {
  padding: 1rem;
  border: 1px solid var(--black-shadow);
  border-radius: 6px;
}

.post-header {
  font-size: 1.2rem;
  color: var(--vue-green);
  transition: text-shadow 0.2s linear;
}

.post-header:hover {
  text-shadow: 0 0 10px var(--green-shadow);
  cursor: pointer;
}

.post-body {
  margin-top: 1rem;
}

.post-actions {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
