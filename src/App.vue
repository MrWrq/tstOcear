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
      $('.oceans').height(screeH)
    },
    components: {
      'v-header': header,
    },
    created() {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .oceans
    width 100%
    min-height 780px
    background #1a2575


</style>
