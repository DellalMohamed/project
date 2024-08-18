<template>
  <div class="project_cont">
    <a href="">
      <figure>
        <div class="icon_box">
          <f_icon :icon="['far', 'eye']" style="color: red" />
        </div>
        <div class="img_cont">
          <img src="../assets/project-1.jpg" alt="" />
        </div>
      </figure>
    </a>
    <div class="proj_name_category">
      <h3>Finance</h3>
      <p>Web development</p>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  project: String,
});
console.log(props.project);
</script>

<style lang="scss">
.project_cont {
  background-color: #313131;
  width: 259px;
  box-shadow: 0px 0px 3px 1px gray;
  border-radius: 12px;
  &:hover .icon_box {
    display: block;
  }
  figure {
    position: relative;
    .icon_box {
      position: absolute;
      width: 45px;
      height: 45px;
      border-radius: 12px;
      background-color: #383838;
      top: calc(50% - 22px);
      left: calc(50% - 27px);
      text-align: center;
      display: none;
    }
    .img_cont {
      width: 259px;
      height: 194px;
      background-color: #313131;
      border-radius: 16px;
      overflow: hidden;
      margin-bottom: 15px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
