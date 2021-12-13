<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot name="center" />
    <slot name="footer" />
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title']
}
</script>

<style scoped>
.category {
  width: 200px;
  height: 300px;
  background: skyblue;
}
h3 {
  text-align: center;
  background: orange;
}
</style>