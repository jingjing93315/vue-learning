<template>
  <div>
    <ul>
    <li v-for="m in messageList" :key="m.id">
      <router-link 
        :to="{
          path: '/home/message/detail',
          query: { id: m.id, title: m.title}
        }">{{m.title}}
      </router-link>
       <button @click="pushShow(m)">push查看</button>
       <button @click="replaceShow(m)">replace查看</button>
      <!-- <router-link 
        :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}
      </router-link> -->
    </li>
  </ul>
  <hr/>
  <router-view />
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      messageList: [
        {
          id: '001',
          title: '消息001',
        },
        {
          id: '002',
          title: '消息002',
        },
        {
          id: '003',
          title: '消息003',
        },
        {
          id: '004',
          title: '消息004',
        }
      ]
    }
  },
  methods: {
    pushShow(m){
      this.$router.push({
        name: 'Detail',
        query: {
          id: m.id,
          title: m.title
        }
      })
    },
    replaceShow(m){
      this.$router.replace({
        name: 'Detail',
        query: {
          id: m.id,
          title: m.title
        }
      })
    }
  },
}
</script>

<style>
</style>