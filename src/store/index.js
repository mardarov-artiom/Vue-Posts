import { createStore } from 'vuex';
import axios from 'axios';
import generateRandomId from '@/helpers/randomId.js';

export default createStore({
  state: () => ({
    isLoading: false,
    morePostsLoading: false,
    posts: [],
    page: 1,
    limit: 10,
    selectedPost: {},
    sortBy: '',
    sortOptions: [
      {
        name: 'title',
        label: 'By Title',
      },
      {
        name: 'body',
        label: 'By Body',
      },
    ],
    searchQuery: '',
    post: {
      title: '',
      body: '',
    },
  }),
  getters: {
    postsLength(state) {
      return state.posts.length;
    },
    sortedPosts(state) {
      return [...state.posts].sort((a, b) => a[state.sortBy]?.localeCompare(b[state.sortBy]));
    },
    searchedPosts(state, getters) {
      return getters.sortedPosts.filter((p) => p.title.toLowerCase()
        .includes(state.searchQuery.toLowerCase()));
    },
    selectedPostExists(state) {
      return state.selectedPost && Object.keys(state.selectedPost).length !== 0;
    },
  },
  mutations: {
    setIsLoading(state, value) {
      state.isLoading = value;
    },
    setMorePostsLoading(state, value) {
      state.morePostsLoading = value;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    addPost(state, post) {
      state.posts.push(post);
    },
    removePost(state, postId) {
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
    setPage(state, pageNumber) {
      state.page = pageNumber;
    },
    setLimit(state, postsLimit) {
      state.limit = postsLimit;
    },
    setPostTitle(state, title) {
      state.post.title = title;
    },
    setPostBody(state, body) {
      state.post.body = body;
    },
    setSort(state, sortBy) {
      state.sortBy = sortBy;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    setSelectedPost(state, post) {
      state.selectedPost = post;
    },
  },
  actions: {
    async fetchPosts({ state }) {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      let response = null;
      try {
        response = await axios.get(url, {
          params: {
            _limit: state.limit,
            _page: state.page,
          },
        });
      } catch (e) {
        throw new Error(e);
      }

      return response.data;
    },
    initPosts({
      commit,
      dispatch,
    }) {
      commit('setIsLoading', true);
      window.setTimeout(async () => {
        commit('setPosts', await dispatch('fetchPosts'));
        commit('setIsLoading', false);
      }, 1000);
    },
    fetchMorePosts({
      commit,
      dispatch,
      state,
    }) {
      commit('setMorePostsLoading', true);
      window.setTimeout(async () => {
        commit('setPosts', [...state.posts, ...await dispatch('fetchPosts')]);
        commit('setMorePostsLoading', false);
      }, 1000);
    },
    setPostTitle({ commit }, title) {
      commit('setPostTitle', title);
    },
    setPostBody({ commit }, body) {
      commit('setPostBody', body);
    },
    addPost({
      commit,
      state,
    }) {
      const randomId = generateRandomId();
      commit('addPost', {
        id: randomId,
        userId: randomId,
        title: state.post.title,
        body: state.post.body,
      });
    },
    removePost({ commit }, postId) {
      commit('removePost', postId);
    },
    setSort({ commit }, sortBy) {
      commit('setSort', sortBy);
    },
    setSearchQuery({ commit }, query) {
      commit('setSearchQuery', query);
    },
    setPage({
      commit,
      state,
    }, value) {
      const pageNumber = value || (state.page += 1);
      commit('setPage', pageNumber);
    },
    setSelectedPost({ commit, state }, id) {
      const selected = state.posts.filter((product) => product.id.toString() === id)[0];
      commit('setSelectedPost', selected);
    },
  },
});
