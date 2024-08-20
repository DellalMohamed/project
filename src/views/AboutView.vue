<template>
  <h1>Current Route: {{ currentRouteName }}</h1>
  <article class="about">
    <info-intro />
    <my-services />
    <testi-monial />
    <clients-comp />
  </article>
</template>

<script>
// @ is an alias to /src
import infoIntro from "@/components/InfoIntro.vue";
import MyServices from "@/components/MyServices.vue";
import testiMonial from "@/components/testiMonial.vue";
import ClientsComp from "@/components/ClientsComp.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  name: "aboutView",
  //components: { infoIntro, MyServices, testiMonial, ClientsComp },
  components: { infoIntro, MyServices, testiMonial, ClientsComp },
  setup() {
    const route = useRoute();
    const currentRouteName = computed(() => route.name);
    return { currentRouteName };
  },
};
</script>
<style lang="scss">
* {
  widows: 800px;
}
.about {
  width: 900px;
}
@media (max-width: 768px) {
  .about {
    width: 768px;
  }
}
</style>
