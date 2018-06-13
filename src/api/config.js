let reqUrl = ''
let env = process.env.NODE_ENV //判断是线上环境还是开发环境

const VERSION = 'V1'
if (env === 'development') { // 本地调试接口
      //reqUrl = 'http://192.168.1.28:8080'
} else if (env === 'production') { // 线上接口
    //reqUrl = 'http://api.shinemonitor.com/public/'

}

export const API_ROOT = reqUrl //域名
export const CONTENT_TYPE = 'application/x-www-form-urlencoded' //post,
