<template>
  <h1>Current Route: {{ currentRouteName }}</h1>
  <article class="Portfolio">
    <nav class="portfolio_nav">
      <button @click="filterProjects('All')">All</button>
      <button @click="filterProjects('Web design')">Web design</button>
      <button @click="filterProjects('Applications')">Applications</button>
      <button @click="filterProjects('Web development')">
        Web development
      </button>
    </nav>
    <div class="projects_cont">
      <project-content
        v-for="project in filteredProjects"
        :key="project.project_title"
        :project="project"
      />
    </div>
  </article>
</template>
<script>
import projectContent from "@/components/projectContent.vue";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
export default {
  components: { projectContent },
  setup() {
    /*function say(e) {
      let outPut = e.projects.filter(
        (el) => el.project_category === "Web development"
      );
      console.log(outPut);
    }*/
    const route = useRoute();
    const currentRouteName = computed(() => route.name);
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
    const selectedCategory = ref("All");

    const filteredProjects = computed(() => {
      if (selectedCategory.value === "All") {
        return projectsData.value.projects;
      }
      return projectsData.value.projects.filter(
        (project) => project.project_category === selectedCategory.value
      );
    });
    function filterProjects(category) {
      selectedCategory.value = category;
    }

    return {
      projectsData,
      filteredProjects,
      filterProjects,
      currentRouteName,
      //say,
    };
  },
};
</script>
<style lang="scss">
.Portfolio {
  width: auto;
  padding: 30px;
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
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 31px;
  }
}
@media (max-width: 768px) {
  .Portfolio {
    width: 768px;
  }
}
</style>
