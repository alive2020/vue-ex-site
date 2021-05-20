<template>
  <div id="formm">
    <h3> Sign up to subscribe our Newsletter</h3>
    <form>
      <label>Name: </label>
      <input type="text" required v-model="name">
      <label>Email:</label>
      <input type="email" required v-model="email">
      <label>Password:</label>
      <input type="password" required>
      <button @click="signUp">Sign up</button>
    </form>
    <div class="prev">
      <p>Name:{{name}}</p>
      <p>Email:{{email}}</p>
    </div>
    <div class="text-center">
      <v-btn
          v-if="!chip1 && !chip2 && !chip3 && !chip4"
          close
          color="primary"
          dark
          @click="chip1 = true, chip2 = true, chip3 = true, chip4= true"
      >
        Reset Chips
      </v-btn>

      <v-chip
          v-if="chip1"
          class="ma-2"
          close
          @click:close="chip1 = false"
      >
        Closable
      </v-chip>

      <v-chip
          v-if="chip2"
          class="ma-2"
          close
          color="red"
          text-color="white"
          @click:close="chip2 = false"
      >
        Remove
      </v-chip>

      <v-chip
          v-if="chip3"
          class="ma-2"
          close
          color="green"
          outlined
          @click:close="chip3 = false"
      >
        Success
      </v-chip>

      <v-chip
          v-if="chip4"
          class="ma-2"
          close
          color="orange"
          label
          outlined
          @click:close="chip4 = false"
      >
        Complete
      </v-chip>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: null,
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
    }
  },
  methods:{
    signUp(){

    }
  }
}
</script>

<style scoped>

#formm {
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
}

input {
  display: block;
  width: 100%;
  padding: 8px;

}

.prev {
  margin-top: 30px;
  border: dotted 1px #ccc;
  padding-left: 20px;
}
</style>