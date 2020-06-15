<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <label for="username">UserId:</label>
            <b-form-input id="username" v-model="form.userId" required placeholder="UserId"></b-form-input>
            <br>
            <label for="password1">Password:</label>
            <b-form-input id="password1" type="password" v-model="form.password" required placeholder="Enter password"></b-form-input>
            <br>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
		</b-form>
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
            form: {
                userId: '',
                password: ''
            },
            show: true,
            show2: true,
            msg: ''
        }
    },
    methods: {
        async onSubmit (evt) {
            console.log('in submit method')
            evt.preventDefault()
            const data = await JSON.parse(JSON.stringify(this.form))
            axios.post('http://ssal.sparcs.org/34514/auth/login', data)
                .then((res) => {
                    if (res.data.message === 'login failed') {
                        this.msg = res.data.message
                    } else {
                        this.msg = res.data.message
                        localStorage.setItem('token', res.data.tokens)
                        setTimeout(() => { this.$router.push('/main') }, 3000)
                    }
                })
        },
        onReset (evt) {
            evt.preventDefault()
            const data = this.form
            this.show = false
            data.userId = ''
            data.password = ''
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script>

<style scoped>

</style>
