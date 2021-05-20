<template>
  <div id="show-blogs">
  <h2>All Blog Articles</h2>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="blog in filteredBlogs " v-bind:key="blog.id" class="single-blog">
      <h2>{{blog.title | to-uppercase}}</h2>
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      blogs:[],
      search: ''
    }
  },
  methods:{

  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (data){
      console.log(data)
      this.blogs = data.body.slice(0,10);
    })
  },
  computed:{
    filteredBlogs:function (){
      return this.blogs.filter((blog)=> {
        return blog.title.match(this.search)
      });
    }
  },
  filters:{
    // 'to-uppercase': function (value){
    toUppercase(value){
      return value.toUpperCase();
    }

  }
}
</script>

<style scoped>

#show-blogs {
  max-width: 800px;
  margin: 40px auto;
}
.single-blog {
  border: dotted 1px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  background: #eee;
  box-sizing: border-box;
}
</style>