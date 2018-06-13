<template>
    <!--<div>号码申请</div>-->
    <Form ref="formItem" :model="formItem" :rules="rules" :label-width="75" class="numApp">
      <p>
        <span style="font-weight: bold">申请人</span>
        <span >深圳益邦阳光有限公司</span>
      </p>
      <FormItem label="使用区域" prop="area" style="font-weight:bold">
        <Input v-model="formItem.area" placeholder="" clearable></Input>
      </FormItem>
      <FormItem label="型号" prop="Model" style="font-weight: bold">
        <Select v-model="formItem.Model" prop="Model">
          <Option value="MP2 Nano SIM">MP2 Nano SIM</Option>
          <Option value="MP2 Micro SIM">MP2 Micro SIM</Option>
          <Option value="MP2 Mini SIM">MP2 Mini SIM</Option>
        </Select>
      </FormItem>
      <FormItem label="套餐" prop="SetMenu" style="font-weight: bold">
        <Select v-model="formItem.SetMenu">
          <Option value="3元10M流量">3元10M流量</Option>
          <Option value="10元70M流量">10元70M流量</Option>
          <Option value="20元150M流量">20元150M流量</Option>
        </Select>
      </FormItem>
      <FormItem label="申请数量(张)" prop="number" style="font-weight: bold">
        <Input v-model="formItem.number" placeholder="" clearable ></Input>
      </FormItem>
      <FormItem label="备注" prop="textarea" style="font-weight: bold">
        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="" clearable></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="submit('formItem')">提交订单</Button>
        <Button type="ghost" style="margin-left: 8px" @click="cancle('formItem')">取消</Button>
      </FormItem>
    </Form>
</template>

<script>
    export default {
        name: "numberapplication",
        data() {
            return {
              formItem: {
                area: '',
                Model: '',
                SetMenu:'',
                number:'',
                textarea: ''
              },
              rules:{
                area: [
                  { required: true, message: '请填写使用地区', trigger: 'blur' }
                ],
                Model: [
                  { required: true, message: '请选择型号', trigger: 'change' }
                  ],
                SetMenu:[
                  { required: true, message: '请选择套餐', trigger: 'change' }
                  ],
                number:[
                  { required: true, message: '请输入购买数量', trigger: 'blur' },
                  {type:'number',min:1,message: '请输入需要购买的数量',transform(value) {
                      return Number(value);
                    }}
                ]
              }
            }
        },
      methods:{
        submit(name){
          //提交订单
          this.$refs[name].validate((valid) => {
            if (valid) {
              this.$Message.success('提交成功!');
            } else {
              this.$Message.error('信息填写错误!');
            }
          })
        },
        cancle(name){
          //取消
          this.$refs[name].resetFields();
        }
      },
        components: {}
    }
</script>

<style scoped>
  .numApp{
    width:300px;
    margin: 0 auto;
  }
  .numApp p{
    height: 32px;
    text-align: left;
  }
  .numApp p span:nth-of-type(1){
    margin:0 20px;
  }
</style>
