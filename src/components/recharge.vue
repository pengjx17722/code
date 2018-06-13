<template>
  <div>
    <h2 class="w100">
      充值缴费
    </h2>
    <Tabs class="mar-l10" type="card" value="name">
      <TabPane label="账户充值" name="name">
        <account></account>
      </TabPane>
      <TabPane label="卡号充值" name="name1">
        <cardnumber></cardnumber>
      </TabPane>
      <TabPane label="批量充值" name="name2">
        3
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import account from './recharge/accountRecharge'
  import cardnumber from './recharge/cardnumbereReccharge'
    export default {
        name: "recharge",
        data() {
            return {}
        },
        components: {
          account,cardnumber
        }
    }
</script>

<style scoped>
  h2{
    margin-bottom: 10px;
    background-color: #01A5FF;
    color: #fff;
  }
</style>
