<template>
  <div class="select">
    <span>{{seleName}}</span>
    <el-select placeholder="请选择" size="mini" style="width: 110px;">
      <el-option
        v-for="item in seleCities"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
      </el-option>
    </el-select>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        props:{
          seleCities:[],
          seleName:''
        }
      }
    },
    methods: {

    },
    mounted() {

    },
    created(){

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
