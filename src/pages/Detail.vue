<template>
  <div>
    <p>消息编号：{{ id }}</p>
    <p>消息名称：{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: ['id', 'title'],
  data() {
    return {
      messageInfo: {
        id: '',
        title: ''
      }
    }
  },
  mounted() {
    // this.messageInfo.id = this.$route.query.id
    // this.messageInfo.title = this.$route.query.title
    console.log(this.messageInfo)
  },
}
</script>