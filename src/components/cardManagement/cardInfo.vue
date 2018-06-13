<template>
  <!--<div class="content pos-r" style="background: #fff;">-->
    <!--<p class="title">号码查询 <a href="#" @click="cancle"></a></p>-->
    <!--<Tabs value="name1" style="padding: 15px;">-->
      <!--<TabPane label="综合信息" name="name1">-->
        <!--<cardInfo :formdata.sync="params"></cardInfo>-->
      <!--</TabPane>-->
      <!--<TabPane label="流量详情" name="name2">标签二的内容</TabPane>-->
    <!--</Tabs>-->
  <!--</div>-->
  <div class=" w100 h100 pos-a" style="top:10px;background: rgba(0,0,0,.6);z-index: 2" >
      <div class="content pos-r" style="background: #fff;">
          <p class="title" style="text-align: center">号码查询 <a href="#" @click="cancle"></a></p>
          <Tabs value="name1" style="padding: 15px;">
              <TabPane label="综合信息" name="name1">
                <div style="max-height: 1200px">
                  <div class="info">
                    <p class="title" @click="check">卡号信息</p>
                    <ul class="mar-t10">
                      <li>
                        <p>所属客户&nbsp;:</p>
                        <span>深圳益邦阳光有限公司</span>
                      </li>
                      <li>
                        <p>客户编号&nbsp;:</p>
                        <span>{{formdata.address}}</span>
                      </li>
                      <li>
                        <p>卡号&nbsp;:</p>
                        <span>{{formdata.age}}</span>
                      </li>
                      <li>
                        <p>生命周期&nbsp;:</p>
                        <span>测试期</span>
                      </li>
                      <li>
                        <p>终端状态&nbsp;:</p>
                        <span>{{formdata.name}}</span>
                      </li>
                      <li>
                        <p>ICCID&nbsp;:</p>
                        <span>{{formdata.endDate}}</span>
                      </li>
                      <li>
                        <p>IMEI&nbsp;:</p>
                        <span >{{formdata.age}}</span>
                      </li>
                      <li>
                        <p>IMSI&nbsp;:</p>
                        <span>{{formdata.age}}</span>
                      </li>
                      <li class="pos-r">
                        <p>开户时间&nbsp;:</p>
                        <span>{{formdata.date}}</span>
                      </li>
                      <li class="pos-r">
                        <p>激活时间&nbsp;:</p>
                        <span class="time">{{formdata.endDate}}</span>
                      </li>
                      <li class="fl">
                        <p>归属地&nbsp;:</p>
                        <span>深圳市</span>
                      </li>
                    </ul>
                  </div>
                  <div class="state">
                    <p class="title">功能状态</p>
                    <p style="text-align: left;margin-top: 10px;text-indent: 20px">gprs功能: 开启<span>(通用CMIOT:开)</span></p>
                  </div>
                  <div class="menu">
                    <p class="title">资费计划</p>
                    <p style="margin-top: 15px;text-align: left;text-indent: 20px;">可用余额：<span>0.0</span>元</p>
                    <Table height="70"  :columns="columns"  border size="small" class="mar-t10"></Table>
                  </div>
                  <div class="menu">
                    <p class="title">用量套餐</p>
                    <Table height="70"  :columns="columns1"  border size="small" class="mar-t10"></Table>
                  </div>
                </div>
              </TabPane>
              <TabPane label="流量详情" name="name2">标签二的内容</TabPane>
          </Tabs>
      </div>
  </div>
</template>

<script>
    export default {
        name: "cardInfo",
        props:['formdata',],
        data() {
            return {
                columns:[
                  {title:'资费类型',width:100,align:'center',key:'age'},
                  {title:'本月总套餐资源',width:140,align:'center',key:'age'},
                  {title:'本月已用资源',width:130,align:'center',key:'date'},
                  {title:'本月剩余套餐内资源',align:'center',key:'address'},
                  {title:'本月套餐外使用资源',align:'center',key:'endData'}
                ],
                columns1:[
                  {title:'序号',width:70,align:'center',key:'name'},
                  {title:'套餐名称',width:120,align:'center',key:'age'},
                  {title:'套餐内免费资源（MB）',width:170,align:'center',key:'date'},
                  {title:'已用资源（MB）',width:90,align:'center',key:'address'},
                  {title:'剩余资源（MB）',width:90,align:'center',key:'endData'},
                  {title:'套餐生效时间',align:'center'},
                  {title:'套餐失效时间',align:'center'}
                ],
            }
        },
        methods:{
            cancle(){
              this.$emit('flags')
            },
            check(){
              console.log(this.formdata);
            }
        },
        components: {}
    }
</script>

<style scoped>
  .content{
    width: 800px;
    max-height: 1200px;
    left: 450px;
    top: 40px;
    border-radius: 5px;
    box-shadow: 0 3px 26px rgba(0, 0, 0, .9);
    z-index: 10;
  }
  .content p.title{
    height: 34px;
    line-height: 34px;
    border-bottom: 2px solid #BBD0FE;
  }
  .content p.title a{
    position: absolute;
    top: -18px;
    right: -18px;
    width: 36px;
    height: 36px;
    cursor: pointer;
    z-index: 999;
    background-image: url('../../assets/fancybox_sprite.png');
  }
  .info{
     min-height: 180px;
   }
  .title{
    height: 37px;
    line-height: 37px;
    text-align: left;
    font-size: 16px;
    border-bottom: 1px solid #eee;
  }
   .info ul li{
     float: left;
     width: 33%;
     height: 30px;
     padding: 2px;
  }
   .info ul li p{
     float: left;
     width: 8em;

     text-align: right;
   }
   .info .time{
    position: absolute;
    left: 10em;
  }
</style>
