<template>
  <div class="blog">
    <blog-comp v-for="blog in blogsData" :key="blog" />
  </div>
</template>
<script>
import blogComp from "@/components/blogComp.vue";
import { ref } from "vue";
export default {
  components: { blogComp },
  setup() {
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
    return { blogsData };
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
</style>
