<template>
  <div class="sidebarWrap fl">
    <Menu  class="Lsidebar" @on-select="routeTo" accordion :open-names="['2']" active-name="2-1">
      <!--<div class="homeBtn">-->
        <!--<Icon type="home" size="20"></Icon>-->
        <!--<router-link :to="/ove" class="btn" >首页</router-link>-->
      <!--</div>-->
      <Submenu key="1" name="1">
        <template slot="title">
          <Icon type="pricetags" size="18"></Icon>
          业务办理
        </template>
        <Menu-item key="1-1" name="1-1">业务办理</Menu-item>
        <!--<Menu-item key="1-2" name="1-2">异常处理</Menu-item>-->
      </Submenu>
      <Submenu key="2" name="2">
        <template slot="title">
          <Icon type="social-yen" size="18"></Icon>
          资产管理
        </template>
        <Menu-item key="2-1" name="2-1">卡号管理</Menu-item>
        <Menu-item key="2-2" name="2-2">状态管理</Menu-item>
      </Submenu>
      <Submenu key="3" name="3">
        <template slot="title">
          <Icon type="ios-cart" size="18"></Icon>
          充值缴费
        </template>
        <Menu-item key="3-1" name="3-1">充值缴费</Menu-item>
        <Menu-item key="3-2" name="3-2">充值查询</Menu-item>
        <Menu-item key="3-3" name="3-3">充值统计</Menu-item>
      </Submenu>
      <Submenu key="4" name="4">
        <template slot="title">
          <Icon type="arrow-graph-up-right" size="18"></Icon>
          流量管理
        </template>
        <Menu-item key="4-1" name="4-1">信息查询</Menu-item>
        <Menu-item key="4-2" name="4-2">告警设置</Menu-item>
        <Menu-item key="4-3" name="4-3">告警查询</Menu-item>
      </Submenu>
      <Submenu key="5" name="5">
        <template slot="title">
          <Icon type="calendar" size="18"></Icon>
          套餐管理
        </template>
        <Menu-item key="5-1" name="5-1">套餐查询</Menu-item>
        <Menu-item key="5-2" name="5-2">套餐申请</Menu-item>
        <Menu-item key="5-3" name="5-3">套餐审核</Menu-item>
        <Menu-item key="5-4" name="5-4">套餐发布</Menu-item>
        <Menu-item key="5-5" name="5-5">套餐设置</Menu-item>
      </Submenu>
      <!--<Submenu key="6" name="6">-->
        <!--<template slot="title">-->
          <!--<Icon type="chatboxes" size="18"></Icon>-->
          <!--账单管理-->
        <!--</template>-->
        <!--<Menu-item key="6-1" name="6-1">月度账单</Menu-item>-->
        <!--<Menu-item key="6-2" name="6-2">月度预警</Menu-item>-->
        <!--<Menu-item key="6-3" name="6-3">月度告警</Menu-item>-->
      <!--</Submenu>-->
      <Submenu key="7" name="7">
        <template slot="title">
          <Icon type="ios-people" size="18"></Icon>
          商户管理
        </template>
        <Menu-item key="7-2" name="7-1">商户查询</Menu-item>
        <Menu-item key="7-3" name="7-2">账号管理</Menu-item>
      </Submenu>
      <!--<Submenu key="8" name="8">-->
        <!--<template slot="title">-->
          <!--<Icon type="location" size="18"></Icon>-->
          <!--位置服务-->
        <!--</template>-->
        <!--<Menu-item key="8-1" name="8-1">基本定位</Menu-item>-->
        <!--<Menu-item key="8-2" name="8-2">准确定位</Menu-item>-->
      <!--</Submenu>-->
      <!--<Submenu key="9" name="9">-->
        <!--<template slot="title">-->
          <!--<Icon type="ios-gear" size="18"></Icon>-->
          <!--短信网关-->
        <!--</template>-->
        <!--<Menu-item key="9-1" name="9-1">系统=>通讯卡</Menu-item>-->
        <!--<Menu-item key="9-2" name="9-2">通讯卡=>系统</Menu-item>-->
      <!--</Submenu>-->
    </Menu>
  </div>
</template>

<script>
    export default {
        name: "Lside",
        methods:{
          routeTo(name){
            //跳转
            if(name === "1-1"){
              this.$router.push({path:'/home/business'})
            }else if(name ===  "2-1"){
              this.$router.push({path:'/home/cardManagement'})
            }else if(name ===  "3-1"){
              this.$router.push({path:'/home/recharge'})
            }else if(name ===  "3-2"){
              this.$router.push({path:'/home/checkRecharge'})
            }else if(name ===  "4-1"){
              this.$router.push({path:'/home/checkflow'})
            }else if(name ===  "7-1"){
              this.$router.push({path:'/home/checkSupplier'})
            }else if(name === "7-2"){

           }
          },
        },
        data(){
          return {
          }
        },
      components:{ }
    }
</script>

<style scoped>
  .sidebarWrap{
    border: 1px solid #ddd;
    border-right: none;
  }
  .Lsidebar{
    width: 178px !important;
  }
  div.ivu-menu-submenu-title{
    padding: 14px 8px !important;
  }
  .ivu-menu-opened>*>.ivu-menu-submenu-title-icon {
    transform: rotate(0deg);
  }
  .ivu-menu-submenu-title-icon{
    transform: rotate(-90deg);
  }
  .ivu-menu{
    font-weight: bold;
  }
  .ivu-menu-item{
    font-size: 12px;
    font-weight: normal;
  }
  .homeBtn{
    margin-left: 20px;
    height: 49px;
    line-height: 49px;
  }
  .homeBtn .btn{
    margin-left: 8px;
    margin-right: 5px;
    letter-spacing: 30px;
    color: #000;
  }
</style>
