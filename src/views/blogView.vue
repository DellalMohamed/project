<template>
  <h1>Current Route: {{ currentRouteName }}</h1>
  <div class="blog">
    <blog-comp v-for="blog in blogsData" :key="blog" />
  </div>
</template>
<script>
import blogComp from "@/components/blogComp.vue";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
export default {
  components: { blogComp },
  setup() {
    const route = useRoute();
    const currentRouteName = computed(() => route.name);
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
    return { blogsData, currentRouteName };
  },
};
</script>
<style lang="scss">
.blog {
  width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}
@media (max-width: 768px) {
  .blog {
    width: 768px;
    padding: 30px 30px 80px;
  }
}
</style>
