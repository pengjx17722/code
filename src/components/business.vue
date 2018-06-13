<template>
  <div>
    <h2 class="w100">
      业务办理
    </h2>
    <Tabs class="mar-l10" type="card" value="name">
      <TabPane label="号码申请" name="name">
        <numberApplication></numberApplication>
      </TabPane>
      <TabPane label="申请结果查询" name="name1">
        <numberQuery></numberQuery>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import numberApplication from './business/numberApplication'
  import numberQuery from './business/numberQuery'
    export default {
        name: "business",
        data() {
            return {}
        },
        components: {
          numberApplication,numberQuery
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
