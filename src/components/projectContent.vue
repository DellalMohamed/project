<template>
  <div class="project_cont">
    <a href="">
      <figure>
        <div class="icon_box">
          <f_icon :icon="['far', 'eye']" class="icon" />
        </div>
        <div class="img_cont">
          <img class="proj_img" src="../assets/project-1.jpg" alt="" />
        </div>
      </figure>
    </a>
    <div class="proj_name_category">
      <h3>{{ props.project.project_title }}</h3>
      <p>{{ props.project.project_category }}</p>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  name: String,
  project: String,
});
</script>

<style lang="scss">
.project_cont {
  background-color: #313131;
  width: 259px;
  box-shadow: 0px 0px 3px 1px gray;
  border-radius: 12px;
  &:hover .icon_box {
    transform: scale(1.2);
    transition: 0.2s;
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
      transform: scale(0);
      .icon {
        color: #ffdb70;
        transform: translate(0px, 13px);
        z-index: 3;
      }
    }
    .img_cont {
      width: 259px;
      height: 194px;
      background-color: #313131;
      border-radius: 16px;
      overflow: hidden;
      margin-bottom: 15px;
      .proj_img {
        width: 100%;
      }
    }
  }
  .proj_name_category {
    margin-left: 10px;
    h3 {
      color: #fafafa;
      font-size: 15px;
      line-height: 20px;
    }
  }
}
@media (max-width: 768px) {
  .project_cont {
    width: 338px;
    a {
      figure {
        .img_cont {
          width: 338px;
          .proj_img {
            width: 338px;
          }
        }
      }
    }
  }
}
</style>
