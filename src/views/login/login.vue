<template>
  <div class="h100">
    <div class="layout h100 posR">
      <div class="loginPartner">
        <div class="loginPartner-main">
          <a href="http://gd.10086.cn/service/" target="_blank">网上营业厅</a>
          <a href="http://gd.10086.cn/10086/map/sitemap.shtml" target="_blank">站点导航</a>
          <a href="http://www.10086.cn/index/gd/index_200_755.html" target="_blank">中国移动</a>
        </div>
      </div>
      <div class="loginHeader">
        <div class="logo"></div>
        <div class="loginNav">
          <a href="#">登录</a>
          <a href="#">平台介绍</a>
          <a href="#">物联网通道产品</a>
          <a href="#">物联网终端产品</a>
        </div>
      </div>
      <div class="h100 w100 loginHome " >
        <banner></banner>
      </div>
      <div class="login">
        <loginform></loginform>
      </div>
    </div>
  </div>
</template>
<script>
import banner from './components/banner'
import loginform from './components/loginform'
export default {
    name: 'login',
    components:{
    banner,loginform
  },
    data () {
            return {}
        },
}
</script>
<style lang="scss" scoped>
  .loginPartner {
    position: absolute;
    top: 0;
    right: 45px;
    padding: 10px 0;
    overflow: hidden;
    font-size: 14px;
    z-index: 999;
  }
  .loginPartner a{
    margin-left: 15px;
    color: #fff;
  }
  .loginHeader{
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: rgba(255,255,255,.1);
    z-index: 999;
  }
  .loginHeader .logo{
    width: 360px;
    margin-left: 45px;
    height: 100%;
    background: url("../../assets/login/logotop.png") no-repeat center center;
}
  .loginHeader .loginNav{
    position: absolute;
    top: 0;
    right: 35px;
    width: 450px;
  }
  .loginHeader .loginNav a{
    margin-left: 25px;
    font-size: 16px;
    color: #fff;
  }
  .layout a:hover{
    color: #FFFF00;
  }
  .loginHome{
    position: absolute;
    top: 0;
    left: 0;
  }
  .login{
    position: absolute;
    top: 50%;
    right: 240px;
    margin-top: -170px;
    width: 280px;
    height: 340px;
    background: rgba(255,255,255,0.6);
    border-radius: 10px;
  }
</style>
