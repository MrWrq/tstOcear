<template>
  <div class="oceTable">
    <el-table
      :data="tableData"
      style="width: 100%"
      fixed
      stripe
      size="small"
      header-align="center"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="date"
        align="center"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="all"
        align="center"
        sortable
        label="全部数量">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="正常">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="已巡检">
      </el-table-column>
      <el-table-column
        prop="num"
        align="center"
        label="损坏">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props:{
      tableData: '',
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>




</style>
