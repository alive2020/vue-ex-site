<template>
  <div >
<!--    <div v-for="list in lists" v-bind:key="list.id">-->
<!--      <p>{{list.id}}</p>-->
<!--      <h1>{{list.name}}</h1>-->
<!--    </div>-->
    <Form />

    <Posts />
  </div>
</template>

<script>
import Form from './Form.vue'
import Posts from './Posts.vue'

export default {
  components: {Form, Posts},
  data(){
    return{
      lists: [
        { name: "List of Bajaj Auto products", id:1},
        { name:"List of BlackBerry products", id:2},
        { name:"List of Bombardier Transportation products", id:3},
        { name:"List of Border fund products", id:4}
      ]
    }
  },
  // methods: {
  //   show: false
// }

}
</script>

<style scoped>

</style>