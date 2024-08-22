<template>
  <h1 class="route_name">{{ props.currentRouteName }}</h1>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  currentRouteName: {
    type: String,
    required: true,
  },
});
</script>
<style lang="scss">
.route_name {
  margin: 0 0 17px 30px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  &::after {
    content: " ";
    width: 40px;
    height: 5px;
    border-radius: 3px;
    margin-bottom: 20px;
    background-color: teal;
    position: absolute;
    bottom: -42px;
  }
}
</style>
