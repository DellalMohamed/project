<template>
  <div class="global_container">
    <side-bare />
    <div>
      <nav class="nav">
        <router-link to="/">about</router-link> |
        <router-link to="/resume">resume</router-link> |
        <router-link to="/portfolio">portfolio</router-link> |
        <router-link to="/blog">blog</router-link> |
        <router-link to="/contact">Contact</router-link>
      </nav>
      <router-view class="router_view" />
    </div>
  </div>
</template>
<script>
import sideBare from "./components/sideBare.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  components: {
    sideBare,
  },
  setup() {
    const route = useRoute();
    const currentRouteName = computed(() => route.name);
    return { currentRouteName };
  },
};
</script>
<style lang="scss">
//global style
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
.router_view {
  width: 863px;
  height: auto;
  padding: 30px;
}
.global_container {
  display: flex;
  justify-content: center;
  gap: 25px;
  max-width: 1200px;
  height: auto;
  margin: auto;
  background-color: #313131;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 21px 48px 21px 46px;
  margin: 0 0 0 335px;
  background-color: #2c3e50;
  width: 535px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-radius: 0 0 0 20px;
  z-index: 10;
  a {
    font-weight: bold;
    color: #c9d5e0;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@media (max-width: 768px) {
  .global_container {
    width: 100%;
    flex-direction: column;
    padding: 30px 30px 80px;
    .nav {
      position: fixed;
      bottom: 0;
      width: 768px;
      margin: 0;
      border-radius: 18px 18px 0 0;
    }
  }
}
</style>
