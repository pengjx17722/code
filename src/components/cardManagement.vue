<template>
  <div>
    <h2>卡号管理</h2>
    <div class="check pos-r">
      <div class="fl mar-l10">
        号码信息：
        <Input v-model="value" size="small" placeholder="号码/ICCID/IMEI/IMSI" style="width: 130px" @on-enter="getData(value)"></Input>
      </div>
      <div class="fl mar-l10">
        <span>套餐名称:</span>
        <Select v-model="model" size="small" style="width:80px;margin-left: 10px">
          <Option v-for="item in models" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class="fl mar-l10">
        <span> 卡类型:</span>
        <Select v-model="model1" size="small" style="width:80px;margin-left: 10px">
          <Option v-for="item in models" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div>
        <div class="fl mar-l10">
          <span> 生命周期:</span>
          <Select v-model="model2" size="small" style="width:96px; margin-left: 10px">
            <Option v-for="item in models1" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </div>
      <div v-show="showbutton" class="showbutton pos-a">
        <div class="date">
          <h5>开户日期：</h5>
          <Col  class="pickDate" >
            <DatePicker type="date" size="small" placeholder="起始日期" style="width: 150px;"></DatePicker>
          </Col>
          <Col  class="pickDate" >
            <DatePicker  type="date" size="small" placeholder="截止日期" style="width: 150px;" ></DatePicker>
          </Col>
        </div>
        <div class="date">
          <h5>激活日期：</h5>
          <Col  class="pickDate" >
            <DatePicker type="date" size="small" placeholder="起始日期" style="width: 150px;"></DatePicker>
          </Col>
          <Col  class="pickDate" >
            <DatePicker  type="date" size="small" placeholder="截止日期" style="width: 150px;" ></DatePicker>
          </Col>
        </div>
      </div>
      <div class="fl mar-t15">
        <Button  type="info" size="small" @click="showButton" style="float:left;width:70px;margin-left: 10px;">更多选项</Button>
        <Button type="primary" size="small" @click="getData(value)" style="float:left;margin-left: 10px;width:50px;">查询</Button>
      </div>
    </div>
    <h3>号码列表</h3>
    <Table border :columns="columns" :data="historyData" size="small" @on-selection-change="choose"></Table>
    <div class="page" >
      <Page :total="dataCount" :page-size="pageSize" show-total size="small" show-elevator @on-change="changepage"  class="pages"></Page>
      <!--<Button type="primary" size="small" style="margin-top: -13px;margin-left: 5px">跳到</Button>-->
    </div>
    <cardInfo :formdata="params" v-show="flag" @flags="flags"></cardInfo>
  </div>
</template>

<script>
  import cardInfo from './cardManagement/cardInfo'
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
    data () {
      return {
        value:'',
        model:'',
        model1:'',
        model2:'',
        flag:false,
        showbutton:'',
        params:[],
        models:[
          {
            value: 'sall',
            label: '全部'
          },
          {
            value: '支付宝',
            label: '支付宝'
          },
          {
            value: '微信',
            label: '微信'
          },
        ],
        models1:[
          {
            value: 'all',
            label: '全部'
          },
          {
            value: '测试期',
            label: '测试期'
          },
          {
            value: '沉默期',
            label: '沉默期'
          },
          {
            value: '正使用',
            label: '正使用'
          },
        ],
        initData:[],
        // 初始化信息总条数
        dataCount:0,
        // 每页显示多少条
        pageSize:10,
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '号码',
            key: 'name',
            width:180,
            align: 'center'
          },
          {
            title: '卡类型',
            key: 'age',
            width:105,
            align: 'center'
          },
          {
            title: 'ICCID',
            key: 'age',
            width:260,
            align: 'center'
          },
          {
            title: 'IMSI',
            key: 'address',
            width:200,
            align: 'center'
          },
          {
            title: 'IMEI',
            key: 'date',
            width:200,
            align: 'center'
          },
          {
            title: '生命周期',
            key: 'endDate',
            width:110,
            align: 'center'
          },
          {
            title: '开户时间',
            key: 'age',
            width:220,
            sortable: true,
            align: 'center'
          },
          {
            title: '激活时间',
            key: 'age',
            width:140,
            sortable: true,
            align: 'center'
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
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
                      this.show(params.row,params.index)
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
                      this.edit(params.index)
                    }
                  }
                }, '编辑')
              ]);
            }
          }
        ],
        historyData: []
      }
    },
    methods:{
      //更多按钮
      showButton(){
        this.showbutton = !this.showbutton;
      },
      //选择行
      choose(selection){
        console.log(selection)
      },
      flags(){
        this.flag = false
      },
      //查看
      show(params,index){
        //将所点击行数据储存
        this.params = params;
        this.flag = !this.flag
      },
      //编辑
      edit(params,index){
        // this.historyData.splice(index, 1);
        console.log(2);
        console.log(this.historyData,this.params)
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
    components:{cardInfo},

  }
</script>

<style scoped>
  h2{
    margin-bottom: 5px;
    background-color: #01A5FF;
    color: #fff;
  }
  .check{
    height: 50px;
    line-height: 50px;
    background: #ECF0F8;
  }
  .showbutton{
    top: 40px;
    left: 350px;
    width: 435px;
    height: 100px;
    padding: 5px;
    background-color: #f7faff;
    border: 1px solid #6091fc;
    border-radius: 5px;
    z-index: 2;
    transition: all 0.5s;
  }
  .date{
    width: 100%;
    margin-left: 10px;
    margin-top: 12px;
  }
  .date h5{
    float: left;
    height: 30px;
    line-height: 30px;
  }
  .date .pickDate{
    float: left;
    width: 180px;
    height: 100%;
    margin-top: -12px;
  }
  h3{
    height: 50px;
    background: url('../assets/list/icongl.png') no-repeat 5px center;
    line-height: 50px;
    text-indent: 30px;
    text-align: left;
    font-weight: normal;
  }
  .page{
    position: relative;
    float: right;
    margin:10px 150px 0 0;
  }
  .page .pages{
    display: inline-block;
  }
</style>
