<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader @addTodo="addTodo" />
      <MyList :todos="todos" />
      <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo" />
    </div>
  </div>
</template>
<script>
import pubsub from 'pubsub-js'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import MyList from './components/MyList'
export default {
  name: 'App', //汇总所有子组件
  components: {
    MyHeader,
    MyFooter,
    MyList
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) ?? []
    }
  },
  mounted() {
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('updateTodo', this.updateTodo)
    // this.$bus.$on('deleteTodo', this.deleteTodo)
    this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo)
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

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>