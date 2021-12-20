<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h3>Vue Router Demo</h3>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  methods: {
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    }
  },
}
</script>

<style>

</style>