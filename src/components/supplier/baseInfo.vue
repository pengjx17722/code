<template>
  <div class="wrap" v-show="flag">
    <div class="info">
      <h2>新增经销商 <span class="fr" style="margin-right: 15px;cursor: pointer;" @click="cancle" >X</span></h2>
      <Form class="infocontent"  ref="formItem"  :model="formItem" :rules="rules">
        <Row class="addinfo">
          <Col span="12" class="users">
            <FormItem prop="users" >
              <p class="fl">用户名</p>
              <Input v-model="formItem.users" placeholder="请输入用户名" clearable />
            </FormItem>
          </Col>
          <Col span="12" class="password">
            <FormItem prop="password" >
              <p class="fl">密码</p>
              <Input v-model="formItem.password" placeholder="请输入密码" clearable />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="20" class="customer">
            <FormItem prop="customer" >
              <p class="fl">集团客户名称</p>
              <Input v-model="formItem.customer " placeholder="请输入客户名称" clearable />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12" class="shortname">
            <FormItem >
              <p class="fl">集团简称</p>
              <Input v-model="formItem.shortname" placeholder="请输入客户简称" clearable />
            </FormItem>
          </Col>
          <Col span="12" class="contacts">
            <FormItem prop="contacts">
              <p class="fl">联系人</p>
              <Input v-model="formItem.contacts" placeholder="请输入联系人名字" clearable />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12" class="contactnumber">
            <FormItem prop="contactnumber">
              <p class="fl">电话</p>
              <Input v-model="formItem.contactnumber" placeholder="请输入座机号码 " clearable />
            </FormItem>
          </Col>
          <Col span="12" class="cellphonenumber">
            <FormItem prop="cellphonenumber">
              <p class="fl">手机</p>
              <Input v-model="formItem.cellphonenumber" placeholder="请输入手机号码" clearable />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12" class="zipcode">
            <FormItem prop="zipcode">
              <p class="fl">邮编</p>
              <Input v-model="formItem.zipcode" placeholder="请输入邮政编码 " clearable />
            </FormItem>
          </Col>
          <Col span="12" class="mail">
            <FormItem prop="mail">
              <p class="fl">邮箱</p>
              <Input v-model="formItem.mail" placeholder="请输入邮箱地址" clearable />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="20" class="address">
            <FormItem prop="address">
              <p class="fl">详细地址</p>
              <Input v-model="formItem.address" placeholder="请输入详细地址" clearable />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="20" class="creditcode">
            <FormItem prop="creditcode">
              <p class="fl">信用代码</p>
              <Input v-model="formItem.creditcode" placeholder="请输入信用代码" clearable />
            </FormItem>
          </Col>
        </Row>
      </Form>
      <Button type="primary" @click="commit('formItem')">保存</Button>
      <Button type="ghost" style="margin-left: 8px" @click="reset('formItem')">重置</Button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "baseInfo",
    data() {
      return {
        value:"",
        formItem:{
          users:"",
          password:"",
          customer:"",
          contacts:"",
          shortname:"",
          contactnumber:"",
          cellphonenumber:"",
          zipcode:"",
          mail:"",
          address:"",
          creditcode:""
        },
        rules:{
          users: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ],
          customer: [
            { required: true, message: '名称不能为空', trigger: 'blur' }
          ],
          contacts:[
            { required: true, message: '联系人不能为空', trigger: 'blur' },
          ],
          contactnumber:[
            {type:'string',min:7,message: '请输入正确的座机号'}
          ],
          zipcode:[
            {type:'string',min:6,max:6,message: '请输入正确的邮编'}
          ],
          cellphonenumber:[
            { required: true, message: '手机号码不能为空', trigger: 'blur' },
            {type:'string',min:11,max:11,message: '请输入正确的手机号'}
          ],
          addressseclect:[
            { required: true, message: '请选择城市', trigger: 'change' }
          ],
          address:[
            { required: true, message: '地址不能为空', trigger: 'blur' },
            {type:'string',min:5,message: '请输入详细的联系地址'}
          ],
          creditcode:[
            { required: true, message: '信用编码不能为空', trigger: 'blur'},
            {type:'string',min:18,max:18,message: '请输入正确的信用代码'}
          ]
        }
      };
    },
    props:['flag'],
    methods:{
      commit(name){
        //提交
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!');
          } else {
            this.$Message.error('信息填写错误!');
          }
        })
      },
      reset(name){
        //重置
        this.$refs[name].resetFields();
      },
      cancle(){
        //取消
        console.log(1);
        this.$emit('change','flag');

      }
    },
    components: {}
  };
</script>

<style scoped>
  .wrap{
    position: absolute;
    left: 0;
    top: 10px;
    bottom: 0;
    right: 0;
    margin: 0 auto;
    width: 50%;
    height:70%;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 26px rgba(0, 0, 0, .9);
    z-index: 10;
  }
  .info{
    width:100%;
    padding: 20px 0;
  }
  .infocontent{
    text-indent: 12px;
  }
  .ivu-input-wrapper{
    width:60%;
  }
  .info p{
    width: 90px;
    margin-right: -60px;
    text-align: left;
  }
  .customer .ivu-input-wrapper,.address .ivu-input-wrapper,.creditcode .ivu-input-wrapper{
    margin-left: -70px;
  }
   .addressseclect{
    margin-bottom: 20px;
  }
  .addressseclect p{
    height: 34px;
    line-height: 34px;
  }

  button{
    width: 150px;
  }
</style>
