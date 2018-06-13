<template>
  <Form ref="loginItem" :model="loginItem" inline :rules="rules"  class="w100 h100" >
    <FormItem prop="user" class="user">
      <Icon type="ios-person-outline" class="fl loginIcon"></Icon>
      <Input type="text" v-model="loginItem.user" placeholder="请输入用户名" class="fr loginInput"/>
      <Icon type="ios-person-outline" slot="prepend"></Icon>
    </FormItem>
    <FormItem prop="password" class="password">
      <Icon type="ios-unlocked" class="fl loginIcon"></Icon>
      <Input type="password" v-model="loginItem.password" placeholder="请输入密码" @keyup.enter.native="login" class="fr loginInput"/>
      <Icon type="ios-locked-outline" slot="prepend" ></Icon>
    </FormItem>
    <div class="forget">
      <a href="#" class="fr">忘记密码？</a>
    </div>
    <FormItem class="loginCommit">
      <Button type="primary" @click="loginsubmit">登录</Button>
    </FormItem>
    <p>客服热线：13888888888</p>
  </Form>
</template>

<script>
  import encryption from "../../../api/encryption";
  export default {
    name: "loginform",
    data() {
      return {
        loginItem: {
          user: '',
          password: ''
        },
        rules: {
          user: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码至少6位', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      loginsubmit() {
        this.$refs.loginItem.validate((valid) => {
          if (valid) {
            this.$_api.get("/api/system/login",{
              username: this.loginItem.username,
              userPwd: encryption.sha1(this.loginItem.password)
            }).then(res =>{
              this.$Message.success('登陆成功!');
              this.$router.push({ path: '/home' });
            }).catch(err => {
              console.log("登陆失败")
            })
            console.log(username);
          } else {
            console.log('提交失败！');
            return false;
          }
        })
      }
    },
    components: {}
  };
</script>

<style scoped>
   .user{
    margin-top: 80px;
  }
   .loginIcon{
    margin-right: 15px;
    font-size: 20px;
    margin-top: -28px;
  }
   .loginInput{
    width: 200px;
    margin-top: -35px;
  }
  .password{
    margin-top: 45px;
    margin-bottom: 10px;
  }
  .forget a{
    margin-right: 30px;
    font-size: 15px;
    color: #000;
  }
  a:hover{
    color: #FFFF00;
  }
  .loginCommit{
    margin: 20px 18px 15px 18px;
  }
  .loginCommit button{
    width: 180px;
  }
  p{
    font-size: 15px;
    color: #000;
  }
</style>
