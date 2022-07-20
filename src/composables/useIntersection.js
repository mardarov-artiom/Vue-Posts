import { useStore } from 'vuex';

export default function useIntersection(elementToWatch, opt = {}) {
  const store = useStore();
  const options = {
    ...opt,
    rootMargin: '0px',
    threshold: 1.0,
  };

  const callback = (entries, observer) => {
    observer.unobserve(elementToWatch);
    if (entries[0].isIntersecting && !store.state.isLoading && !store.state.morePostsLoading) {
      store.dispatch('setPage');
      store.dispatch('fetchMorePosts');
    }
  };
  const observer = new IntersectionObserver(callback, options);
  window.addEventListener('scroll', () => {
    observer.observe(elementToWatch);
  });
}
