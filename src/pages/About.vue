<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    console.log('About组件被挂载')
  },
  beforeDestroy() {
    console.log('About组件即将被销毁')
  },
  // 进入组件时被调用
  beforeRouterEnter(to,from,next){
    // ...
    next()
  },
  // 离开组件时被调用
  beforeRouteLeave (to, from, next) {
    // ...
    next()
  }
}
</script>

<style>

</style>