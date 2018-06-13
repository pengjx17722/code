import Vue from 'vue';
import Router from 'vue-router';
import full from '@/containers/full'
import home from '@/components/mainNav/home'
import download from '@/components/mainNav/download'
import help from '@/components/mainNav/help'
import checkNumber from '@/components/mainNav/checkNumber'
import companyInfo from '@/components/mainNav/companyInfo'
import business from '@/components/business'
import recharge from '@/components/recharge'
import checkRecharge from '@/components/checkRecharge'
import checkSupplier from '@/components/checkSupplier'
import checkflow from '@/components/checkflow'
import cardManagement from '@/components/cardManagement'
import notice from '@/components/mainNav/notice'
//注册全局路由组件
Vue.use(Router);




//输出路由映射
export const constantRouterMap = [
    {
        path: '/',
        name: '默认路径',
        component: resolve => require(['@/views/login/login'], resolve)
    },
    {
        path: '/login',
        name: '登陆',
        component: resolve => require(['@/views/login/login'], resolve)
    },
    {
      path: '/',
      name: 'full',
      component: full,
      children:[
        {
          path: '/home',
          name: '首页',
          component: home,
          children:[
            {path: '/home/business',name: '业务办理',component: business},
            {path: '/home/recharge',name: '充值缴费',component: recharge},
            {path:'/home/checkRecharge',name:'充值查询',component: checkRecharge},
            {path:'/home/checkSupplier',name:'经销商查询',component: checkSupplier},
            {path:'/home/checkflow',name:'流量查询',component: checkflow},
            {path:'/home/cardManagement',name:'卡号管理',component: cardManagement},
          ]
        },
        {path: '/checkNumber',name: '号码查询',component: checkNumber},
        {path: '/notice',name: '公司公告',component: notice},
        {path: '/download',name: '文件下载',component: download},
        {path: '/help',name: '支持与帮助',component: help},
        {path: '/companyInfo',name: '公司信息',component: companyInfo},
        {path: '/*',redirect: '/home',}
      ]
    },

];

// const routerobj = new Router({
//     mode: 'hash',
//     routes: constantRouterMap
// });
//
// export default routerobj
export default new Router({
    mode: 'hash',
    routes: constantRouterMap
});


