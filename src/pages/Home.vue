<template>
  <div>
    <h2>Home组件</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- 
        缓存多个 :include="['News', 'Message']"
        缓存一个 include="News"
       -->
     <keep-alive :include="['News']">
       <router-view />
     </keep-alive>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
}
</script>
