<template>
    <div>
      <!--<Form class="recharge" ref="formItem" :model="formItem" :rules="rules">-->
      <Form class="form">
        <FormItem prop="sum" style="width:500px;">
          <h4 style="text-align: left;">充值号码</h4>
          <Input  placeholder=" MSISDN、ICCID、IMSI" clearable style="width:260px;margin-left: 15px"></Input>
          <span >该物联卡号不存在。</span>
        </FormItem>
        <p>温馨提示：尊敬的客户您好！每月最后3天是系统结账时间，无法提供充值服务，为了不影响您的正常使用，请提前进行充值，谢谢！</p>
      </Form>
      <div class="menu" >
        <h5>充值套餐</h5>
        <div>
          <RadioGroup v-model="button" type="button">
            <Radio label="0.600元1个月"></Radio>
            <Radio label="上海"></Radio>
            <Radio label="深圳"></Radio>
            <Radio label="杭州"></Radio>
          </RadioGroup>
        </div>
      </div>
      <div class="pay" style="text-align: left;">
        <h4>请选择付款方式</h4>
        <RadioGroup v-model="vertical"  class="method">
          <Radio label="alipay">
            <img src="../../assets/recharge/img_alipay.png" alt="">
          </Radio>
          <Radio label="wxpay">
            <img src="../../assets/recharge/img_wxpay.png" alt="">
          </Radio>
          <Radio label="balance">
            <img src="../../assets/recharge/img_balancepay.png" alt="">
          </Radio>
        </RadioGroup>
        <Button type="primary" @click="recharge">立即充值</Button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "cardnumbereReccharge",
        methods:{
          recharge(){
            console.log(1);
          }
        },
        data() {
            return {
              vertical:'alipay',
              button:''
            }
        },
        components: {}
    }
</script>

<style scoped>
  .form{
   padding-bottom:30px;
    border-bottom: 2px solid #ddd;
  }
  .form p{
    margin-top:-15px;
    color:#ff5e16;
    text-align: left;
    text-indent: 30px;
    font-weight: bold;
  }
  .form span{
    font-size: 16px;
    color: rgb(51, 51, 51);
    padding-left: 30px;
  }
  .menu{
    margin-top:10px;
    padding-bottom:30px;
    border-bottom: 2px solid #ddd;
    text-align: left;
  }
  .menu label{
    margin:5px 20px;
  }
  .pay h4{
    margin:20px 0 10px;
  }
  .pay button{
    display:block;
    width: 180px;
    height: 35px;
    margin: 15px 0 0 20px;
    font-size: 16px;
  }
</style>
