<template>
  <current-route :currentRouteName="currentRouteName" />
  <div class="resume">
    <educatio-comp />
    <experience-comp />
    <my-skills />
  </div>
</template>

<script setup>
import educatioComp from "@/components/educatioComp.vue";
import experienceComp from "@/components/experienceComp.vue";
import MySkills from "@/components/MySkills.vue";
import currentRoute from "@/components/currentRoute.vue";
import routeMixin from "@/Mixins/routeMixin";

const { currentRouteName } = routeMixin();
//import routeMixin from "@/Mixins/routeMixin";
//components: { educatioComp, experienceComp, MySkills },
/*components: {
  educatioComp, experienceComp, MySkills, currentRoute;
}
mixins: [routeMixin];*/
</script>
<style lang="scss">
@media (max-width: 768px) {
  .resume {
    width: 768px;
    padding: 30px 30px 100px;
  }
}
@media (max-width: 580px) {
  .resume {
    width: 580px;
    padding: 30px 30px 100px;
    background-color: aqua;
  }
}
@media (max-width: 450px) {
  .resume {
    width: 580px;
    padding: 30px 30px 100px;
  }
}
</style>
