<template>
  <div class="layout" id="headwrap">
    <Menu class="header" mode="horizontal" theme="primary"  @on-select="choose"  active-name="1">
      <div class="logo" ></div>
      <div class="t0line"></div>
      <h3>深圳益邦阳光有限公司</h3>
      <div class="layout-nav" >
        <Menu-item key="1"  name="1">
          <Icon type="ios-home-outline" size="24"></Icon>
          <span>首页</span>
        </Menu-item>
        <Menu-item key="2" name="2">
          <Icon type="ios-search-strong" size="24"></Icon>
          <span>号码查询</span>
        </Menu-item>
        <Menu-item key="3" name="3">
          <Icon type="android-notifications-none" size="24"></Icon>
          <span>系统公告</span>
        </Menu-item>
        <Menu-item key="4" name="4">
          <Icon type="ios-download" size="24"></Icon>
          <span>文件下载</span>
        </Menu-item>
        <MenuItem name="5">
          <Icon type="ios-help" size="24"></Icon>
          <span>支持与帮助</span>
        </MenuItem>
        <MenuItem name="6" >
          <Icon type="ios-person-outline" size="24"></Icon>
          <span>益邦阳光...</span>
        </MenuItem>
        <MenuItem name="7">
          <Icon type="log-out" size="24"></Icon>
         <span>退出</span>
        </MenuItem>
      </div>
    </Menu>
  </div>
</template>

<script>
    export default {
      name: "home",
      data(){
        return{
        }
      },
      components:{
      },
      methods:{
        choose(name){
          if(name === "1"){
            this.$router.push({path: '/home'});
          }else if(name === "2") {
            this.$router.push({path: '/checkNumber'})
          }else if(name === "3"){
            this.$router.push({path: '/notice'})
          }else if(name === "4"){
           this.$router.push({ path: '/download'})
          }else if(name === "5"){
           this.$router.push({ path: '/help'});
          }else if(name === "6"){
            this.$router.push({ path: '/psd'});
          }else if(name === "7"){
            this.$router.push({ path: '/login'});
          }
        }
      }
    }
</script>
<style scoped>
  #headwrap{
    background: #5384EE ;
  }
  #headwrap .header{
    height: 60px;
    line-height: 60px;
    color:white
  }
  #headwrap .logo{
    float: left;
    width: 175px;
    height: 60px;
    line-height: 60px;
    /*background:url("../../assets/header/logobai.png") no-repeat center center;*/
  }
  #headwrap .t0line{
    float: left;
    height: 60px;
    display: inline-block;
    width: 165px;
    background: url("../../assets/header/qylogo.png") no-repeat 6px center;
  }
  h3{
    float: left;
    height: 60px;
    line-height: 60px;
    color: #fff;
    font-size: 18px;
    font-weight: normal;
  }
  #headwrap .layout-nav{
    position: absolute;
    right: 0;
    top: 0;
    width: 550px;
    height: 100%;
    color: white;
  }
  #headwrap .layout-nav li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding:0 15px;
    font-size: 12px;
    color:#fff
  }
  #headwrap .layout-nav li i{
    margin-top: 20px;
    margin-right: 4px;
  }
  #headwrap .layout-nav li span{
    margin-top: -15px;
  }
</style>
