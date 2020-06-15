<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <label for="input-with-list">Sports:</label>
      <b-form-input list="input-list" id="input-with-list" v-model="form.sport"></b-form-input>
      <b-form-datalist id="input-list" :options="Sports"></b-form-datalist>

      <b-form-datepicker v-model="form.date" :min="min" :max="max" locale="kr"></b-form-datepicker>
      <br>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <br><br>
    <b-list-group v-if="show2">
      <b-list-group-item v-bind:key="data.id" v-for="data in find_data" >
        Sports: '{{data.sports}}', Date: {{data.date}}, Place: {{data.place}}, Start Time: {{data.start_time}}, End Time: {{data.end_time}}, Condition: {{data.group_member}}/{{data.group_limit}}, Comment: {{data.comment}}
        <b-button type="button" variant = "outline-primary" v-on:click="accompany($event,data.id)">Accompany</b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const minDate = new Date(today)
    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth() + 2)
    return {
      form: {
        sport: '',
        date: ''
      },
      Sports: ['baseball', 'basketball', 'soccer', 'tennis'],
      min: minDate,
      max: maxDate,
      show: true,
      show2: false,
      find_data: []
    }
  },
  methods: {
    async onSubmit (evt) {
      console.log('entered submit method')
      evt.preventDefault()
      const data = await JSON.parse(JSON.stringify(this.form))
      console.log(data)
      axios.post('http://localhost:8080/findwant/find', data, {
          headers: {
          'x-access-token': `${localStorage.getItem('token')}`}
      })
        .then(res => {
          this.find_data = res.data.data
          console.log(res.data)
          this.show2 = true
        })
        .catch(function (err) {
          if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
          } else if (err.request) {
            console.log(err.request)
          } else {
            console.log('Error', err.message)
          }
          console.log(err.config)
        }
        )
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.sport = ''
      this.form.date = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
      this.show2 = false
    },
    accompany (evt, id) {
      evt.preventDefault()
      console.log(id)
      axios.post('http://localhost:8080/findwant/accompany', {id: `${id}`}, {
          headers: {
          'x-access-token': `${localStorage.getItem('token')}`}
      })
        .then((res) => {
          alert(res.data.message)
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
