<template>
  <current-route :currentRouteName="currentRouteName" />
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
<script setup>
import projectContent from "@/components/projectContent.vue";
import { ref, computed } from "vue";
import currentRoute from "@/components/currentRoute.vue";
import routeMixin from "@/Mixins/routeMixin";

const { currentRouteName } = routeMixin();

// Register the component

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
    justify-content: start;
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
@media (max-width: 580px) {
  .Portfolio {
    width: 580px;
    padding-bottom: 100px;
    .projects_cont {
      min-width: 580px;
    }
  }
}
</style>
