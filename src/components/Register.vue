<template>
    <div>
        <h1>Register</h1>
        <input v-model="studentName" placeholder="Name"><br><br>
        <input v-model="studentId" placeholder="StudentId"><br><br>
        <button v-on:click="submit">Submit</button>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      studentName: '',
      studentId: ''}
  },
  methods: {
    async submit () {
      console.log('you entered submit method')
      axios.post('http://localhost:8080/register',
        {
          name: this.Name,
          studentId: this.StudentId
        })
    }
  }
}
</script>
