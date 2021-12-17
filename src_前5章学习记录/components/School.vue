<template>
  <div>
    {{schoolName}}
    {{address}}
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      schoolName: '河北大学',
      address: '河北'
    }
  },
  mounted() {
    this.$bus.$on('demo', (data)=>{
      console.log('我是school组件，收到了数据', data)
    })
  },
  beforeDestroy() {
    this.$bus.$off('demo')
  },
}
</script>

<style>

</style>