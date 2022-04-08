<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from '@/pages/home'
export default {
  name: 'App',
  created () {
    this.$store.dispatch('getCompanyInfo')
    this.$store.dispatch('getNavList')
  },
  components: {
    Home
  }
}
</script>
