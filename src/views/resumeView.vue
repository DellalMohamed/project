<template>
  <h1>Current Route: {{ currentRouteName }}</h1>
  <div class="resume">
    <educatio-comp />
    <experience-comp />
    <my-skills />
  </div>
</template>

<script>
import educatioComp from "@/components/educatioComp.vue";
import experienceComp from "@/components/experienceComp.vue";
import MySkills from "@/components/MySkills.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  //components: { educatioComp, experienceComp, MySkills },
  components: { educatioComp, experienceComp, MySkills },
  setup() {
    const route = useRoute();
    const currentRouteName = computed(() => route.name);
    return { currentRouteName };
  },
};
</script>
<style lang="scss">
@media (max-width: 768px) {
  .resume {
    width: 768px;
    padding: 30px 30px 100px;
  }
}
</style>
