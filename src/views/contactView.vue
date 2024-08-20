<template>
  <h1>Current Route: {{ currentRouteName }}</h1>
  <div class="contact">
    <contact-form />
  </div>
</template>

<script>
import contactForm from "@/components/contactForm.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  components: { contactForm },
  setup() {
    const route = useRoute();
    const currentRouteName = computed(() => route.name);
    return { currentRouteName };
  },
};
</script>
<style lang="scss">
@media (max-width: 768px) {
  .contact {
    padding: 30px 30px 60px;
  }
}
</style>
