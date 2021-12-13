<template>
  <div class="container">
    <!-- <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <MyList :todos="todos" />
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo" />
      </div>
    </div> -->
    <!-- <div class="github-container">
      <h3>github案例</h3>
      <Search/>
      <hr/>
      <List />
    </div> -->
    <div class="category-container">
      <Category title="美食">
        <img class="img" slot="center" :src="imgUrl" alt="">
        <div class="foot" slot="footer">
          <a href="https://baidu.com">更多美食</a>
        </div>
      </Category>
      <Category title="游戏">
        <ul>
          <li v-for="(item, index) in games" :key="index">{{item}}</li>
        </ul>
        <div class="foot" slot="footer">
          <a href="https://baidu.com">单机游戏</a>
          <a href="https://baidu.com">网络游戏</a>
        </div>
      </Category>
      <Category title="电影">
        <video slot="center" controls class="video" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        <template v-slot:footer>
          <div class="foot">
            <a href="https://baidu.com">经典</a>
            <a href="https://baidu.com">热门</a>
            <a href="https://baidu.com">推荐</a>
          </div>
          <h4 class="center">welcome</h4>
        </template>
      </Category>
    </div>
  </div>
</template>
<script>
import Category from "./components/Category.vue"
// import axios from 'axios'
// import pubsub from 'pubsub-js'
// import MyHeader from './components/MyHeader'
// import MyFooter from './components/MyFooter'
// import MyList from './components/MyList'
// import Search from './components/github/Search.vue'
// import List from './components/github/List.vue'

export default {
  name: 'App', //汇总所有子组件
  components: {
    Category
  },
  data() {
    return {
      // todos: JSON.parse(localStorage.getItem('todos')) ?? []
      foods: [
        '火锅', '烧烤', '小龙虾', '牛排'
      ],
      games: [
        '王者荣耀', '超级玛丽', '穿越火线'
      ],
      films: [
        '《教父》', "《你好，李焕英》", "《菊次郎的夏天》"
      ],
      imgUrl: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/180/h/180',
      videoUrl: ''
    }
  },
  mounted() {
    // this.$bus.$on('checkTodo', this.checkTodo)
    // this.$bus.$on('updateTodo', this.updateTodo)
    // this.$bus.$on('deleteTodo', this.deleteTodo)
    // this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo)
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    // 勾选/取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach(item => {
        if (item.id === id) item.done = !item.done
      })
    },
    updateTodo(id, title) {
      this.todos.forEach(item => {
        if (item.id === id) item.title = title
      })
    },
    // 删除一个todo
    deleteTodo(_, id) {
      this.todos = this.todos.filter(todo => todo.id != id)
    },
    // 全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach(todo => {
        todo.done = done
      })
    },
    // 清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter(todo => !todo.done)
    },
    getStudents() {
      axios.get('http://localhost:8080/api/students').then(response => {
        console.log('请求成功了', response.data)
      }, error => {
        console.log('请求失败了', error.message)
      })
    },
    getCars() {
      axios.get('http://localhost:8080/demo/cars').then(response => {
        console.log('请求成功了', response.data)
      }, error => {
        console.log('请求失败了', error.message)
      })
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  beforeDestroy() {
    this.$bus.$off('checkTodo')
    this.$bus.$off('updateTodo')
    pubsub.unsubscribe(this.pubId)
    // this.$bus.$off('deleteTodo')
  }
}
</script>

<style>
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.075);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(88, 137, 156);
  margin-right: 8px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}

.todo-container,
.github-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

/* category UI */
.category-container {
  display: flex;
  justify-content: space-around;
}
.video,
.img {
  width: 100%;
}
.foot {
  display: flex;
  justify-content: space-around;
}
.center {
  text-align: center;
}
</style>