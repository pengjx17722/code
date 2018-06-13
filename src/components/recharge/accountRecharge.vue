<template>
    <div style="padding-left:20px">
      <Form class="recharge" ref="formItem" :model="formItem" :rules="rules">
        <FormItem prop="sum" style="width:300px;margin-top: 10px;">
          <h4>充值金额</h4>
          <Input v-model="formItem.sum" placeholder="请输入需要充值的金额" clearable></Input>元
        </FormItem>
        <p>账户余额<span>0.01</span>元</p>
      </Form>
      <div class="pay">
        <h4>请选择付款方式</h4>
        <RadioGroup v-model="vertical" vertical class="method" style="width:200px;">
          <Radio label="alipay">
            <img src="../../assets/recharge/img_alipay.png" alt="">
          </Radio>
          <Radio label="wxpay">
            <img src="../../assets/recharge/img_wxpay.png" alt="">
          </Radio>
        </RadioGroup>
        <Button type="primary" @click="recharge">立即充值</Button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "accountRecharge",
        methods:{
          recharge(){
            console.log(1);
          }
        },
        data() {
            return {
              formItem:{
                sum:''
              },
              vertical:'alipay',
              rules:{
                sum:[
                  {required:true,message:'请输入充值金额',triggle:'blur'},
                  {type:'number',min:1,message:'格式不正确',transform(value){
                    return Number(value)
                    }}
                ]
              }
            }
        },
        components: {}
    }
</script>

<style scoped>
  .recharge {
    border-bottom: 2px solid #ddd;
  }
  .recharge h4{
    float: left;
    width: 60px;
    text-align: left;
  }
  .recharge  .ivu-input-wrapper{
    width: 200px;
  }

  .recharge p{
    margin-bottom: 20px;
    text-align: left;
    font-weight: bold;
  }
  .recharge p span{
    margin-left: 35px;
    color: red;
  }
  .pay{
    margin-top: 20px;
  }
  .pay h4{
    text-align: left;
  }
  .pay .method{
    display: block;
    height: 130px;
    margin-top: 7px;
    text-align: left;
  }
  .pay .method .ivu-radio-wrapper{
    height: 50px;
    margin-bottom: 15px;
    line-height: 50px;
  }
  .pay button{
    float: left;
    width: 180px;
    height: 35px;
    margin-left: 20px;
    font-size: 16px;
  }
</style>
