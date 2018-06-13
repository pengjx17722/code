<template>
  <div>
    <div class="seclectDate">
      <div class="wrap">
        <h5>统计月份：</h5>
        <Col  class="startDate" >
          <DatePicker type="date" size="small" placeholder="起始日期" :style="{width: '150px',marginRight:'10px'}"></DatePicker>
        </Col>
        <Col  class="endDate" >
          <DatePicker  type="date" size="small" placeholder="截止日期" :style="{width: '150px',height:'26px'}" ></DatePicker>
        </Col>
        <Select v-model="model" size="small" style="width:100px;margin-top: 15px;margin-left: 10px">
          <Option v-for="item in models" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Input v-model="value" size="small" placeholder="输‘18’试试？" style="width: 130px;margin-top: 15px;margin-left: 10px"></Input>
        <Button type="primary" size="small" :style="{marginLeft:'20px',width:'50px'}" @click="getData(value)">查询</Button>
      </div>
    </div>
    <i-table border :columns="columns" :data="historyData" class="table" width="500px" size="small"></i-table>
    <div class="page" >
      <Page :total="dataCount" :page-size="pageSize" show-total  show-elevator @on-change="changepage"></Page>
    </div>
  </div>
</template>

<script>
  let testData = {
    "datas": [
      {
        name: '王小明',
        age: 18,
        date: '2016-10-03',
        address: '北京市朝阳区芍药居',
        endDate: '2018-10-02',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '周小伟',
        age: 26,
        date: '2016-10-04',
        address: '深圳市南山区深南大道',
        endDate: '2018-10-03',
      },
      {
        name: '王小明',
        age: 18,
        date: '2016-10-03',
        address: '北京市朝阳区芍药居',
        endDate: '2018-10-02',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '周小伟',
        age: 26,
        date: '2016-10-04',
        address: '深圳市南山区深南大道',
        endDate: '2018-10-03',
      },
      {
        name: '王小明',
        age: 18,
        date: '2016-10-03',
        address: '北京市朝阳区芍药居',
        endDate: '2018-10-02',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '周小伟',
        age: 26,
        date: '2016-10-04',
        address: '深圳市南山区深南大道',
        endDate: '2018-10-03',
      },
      {
        name: '王小明',
        age: 18,
        date: '2016-10-03',
        address: '北京市朝阳区芍药居',
        endDate: '2018-10-02',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '周小伟',
        age: 26,
        date: '2016-10-04',
        address: '深圳市南山区深南大道',
        endDate: '2018-10-03',
      },
      {
        name: '王小明',
        age: 18,
        date: '2016-10-03',
        address: '北京市朝阳区芍药居',
        endDate: '2018-10-02',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '周小伟',
        age: 26,
        date: '2016-10-04',
        address: '深圳市南山区深南大道',
        endDate: '2018-10-03',
      },
      {
        name: '王小明',
        age: 18,
        date: '2016-10-03',
        address: '北京市朝阳区芍药居',
        endDate: '2018-10-02',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '周小伟',
        age: 26,
        date: '2016-10-04',
        address: '深圳市南山区深南大道',
        endDate: '2018-10-03',
      },
      {
        name: '王小明',
        age: 18,
        date: '2016-10-03',
        address: '北京市朝阳区芍药居',
        endDate: '2018-10-02',
      },
      {
        name: '张小刚',
        age: 25,
        date: '2016-10-01',
        address: '北京市海淀区西二旗',
        endDate: '2018-09-30',
      },
      {
        name: '李小红',
        age: 30,
        date: '2016-10-02',
        address: '上海市浦东新区世纪大道',
        endDate: '2018-10-01',
      },
      {
        name: '周小伟',
        age: 26,
        date: '2016-10-04',
        address: '深圳市南山区深南大道',
        endDate: '2018-10-03',
      },
      {
        name: '王小明',
        age: 18,
        date: '2016-10-03',
        address: '北京市朝阳区芍药居',
        endDate: '2018-10-02',
      },
      {
        name: '王小明',
        age: 18,
        date: '2016-10-03',
        address: '北京市朝阳区芍药居',
        endDate: '2018-10-02',
      },
      {
        name: '王小明',
        age: 18,
        date: '2016-10-03',
        address: '北京市朝阳区芍药居',
        endDate: '2018-10-02',
      },
      {
        name: '王小明',
        age: 18,
        date: '2016-10-03',
        address: '北京市朝阳区芍药居',
        endDate: '2018-10-02',
      },
      {
        name: '王小明',
        age: 18,
        date: '2016-10-03',
        address: '北京市朝阳区芍药居',
        endDate: '2018-10-02',
      },
      {
        name: '王小明',
        age: 18,
        date: '2016-10-03',
        address: '北京市朝阳区芍药居',
        endDate: '2018-10-02',
      },
      {
        name: '王小明',
        age: 18,
        date: '2016-10-03',
        address: '北京市朝阳区芍药居',
        endDate: '2018-10-02',
      },
      {
        name: '王小明',
        age: 18,
        date: '2016-10-03',
        address: '北京市朝阳区芍药居',
        endDate: '2018-10-02',
      },
      {
        name: '王小明',
        age: 18,
        date: '2016-10-03',
        address: '北京市朝阳区芍药居',
        endDate: '2018-10-02',
      },
      {
        name: '王小明',
        age: 18,
        date: '2016-10-03',
        address: '北京市朝阳区芍药居',
        endDate: '2018-10-02',
      },
    ]
  };
  export default {
    name: "checkNumberCard",
    data() {
      return {
        value:'',
        flag:false,
        model:'',
        initData:[],
        // 初始化信息总条数
        dataCount:0,
        // 每页显示多少条
        pageSize:10,
        columns: [
          {
            title: '名称',
            key: 'name',
            width:100,
            height:20,
            sortable: true
          },
          {
            title: '手机号',
            key: 'age',
            width:100,
            sortable: true
          },
          {
            title: '年龄',
            key: 'age',
            width:100,
            sortable: true
          },
          {
            title: '地址',
            key: 'address',
            width:150,
            sortable: true,
            ellipsis:true
          },
          {
            title: '开通日期',
            key: 'date',
            width:120,
            sortable: true
          },
          {
            title: '到期日期',
            key: 'endDate',
            width:120,
            sortable: true
          },
          {
            title: '手机号',
            key: 'age',
            width:100,
            sortable: true
          },
          {
            title: '年龄',
            key: 'age',
            width:100,
            sortable: true
          },
          {
            title: '操作',
            key: 'action',
            width: 130,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '10px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        historyData: [],
        models:[
          {
            value: '支付宝',
            label: '支付宝'
          },
          {
            value: '微信',
            label: '微信'
          },
          {
            value: '余额',
            label: '余额'
          },
        ]
      }
    },
    methods:{
        show(index){
          //查看
          this.$Modal.info({
            content: `姓名：${this.historyData[index].name}<br>年龄：${this.historyData[index].age}<br>
                      地址：${this.historyData[index].address}<br>开通日期:${this.historyData[index].date}<br>
                      结束日期:${this.historyData[index].endDate}`
          })
        },
        remove(index){
          //编辑
          this.historyData.splice(index, 1);
        },
        // 获取历史记录信息
        getData(val){
          // 保存取到的所有数据
          if(val){
            testData.datas = testData.datas.filter(item=>item.name===val || item.age===Number(val));
            this.initData = testData.datas;
            this.dataCount = this.initData.length
          }else{
            this.initData = testData.datas;
            this.dataCount = testData.datas.length;
          }
          // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
          if(testData.datas.length < this.pageSize){
            this.historyData = this.initData;
          }else{
            this.historyData = this.initData.slice(0,this.pageSize);
          }
        },
        changepage(index){
          let _start = ( index - 1 ) * this.pageSize;
          let _end = index * this.pageSize;
          this.historyData = this.initData.slice(_start,_end);
        },
    },
    components: {},
    created(){
      this.getData()
    }
  }
</script>

<style scoped>
  .seclectDate{
    height: 50px;
    margin: 5px 0;
    line-height: 50px;
  }
  .ivu-tabs-bar{
    margin-bottom: 0;
  }
  .wrap,.wrap>div,h5{
    float: left;
  }
  .wrap{
    margin-left: 10px;
  }
  .wrap h5{
    padding-left: 20px;
  }
  .page{
    position: relative;
    float: right;
    margin:10px 150px 0 0;
  }
  .page .ivu-page-item,.ivu-page-prev,.ivu-page-next,.ivu-page-item-jump-prev,.ivu-page-item-jump-next{
    min-width: 25px;
    height: 25px;
    line-height: 25px;
  }
  .page li.ivu-page-item a{
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
  }
  .page .ToForL{
    position: absolute;
    top: 4px;
    width: 38px;
    height:25px;
    line-height:25px;
    font-size: 12px;
  }
  .page .firstPage{
    left: 48px;
  }
  .page .lastPage{
    right: 100px;
  }
  .page .ivu-page-options-elevator{
    height: 25px;
    line-height: 25px;
  }
  .page .ivu-page-options-elevator input{
    width: 32px;
    height: 25px;
    line-height: 25px;
  }
  .table td{
    height: 32px;
  }
</style>
