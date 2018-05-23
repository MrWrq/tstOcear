<template>
  <div class="icon">
    <ul>
      <li v-for="item in icons" :style="{background : item.bgColor}">
        <img :src="item.url" alt="">
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props:{
      icons:''
    },
    methods: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .icon
    ul
      li
        width 68px
        height 60px
        text-align center
        color #fff
        box-sizing border-box
        padding 5px
        border 1px solid #a8a8aa
        box-shadow 0 0 3px 0 #5c6275
        background #666666
        border-radius 5px
        margin-top 2px
        img
          width 33px
          transition all 1s
        &:hover
          background-color #0babfe
          cursor pointer
          border 1px solid #17A3FE
          color font-weight 700
          img
            transform scale(1.1)


</style>
