<template>
  <article class="Portfolio">
    <nav class="portfolio_nav">
      <button @click="say(projectsData)">All</button>
      <button>Web design</button>
      <button>Applications</button>
      <button>Web development</button>
    </nav>
    <div class="projects_cont">
      <project-content
        v-for="project in projectsData.projects"
        :key="project"
        :project="project"
      />
    </div>
  </article>
</template>
<script>
import projectContent from "@/components/projectContent.vue";
import { ref } from "vue";
export default {
  components: { projectContent },
  setup() {
    function say(e) {
      //var ty = e.filter(e.project_category);
      let outPut = e.projects.filter(
        (el) => el.project_category === "Web development"
      );
      console.log(outPut);
    }
    const projectsData = ref({
      projects: [
        {
          link: "",
          project_img: "",
          project_title: "Finance",
          project_category: "Web development",
        },
        {
          link: "",
          project_img: "",
          project_title: "Orizon",
          project_category: "Web development",
        },
        {
          link: "",
          project_img: "",
          project_title: "Fundo",
          project_category: "Web design",
        },
        {
          link: "",
          project_img: "",
          project_title: "Brawlhalla",
          project_category: "Applications",
        },
        {
          link: "",
          project_img: "",
          project_title: "DSM",
          project_category: "Web design",
        },
        {
          link: "",
          project_img: "",
          project_title: "MetaSpark",
          project_category: "Web design",
        },
        {
          link: "",
          project_img: "",
          project_title: "Summary",
          project_category: "Web development",
        },
        {
          link: "",
          project_img: "",
          project_title: "Task Manager",
          project_category: "Applications",
        },
        {
          link: "",
          project_img: "",
          project_title: "Arrival",
          project_category: "Web development",
        },
      ],
    });

    return {
      projectsData,
      name,
      say,
    };
  },
};
</script>
<style lang="scss">
.Portfolio {
  width: auto;
  .portfolio_nav {
    margin-top: 30px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 25px;
    margin-bottom: 30px;
    button {
      font-family: "Poppins";
      font-size: 15px;
      color: #d6d6d6;
      text-decoration: none;
      border: none;
      background: none;
      cursor: pointer;
      &.active {
        color: #ffdb70;
      }
      &:hover {
        color: gray;
      }
    }
  }
  .projects_cont {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 31px;
  }
}
</style>
