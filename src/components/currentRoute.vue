<template>
  <h1>{{ props.currentRouteName }}</h1>
  <div class="yell_line">jkj</div>
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
h1 {
  margin-bottom: 17px;
}
.yell_line {
  width: 40px;
  height: 5px;
  border-radius: 3px;
  margin-bottom: 20px;
  background-image: linear-gradient(to right, #ffdb70, #ffbb5c);
}
</style>
