<template>
  <h2>Testimonials</h2>
  <div class="testimonial_cont">
    <div
      class="testimonial"
      v-for="testimonial in testimonials"
      :key="testimonial"
    >
      <div class="img_cont">
        <img src="../assets/my-avatar.png.svg" alt="" />
      </div>
      <h2 class="testi_name">{{ testimonial.name }}</h2>
      <p>Testimonials</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "testi-monial",
  setup() {
    const testimonials = {
      testimonial1: {
        img: "",
        name: "jhj",
        info: "jhjkkkkkkkkkkkkkk",
      },
      testimonial2: {
        img: "",
        name: "jhj",
        info: "jhjkkkkkkkkkkkkkk",
      },
      testimonial3: {
        img: "",
        name: "jhj",
        info: "jhjkkkkkkkkkkkkkk",
      },
      testimonial4: {
        img: "",
        name: "jhj",
        info: "jhjkkkkkkkkkkkkkk",
      },
    };
    return { testimonials };
  },
};
</script>
<style lang="scss" scoped>
h2 {
  font-family: "Poppins";
  font-size: 24px;
  color: #fafafa;
  margin-bottom: 26px;
}
.testimonial_cont {
  width: 838px;
  display: flex;
  align-items: center;
  gap: 30px;
  overflow: hidden;
  .testimonial {
    min-width: 406px;
    background-color: #383838;
    padding: 25px 29px;
    border-radius: 14px;
    position: relative;
    margin-top: 30px;
    cursor: pointer;
    .img_cont {
      width: 80px;
      height: 80px;
      border-radius: 20px;
      background-image: linear-gradient(to right, #3f3f40, #303030);
      position: absolute;
      top: -30px;
      left: 10px;
      img {
        width: 80px;
        height: 80px;
      }
    }
    .testi_name {
      margin-left: 124px;
      font-weight: bold;
      font-size: 18px;
      color: #fafafa;
    }
  }
}
@media (max-width: 768px) {
  .testimonial_cont {
    max-width: 708px;
    overflow-x: scroll;
    .testimonial {
      min-width: 708px;
    }
  }
}
@media (max-width: 580px) {
  .testimonial_cont {
    max-width: 520px;
    overflow-x: scroll;
    .testimonial {
      min-width: 520px;
    }
  }
}
</style>
