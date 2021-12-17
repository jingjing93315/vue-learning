<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名: {{name}}</h2>
    <h2>学生性别: {{gender}}</h2>
    <button @click="showName">点击显示姓名</button>
    <button @click="transmitName">传递学生姓名</button>
  </div>
</template>

<script>
import {mixin} from '../mixin'
export default {
  name: 'Student',
  // props: ['name', 'age', 'gender'], // 简单声明接收
  // props: {
  //   name: String,
  //   age: Number,
  //   gender: String
  // },
  // props: {
  //   name: {
  //     type: String,
  //     required: true
  //   },
  //   age: {
  //     type: Number,
  //     default: 99
  //   },
  //   gender: {
  //     type: String,
  //     required: true
  //   }
  // },
  data() {
    return {
      msg: 'hello world',
      name: '一线蓝光',
      gender: '女'
    }
  },
  mixins: [ mixin ],
  methods: {
    transmitName(){
      this.$bus.$emit('demo', this.name)
    }
  },
}
</script>

<style>

</style>