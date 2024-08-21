import { useRoute } from "vue-router";
import { computed } from "vue";

const routeMixin = () => {
  const route = useRoute();
  const currentRouteName = computed(() => route.name);

  return {
    route,
    currentRouteName,
  };
};

export default routeMixin;
