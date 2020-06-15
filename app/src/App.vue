<template>
  <div id="app">
    <b-nav>
      <b-nav-item><router-link to='/'>Home</router-link></b-nav-item>
      <b-nav-item><router-link to='/findwant/find'>Find</router-link></b-nav-item>
      <b-nav-item><router-link to='/findwant/want'>Want</router-link></b-nav-item>
      <b-nav-item><router-link to='/auth/register'>Register</router-link></b-nav-item>
      <b-nav-item><router-link to='/auth/login'>Login</router-link></b-nav-item>
      <b-nav-item><router-link to='/me'>Me</router-link></b-nav-item>
      <b-nav-item><router-link to='/auth/logout'>Logout</router-link></b-nav-item>
    </b-nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
