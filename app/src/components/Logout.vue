<template>
    <div>
        <b-button type="button" v-on:click="logout">Logout</b-button>
    </div>
</template>

<script>
export default {
    methods: {
        logout (evt) {
            evt.preventDefault()
            localStorage.clear()
            this.$router.push('/main')
        }
    }
}
</script>
<style scoped>

</style>
