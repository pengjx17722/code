<template>
  <div class="Table">
    <div class="seclectDate">
        <h5>统计月份：</h5>
        <Col  class="startDate" >
          <DatePicker @on-change="startData" type="date" size="small" placeholder="起始日期" style="width: 170px;margin-right:10px"></DatePicker>
        </Col>
        <Col  class="endDate" >
          <DatePicker @on-change="endData" type="date" size="small" placeholder="截止日期" style="width: 170px;height:26px" ></DatePicker>
        </Col>
    </div>
  </div>
</template>
<script>

  export default {
    data () {
      return{}
    },
  }
</script>
<style scoped>
  .seclectDate{
    height: 50px;
    margin-top: -15px;
    line-height: 50px;
  }
  div,h5{
    float: left;
  }
  h5{
    padding-left: 20px;
  }
</style>

