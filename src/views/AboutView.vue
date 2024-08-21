<template>
  <current-route :currentRouteName="currentRouteName" />
  <article class="about">
    <info-intro />
    <my-services />
    <testi-monial />
    <clients-comp />
  </article>
</template>

<script setup>
// @ is an alias to /src
import infoIntro from "@/components/InfoIntro.vue";
import MyServices from "@/components/MyServices.vue";
import testiMonial from "@/components/testiMonial.vue";
import ClientsComp from "@/components/ClientsComp.vue";
import currentRoute from "@/components/currentRoute.vue";
import routeMixin from "@/Mixins/routeMixin";

const { currentRouteName } = routeMixin();
</script>
<style lang="scss">
* {
  widows: 800px;
}
.about {
  width: 900px;
  padding: 30px;
}
@media (max-width: 768px) {
  .about {
    width: 768px;
  }
}
@media (max-width: 580px) {
  .about {
    width: 580px;
  }
}
</style>
