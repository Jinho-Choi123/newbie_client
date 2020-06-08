<template>
  <div>
      <label for="Sports">What Sports do you wanna play?</label>
      <b-form-input list="input-list" id="Sports"></b-form-input>
      <b-form-datalist id="Sports" :options="Sports"></b-form-datalist>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      Sports: ['baseball', 'basketball', 'soccer', 'tennis']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
