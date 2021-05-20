<template>
  <footer>
    <h1>{{copyright}}</h1>
  </footer>
</template>

<script>
export default {
  data(){
    return{
      copyright: "Copyright 2021 Vue Ninjas"
    }
  }
}
</script>

<style scoped>
footer {
  background: #222;
  color: #ccc;
}
h1 {
  font-size: 16px;
}
</style>