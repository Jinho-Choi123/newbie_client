<template>
  <div>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <label for="input-with-list">Sports:</label>
      <b-form-input required list="input-list" id="input-with-list" v-model="form.sports"></b-form-input>
      <b-form-datalist id="input-list" :options="Sports"></b-form-datalist>

      <label for="datepicker">Date:</label>
      <b-form-datepicker id="datepicker" v-model="form.date" class="mb-2"></b-form-datepicker>

      <label for="start_time_picker">Start Time: </label>
      <b-input-group class="mb-3">
        <b-form-input required id="start_time_picker" v-model="form.start_time" type="text" placeholder="HH:mm:ss">
        </b-form-input>
      </b-input-group>

      <label for="end_time_picker">end Time: </label>
      <b-input-group class="mb-3">
        <b-form-input required id="end_time_picker" v-model="form.end_time" type="text" placeholder="HH:mm:ss">
        </b-form-input>
        <b-input-group-append>
          <b-form-timepicker v-model="form.end_time" button-only right show-seconds locale="kr" aria-controls="end_time_picker">
          </b-form-timepicker>
        </b-input-group-append>
      </b-input-group>

      <label for="input-with-list2">Place:</label>
      <b-form-input list="input-list2" id="input-with-list2" v-model="form.place" required></b-form-input>
      <b-form-datalist id="input-list2" :options="Places"></b-form-datalist>

      <label for="group_limit">Group Limit: </label>
      <b-form-input id="group_limit" v-model="form.group_limit" placeholder="5" ></b-form-input>

      <b-form-textarea id="textarea" v-model="form.comment" placeholder="Comment" rows="3" max-rows="6"></b-form-textarea>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      form: {
        sports: '',
        date: '',
        group_limit: '5',
        place: '',
        comment: '',
        start_time: '',
        end_time: ''
      },
      Sports: ['baseball', 'basketball', 'soccer', 'tennis'],
      Places: ['SportsComplex', 'North SchoolYard', 'Main SchoolYard', 'Swimming Pool'],
      show: true
    }
  },
  methods: {
    async onSubmit (evt) {
      console.log('entered submit method')
      evt.preventDefault()
      const data = await JSON.parse(JSON.stringify(this.form))
      axios.post('http://localhost:8080/findwant/want', data, {
          headers: {
          'x-access-token': `${localStorage.getItem('token')}`}
      })
        .then((res) => {
          console.log('at thebn')
          alert(res.data.message)
        })
        .catch((err) => {
          console.log(this.form)
          alert('Error! Please try it again.')
          console.log(err)
        })
    },
    onReset (evt) {
      evt.preventDefault()
      const data = this.form
      this.show = false
      data.sports = ''
      data.place = ''
      data.date = ''
      data.group_limit = '5'
      data.start_time = ''
      data.end_time = ''
      data.comment = ''
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
