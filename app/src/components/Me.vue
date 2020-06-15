<template>
  <div>
    <b-list-group>
        <b-list-group-item v-bind:key="data.id" v-for="data in history">
            Sports: '{{data.sports}}',
            Date: {{data.date}},
            Place: {{data.place}},
            Start Time: {{data.start_time}},
            End Time: {{data.end_time}},
            Condition: {{data.group_member}}/{{data.group_limit}},
            Comment: {{data.comment}}
            Accompany: {{data.accompany}}
        <b-button type="button" varient="outline-primary" v-on:click="deleting($event, data.id)">Delete</b-button>
        </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
import axios from 'axios'

export default {
    data: function () {
        return {
            history: [],
            show: true
        }
    },
    methods: {
        deleting (evt, id) {
            axios.post('http://ssal.sparcs.org/34514/me/delete', {id: `${id}`}, {
          headers: {
          'x-access-token': `${localStorage.getItem('token')}`}
        }).then((res) => {
            alert(res.data.message)
            this.$router.go()
        })
        }
    },
    created () {
        axios.get('http://ssal.sparcs.org/34514/me/history', {
            headers: {
                'x-access-token': `${localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                console.log(res.data.result)
                console.log(res)
                this.history = res.data.result
            })
            .catch((err) => {
                this.history = err
            })
        if (this.history.length === 0) {
            this.show = false
        }
    }
}
</script>

<style scoped>

</style>
