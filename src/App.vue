<template>
  <div class="oceans">
    <v-header></v-header>
    <router-view />

  </div>
</template>

<script>
  import header from './components/header/Header'
  export default {
    data() {
      return {

      }
    },
    methods: {

    },
    mounted(){
      let screeH = document.documentElement.clientHeight
      // let screeW = document.documentElement.clientWidth
      $('.oceans').height(screeH)
      // $('.oceans').width(screeW)
    },
    components: {
      'v-header': header,
    },
    created() {
      // console.log(window.location.pathname)
      // if(window.location.pathname == '/home') {
      //   this.bor = true
      // } else {
      //   this.bor = false
      // }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .oceans
    width 100%
    min-height 780px
    background #1a2575


</style>
