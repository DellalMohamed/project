<template>
  <current-route :currentRouteName="currentRouteName" />
  <div class="contact">
    <contact-form />
  </div>
</template>

<script setup>
import contactForm from "@/components/contactForm.vue";
import currentRoute from "@/components/currentRoute.vue";
import routeMixin from "@/Mixins/routeMixin";

const { currentRouteName } = routeMixin();
</script>
<style lang="scss">
.contact {
  padding: 30px;
}
@media (max-width: 768px) {
  .contact {
    padding: 30px 30px 60px;
  }
}
</style>
