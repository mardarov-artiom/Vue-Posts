<template>
  <LoaderWrapperComponent>
    <template v-if="selectedPostExists">
      <h1>Post Detail:</h1>
      <h2>title: {{ selectedPost.title }}</h2>
      <h3>body: {{ selectedPost.body }}</h3>
    </template>
    <template v-else>Post doesn't exist</template>
  </LoaderWrapperComponent>
</template>

<script setup>
import { computed, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import LoaderWrapperComponent from '@/components/LoaderWrapperComponent.vue';

const route = useRoute();
const store = useStore();

const selectedPost = computed(() => store.state.selectedPost);
const selectedPostExists = computed(() => store.getters.selectedPostExists);

watchEffect(() => {
  if (store.getters.postsLength <= 0) {
    store.dispatch('initPosts');
  }
  store.dispatch('setSelectedPost', route.params.id);
});
</script>
