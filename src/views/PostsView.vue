<template>
  <LoaderWrapperComponent>
    <div class="posts-header">
      <AddPostComponent/>
      <div>
        <input
          v-model.trim="searchQuery"
          class="search-input"
          placeholder="Search post"
        />
        <SelectComponent/>
      </div>
    </div>
    <div class="posts-wrapper">
      <PostComponent v-for="post in searchedPosts" :key="post.id" :post="post"/>
    </div>
    <template v-if="postsLength === 0">No posts available</template>
  </LoaderWrapperComponent>
  <div class="observer" ref="observer">
    <div class="fetching-loader" v-if="$store.state.morePostsLoading">
      <LoaderComponent  />
    </div>
  </div>

</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import AddPostComponent from '@/components/AddPostComponent.vue';
import LoaderWrapperComponent from '@/components/LoaderWrapperComponent.vue';
import SelectComponent from '@/components/SelectComponent.vue';
import useStateModel from '@/composables/useStateModel.js';
import PostComponent from '@/components/PostComponent.vue';
import useIntersection from '@/composables/useIntersection.js';
import LoaderComponent from '@/components/LoaderComponent.vue';

const observer = ref(null);
const store = useStore();
const postsLength = computed(() => store.getters.postsLength);
const searchedPosts = computed(() => store.getters.searchedPosts);
const searchQuery = useStateModel('searchQuery', 'setSearchQuery');

onMounted(() => {
  if (store.getters.postsLength <= 0) {
    store.dispatch('initPosts');
  }
  if (observer.value) {
    useIntersection(observer.value);
  }
});
</script>

<style scoped lang="scss">
.posts-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.posts-header {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-input {
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid var(--black);
  margin-right: 1rem;
}

.fetching-loader {
  position: relative;
  height: 80px;
  margin-top: 2rem;
}
</style>
