// 该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'

// 创建并暴露一个路由器
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
const router =  new VueRouter({
  mode: 'history',
  routes: [
    // 一级路由
    {
      name:'Index',
      path: '/home',
      component: Home,
      meta: {
        title:'主页'
      },
      children: [
        {
          path: 'news',
          component: News,
          meta:{
            isAuth: true,
            title: '新闻'
          }
        },
        {
          name: 'Message',
          path: 'message',
          component: Message,
          meta:{
            isAuth: true,
            title: '新闻'
          },
          // beforeEnter:(to,from,next)=>{
          //   // 组件内守卫
          //   next()
          // },
          children: [
            {
              name: 'Detail',
              // path: 'detail/:id/:title',
              path: 'detail',
              component: Detail,
              // 第一种写法，值为对象
              // props: {
              //   a: 1,
              //   b: 2
              // }
              // 第二种写法,若布尔值为真，会把收到的params参数，以props形式传给detail组件
              // props: true
              // 第三种写法 (连续结构赋值)
              props({query: {id, title}}){
                return { id, title }
              },
              meta:{
                isAuth: true,
                title: '详情'
              }
            },
          ],
        },
      ],
    },
    {
      name:'About',
      path: '/about',
      component: About,
      meta: {
        title: '关于'
      }
    }
  ],
})

// 路由守卫-初始化时，每次路由切换之前会被调用
// router.beforeEach((to, from, next)=>{
//   if(to.meta.isAuth){
//     if(localStorage.getItem('name') ==='狗尚'){
//       next()
//     }else {
//       alert('用户无权限查看！')
//     }
//   }else {
//     next()
//   }
// })
// router.afterEach((to,from)=>{
//   document.title = to.meta.title
// })
export default router;