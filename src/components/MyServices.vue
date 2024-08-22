<template>
  <h1>What i'm doing</h1>
  <div class="services">
    <div class="service" v-for="service in services" :key="service">
      <img src="../assets/logo.png" alt="" />
      <div class="service_info">
        <h2>{{ service.service_name }}</h2>
        <p>
          The most modern and high-quality design made at a professional level.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "My-Sevices",
  setup() {
    const services = {
      service_1: {
        img: "@/assets/my-avatar.png.svg",
        service_name: "Web design",
        info: "The most modern and high-quality design made at a professional level.",
      },
      service_2: {
        img: "@/assets/my-avatar.png.svg",
        service_name: "Web jkjkjk",
        info: "The most modern and high-quality design made at a professional level.",
      },
      service_3: {
        img: "@/assets/my-avatar.png.svg",
        service_name: "jkjk design",
        info: "The most modern and high-quality design made at a professional level.",
      },
      service_4: {
        img: "@/assets/my-avatar.png.svg",
        service_name: "Web design",
        info: "The most modern and high-quality design made at a professional level.",
      },
    };
    return { services };
  },
};
</script>
<style lang="scss">
h1 {
  font-family: "Poppins";
  font-size: 24px;
  color: #fafafa;
  margin-bottom: 21px;
}
.services {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  gap: 20px 25px;
  width: 838px;
  height: 379px;
  margin-bottom: 21px;
  .service {
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 36px;
    width: 404px;
    height: 140px;
    background-color: #383838;
    padding: 30px;
    border-radius: 18px;
    img {
      width: 40pw;
      height: 40px;
      margin-right: 18px;
    }
    h2 {
      font-family: "Poppins";
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 8px;
      color: #fafafa;
    }
    p {
      font-family: "Poppins";
      font-size: 15px;
      line-height: 24px;
      color: #d6d6d6;
    }
  }
}
@media (max-width: 768px) {
  .services {
    max-width: 702px;
    height: auto;
    .service {
      width: 708px;
      height: 182px;
      padding: 30px;
      justify-content: start;
      img {
        width: 40px;
        height: 40px;
        background-color: #84be84;
      }
    }
  }
}
@media (max-width: 580px) {
  .services {
    max-width: 520px;
    height: auto;
    .service {
      height: 182px;
      padding: 30px;
      justify-content: start;
      img {
        width: 40px;
        height: 40px;
        background-color: #84be84;
      }
    }
  }
}
</style>
