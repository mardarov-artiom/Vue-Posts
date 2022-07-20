import { computed } from 'vue';
import { useStore } from 'vuex';

export default function useStateModel(prop, action) {
  const store = useStore();
  return computed({
    get: () => store.state[prop],
    set: (value) => store.dispatch(action, value),
  });
}
