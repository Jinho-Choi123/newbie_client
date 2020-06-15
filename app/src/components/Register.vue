<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <label for="username">UserName:</label>
      <b-form-input id="username" v-model="form.username" required placeholder="Enter your Name"></b-form-input>
			<br>
			<label for="studentId">StudentId:</label>
			<b-form-input id="studentId" v-model="form.studentId" required placeholder="Enter your Student Id"></b-form-input>
			<br>
			<label for="userId">User Id:</label>
			<b-form-input id="userId" v-model="form.userId" required placeholder="Enter Id that you want to register"></b-form-input>
			<br>
			<label for="password1">Password:</label>
			<b-form-input id="password1" type="password" v-model="form.password" required placeholder="Enter password"></b-form-input>
			<br>
			<label for="password2">Password2:</label>
			<b-form-input id="password2" type="password" v-model="form.password2" required placeholder="Enter password again"></b-form-input>
		<br>
		<b-button type="submit" variant="primary">Submit</b-button>
		<b-button type="reset" variant="danger">Reset</b-button>
		</b-form>
		<br>
		<div>
		<b-alert show v-if="show2" varient="warning">
			{{msg}}
		</b-alert>
		</div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
			show: true,
			show2: false,
      form: {
				username: '',
				studentId: '',
				userId: '',
				password: '',
				password2: ''
			},
		msg: ''
    }
  },
  methods: {
    async onSubmit (evt) {
			console.log('entered submit method')
			evt.preventDefault()
			const data = await JSON.parse(JSON.stringify(this.form))
			console.log(data)
			axios.post('http://localhost:8080/auth/register', data)
  			.then((res) => {
				  this.msg = res.data.message
				  this.show2 = true
			  })
				.catch(err => {
					console.log(err)
				}
			)
	},
    onReset (evt) {
      evt.preventDefault()
      const data = this.form
        this.show = false
				data.username = ''
				data.studentId = ''
				data.userId = ''
				data.password = ''
				data.password2 = ''
        this.$nextTick(() => {
            this.show = true
        })
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
