<template>
  <div>
    <h2 class="w100">
      充值查询
    </h2>
    <Tabs class="mar-l10" type="card" value="name">
      <TabPane label="账户充值明细" name="name" >
        <checkAccount></checkAccount>
      </TabPane>
      <TabPane label="卡号充值明细" name="name1">
        <checkNumberCard></checkNumberCard>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import checkAccount from './recharge/checkAccount'
  import checkNumberCard from './recharge/checkNumberCard'
  export default {
    data () {
      return { }
    },
    components:{checkAccount,checkNumberCard}
  }
</script>
<style scoped>
  h2{
    margin-bottom: 5px;
    background-color: #01A5FF;
    color: #fff;
  }
</style>


