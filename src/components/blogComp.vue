<template>
  <div class="blog_template">
    <div>
      <div class="img_cont">
        <img src="../assets/project-1.jpg" alt="" />
      </div>
      <div class="blog_info">
        <div class="blog_meta">
          <p class="blog_category"></p>
          <span></span>
          <time class="date_time" datetime="2022-02-23">Fab 23, 2022</time>
        </div>
        <h3 class="blog_title">Design conferences in 2022</h3>
        <p class="blog_text">
          Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.blog_template {
  width: 402px;
  display: inline;
  box-shadow: 0 0 4px gray;
  border-radius: 12px;
  .img_cont {
    border-radius: 16px;
    margin-bottom: 26px;
    box-shadow: 0 0 4px gray;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .blog_info {
    padding: 0 25px 24px;
    .blog_meta {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 7px;
      margin-bottom: 10px;
      .blog_category {
        margin: 0;
        font-family: "Poppins";
        font-size: 14px;
        color: #d6d6d6;
      }
      span {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #d6d6d6;
        margin: 0;
        font-family: "Poppins";
        font-size: 14px;
        color: #d6d6d6;
      }
      .date_time {
        font-family: "Poppins";
        font-size: 14px;
        color: #d6d6d6;
      }
    }
    .blog_title {
      font-family: "Popins";
      font-size: 24px;
      line-height: 31px;
      color: #fafafa;
      margin-bottom: 11px;
    }
    .blog_text {
      font-family: "Poppins";
      font-size: 15px;
      line-height: 24px;
      color: #d6d6d6;
    }
  }
}
@media (max-width: 768px) {
  .blog_template {
    width: 339px;
  }
}
@media (max-width: 580px) {
  .blog_template {
    width: 520px;
  }
}
</style>
