<template>
  <div class="h100">
    <Header></Header>
    <div class="content pos-r">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>

  import Header from '../components/base/Header'
  import Footer from '../components/base/Footer'

  export default {
    name: 'full',
    components: {Header,Footer},
  }
</script>
<style>
  .content{
    width: 100%;
    height:calc(100% - 60px);
  }
</style>
