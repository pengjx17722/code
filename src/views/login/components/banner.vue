<template>
  <Carousel v-model="value" class="h100" arrow="never">
    <Carousel-item>
      <div class="demo-carousel h100">
        <div class="summary">
          <h4>平台介绍</h4>
          <p>广东物联云平台是面向广东物联网集团客户，提供对物联卡的资产管理、资费计划、账务缴费和安全管理服务的连接管理云平台。集团客户
            可通过网页访问直接使用平台，也可通过平台开放的API接口与企业应用进行对接集成。</p>
          <a href="#">点击查看详情</a>
        </div>
        <p><img src="../../../assets/login/homesli1.jpg" alt=""  ></p>
      </div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel h100 ">
        <p><img src="../../../assets/login/homesli2.jpg" alt=""  ></p>
      </div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel h100 ">
        <p><img src="../../../assets/login/homesli3.jpg" alt=""  ></p>
      </div>
    </Carousel-item>
  </Carousel>
</template>

<script>
  export default {
    name: "banner",
    data() {
      return {
        value:0
      };
    },
    components: {}
  };
</script>

<style scoped>
  img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .summary{
    position: absolute;
    left: 2.5%;
    top: 180px;
    z-index: 6;
    width: 400px;
    line-height: 36px;
    color: #fff;
  }
  .summary h4{
    line-height: 64px;
    font-size: 40px;
    text-align: left;
  }
  .summary p{
    margin-top: 30px;
    font-size: 15px;
    text-align: left;
  }
  .summary a{
    float: left;
    margin-top: 30px;
    border: 1px solid #7caed9;
    color: #7caed9!important;
    font-size: 16px;
    background-color: transparent;
    line-height: 23px;
    padding: 5px 9px;
  }
  .summary a:hover{
    text-align: left;
    color: #fff !important;
    background-color: #33a7d8;
  }
</style>
