<template>
  <header>
    <h1>{{welcome}}</h1>
  </header>
</template>

<script>
export default {
  data(){
    return{
      welcome: "Welcome to Our Website!"
    }
  }
}
</script>

<style scoped>
header {
  background: cornflowerblue;
  height: 300px;
}
h1 {
  padding-top: 130px;
  text-align: center;
  color: white;
}
</style>