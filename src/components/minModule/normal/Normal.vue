<template>
  <div class="normal">
    <span><img src="./normal.png" alt="">正常</span>
    <span><img src="./error.png" alt="">异常</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props:{

    },
    methods: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .normal
    text-align center
    span
      display block
      width 75px
      height 27px
      line-height 30px
      background-color #fff
      border-radius 5px
      &:last-child
        margin-top 5px
      img
        width 22px
        padding-right 10px


</style>
