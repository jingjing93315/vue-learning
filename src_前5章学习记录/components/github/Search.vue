<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" v-model="keyword" placeholder="enter the name you search" />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios"

export default {
  name: 'Search',
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    searchUsers() {
      // 请求前更新list的数据
      this.$bus.$emit('updateListData', {
        isFirst: false,
        isLoading: true,
        errorMsg: '',
        users: []
      })
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(response=>{
         this.$bus.$emit('updateListData', {
           isLoading: false,
           errorMsg: '',
           users: response.data.items
         })
        },
        error=>{
          this.$bus.$emit('updateListData', {
           isLoading: false,
           errorMsg: error.message,
           users: []
         })
        })
    }
  },
}
</script>