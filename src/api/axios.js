import Vue from "vue";
import Axios from "axios"; //引入axios插件
import { API_ROOT, CONTENT_TYPE, COMPANY_KEY } from "./config"; //引入axios全局配置
const REQUEST = Axios.create(); //创建一个axios对象
REQUEST.defaults.baseURL = API_ROOT; //域名，或ip地址
REQUEST.defaults.headers.post["Content-Type"] = CONTENT_TYPE; //请求头
// REQUEST.defaults.transformResponse = function (data) {
//   console.log(data)
//   return {};
// }
// XMLHttpRequest
// 数据加密
import encryption from "./encryption";

// 服务对象
const service = {
    // 登录方法
    /**
     * 调用如下
     *   login() {
          this.$_api.get("/api/system/login",{
            username: this.username,
            userPwd: encryption.sha1(this.password),
          })
          .then(res=>{
            请求成功执行的方法
          })
          }
     */
    login(data) {
        console.log("login")
        data.userPwd = encryption.sha1(data.userPwd)
        return REQUEST({
                url: "/api/system/login", //二级路径，会加baseURL后面，即'http://api.shinemonitor.com/public/+url。
                // 如果url =/api/system/login，即'http://api.shinemonitor.com/public/api/system/login这种形式
                method: "get", //请求类型是post还是get还是put
                params: data //请求参数。params是会将参数直接加url后面，data则会放在post请求体里面，即post请求的body里面
            })
            .then(result => this.handleSucc(result))
            .catch(error => this.handleError(error));
    },
    get(url, data) {
        return REQUEST({
                url: url, //二级路径，会加baseURL后面，即'http://api.shinemonitor.com/public/+url。
                // 如果url =/api/system/login，即'http://api.shinemonitor.com/public/api/system/login这种形式
                method: "get", //请求类型是post还是get还是put
                params: data //请求参数。params是会将参数直接加url后面，data则会放在post请求体里面，即post请求的body里面
            })
            .then(result => this.handleSucc(result))
            .catch(error => this.handleError(error));
    },
    post(url, data) {
        // post
        return REQUEST({
                url: url, //url地址即/api/system/login
                method: "post", //请求类型post或get
                data: data //post请求提交的数据对象
            })
            .then(result => this.handleSucc(result))
            .catch(error => this.handleError(error));
    },
    handleSucc(result) {
        console.log(result.data.dat.list)
        console.log('请求成功..');

    },
    handleError(error) {
      console.log(error);
      console.log('请求错误..')

    },
};

//export default api;

export default service;
