<template>
  <div class="heading">
    <p>{{message}}<i class="el-icon-caret-right"></i></p>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props:{
      message:''
    },
    methods: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .heading
    position absolute
    cursor pointer
    height 27px
    padding 0 5px
    margin-left 5px
    margin-top 5px
    background-color #2a3cba
    color #fff
    font-size 14px
    font-weight 700
    line-height 27px
    text-align center


</style>
