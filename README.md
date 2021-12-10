# 笔记


> vue脚手架配置代理

#### 方法一

在vue.config.js中添加如下配置：
```
devServer: {
  proxy: 'http://localhost:5000'
}
```
说明：

1. 优点： 配置简单，请求资源时直接发给前端(例:8080)即可
2. 缺点： 不能配置多个代理，不能灵活控制请求是否走代理
3. 工作方式：当请求了前端不存在的资源时，该请求会转发给服务器(优先匹配前端资源)

#### 方法二

配置具体代理规则：

```
module.export = {
  devServer: {
    proxy: {
      '/api': { //匹配所有以'/api'开头的请求路径
        target: 'http://localhost:5000', // 代理目标基础路径
        pathRewrite: {
          '^/api': ''
        },
        // ws: true, // 用于支持websocket
        // changeOrigin: true, 用于控制请求头中的host值
      },
      '/api2': {
        target: 'http://localhost:5001',
        pathRewrite: {
          '^/demo': ''
        },
      },
    },
  },
}
```
说明： 
1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理
2. 缺点： 配置略微繁琐，请求资源必须添加前缀