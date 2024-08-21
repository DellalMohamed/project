<template>
  <current-route :currentRouteName="currentRouteName" />
  <div class="blog">
    <blog-comp v-for="blog in blogsData" :key="blog" />
  </div>
</template>
<script setup>
import blogComp from "@/components/blogComp.vue";
import { ref } from "vue";
import currentRoute from "@/components/currentRoute.vue";
import routeMixin from "@/Mixins/routeMixin";

const { currentRouteName } = routeMixin();
const blogsData = ref({
  blog_1: {
    img: "",
    blogCategory: "az",
    dateTime: "2024-02-28",
    blogTitle: "kjkjkjkj",
    blogText: "kjfkjdfkjdkfjkdjfkdjfkjkj",
  },
  blog_2: {
    img: "",
    blogCategory: "er",
    dateTime: "2024-02-28",
    blogTitle: "kjkjkjkj",
    blogText: "kjfkjdfkjdkfjkdjfkdjfkjkj",
  },
  blog_3: {
    img: "",
    blogCategory: "ty",
    dateTime: "2024-02-28",
    blogTitle: "kjkjkjkj",
    blogText: "kjfkjdfkjdkfjkdjfkdjfkjkj",
  },
  blog_4: {
    img: "",
    blogCategory: "lkflkll",
    dateTime: "2024-02-28",
    blogTitle: "kjkjkjkj",
    blogText: "kjfkjdfkjdkfjkdjfkdjfkjkj",
  },
  blog_5: {
    img: "",
    blogCategory: "csdc",
    dateTime: "2024-02-28",
    blogTitle: "kjkjkjkj",
    blogText: "kjfkjdfkjdkfjkdjfkdjfkjkj",
  },
  blog_6: {
    img: "",
    blogCategory: "lkfdscsdlkll",
    dateTime: "2024-02-28",
    blogTitle: "kjkjkjkj",
    blogText: "kjfkjdfkjdkfjkdjfkdjfkjkj",
  },
});
</script>
<style lang="scss">
.blog {
  width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 30px;
}
@media (max-width: 768px) {
  .blog {
    width: 768px;
    padding: 30px 30px 80px;
  }
}
@media (max-width: 580px) {
  .blog {
    width: 580px;
    padding: 30px 30px 80px;
  }
}
</style>
