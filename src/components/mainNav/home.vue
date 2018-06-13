<template>
  <div class="h100">
    <sidebar></sidebar>
    <div class="maincontent fl mar-t10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import sidebar from '../sidebar'
  import cardManagement from '../cardManagement'
    export default {
      name: "home",
      data() {
          return {}
      },
      components:{
        sidebar,cardManagement
      },
      created(){
        this.$router.push({path:'/home/cardManagement'})
      }
    }
</script>

<style scoped>
  .maincontent{
    width:calc(100% - 180px);
    height: 100%;
    background: #fff;
  }
</style>
