<template>
  <h2>Clients</h2>
  <di class="clients_cont">
    <div class="img_cont">
      <img src="../assets/Item → Link → logo-1-color.png.svg" alt="" />
    </div>
    <div class="img_cont">
      <img src="../assets/Item → Link → logo-2-color.png.svg" alt="" />
    </div>
    <div class="img_cont">
      <img src="../assets/Item → Link → logo-3-color.png.svg" alt="" />
    </div>
    <div class="img_cont">
      <img src="../assets/Item → Link → logo-4-color.png.svg" alt="" />
    </div>
    <div class="img_cont">
      <img src="../assets/my-avatar.png.svg" alt="" />
    </div>
    <div class="img_cont">
      <img src="../assets/my-avatar.png.svg" alt="" />
    </div>
  </di>
</template>
<script>
export default {
  name: "clients-comp",
};
</script>
<style lang="scss">
h2 {
  font-family: "Poppins";
  font-size: 24px;
  margin-top: 20px;
  font-weight: bold;
  color: #fafafa;
}
.clients_cont {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 15px 17px;
  background-color: #383838;
  overflow-x: hidden;
  cursor: pointer;
}
@media (max-width: 768px) {
  .clients_cont {
    width: 708px;
    padding: 30px 60px;
    overflow-x: scroll;
    margin-bottom: 100px;
  }
}
@media (max-width: 580px) {
  .clients_cont {
    width: 520px;
    padding: 30px 35px;
    overflow-x: scroll;
    margin-bottom: 100px;
    .img_cont {
      width: 115px;
      height: 85px;
      img {
        width: 115px;
        height: 85px;
      }
    }
  }
}
</style>
