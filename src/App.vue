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
        fullHeight: document.documentElement.clientHeight,
      }
    },
    methods: {

    },
    mounted(){
      let screeH = document.documentElement.clientHeight
      screeH = screeH <= 780 ? 780 : screeH
      $('.oceans').height(screeH)
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight
          that.fullHeight = window.fullHeight
        })()
      }
    },
    components: {
      'v-header': header,
    },
    created() {

    },
    watch: {
      fullHeight(val) {
        if (!this.timer) {
          this.fullHeight = val
          $(".oceans").height(this.fullHeight)
          if (this.fullHeight <= 910) {
            $('.home_list .li_link').hide()
            $('.link_a').show()
          } else {
            $('.home_list .li_link').show()
            $('.link_a').hide()
          }
          this.timer = true
          let that = this
          setTimeout(function () {
            that.timer = false
          }, 400)
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .oceans
    width 100%
    min-height 780px
    background #1a2575


</style>
