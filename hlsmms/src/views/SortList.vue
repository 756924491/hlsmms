<template>
  <el-container id="home">
    <!-- 左边侧栏 -->
     <LeftMenu></LeftMenu>
    <!-- 右边内容 -->
      <el-container id="rightContent">
          <!-- 右边顶部 -->
          <RightTop></RightTop>
          <!-- 右边主要内容 -->
          <el-main>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <h4>分类管理</h4>
                </div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column label="分类名称" width="480">
                        <template slot-scope="scope">{{ scope.row.sortname }}</template>
                    </el-table-column>
                    <el-table-column label="管理"  width="260"  align='center'>
                        <template slot-scope="scope">
                            <el-button size="mini"  @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i> 编辑</el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i> 删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
              </el-card>
          </el-main>
          <!-- 右边底部 -->
          <RightBottom></RightBottom>
      </el-container>
  </el-container>
</template>

<script>
//引入组件
//引入左侧菜单组件
import LeftMenu from '../components/LeftMenu'
//引入右侧顶部组件
import RightTop from '../components/RightTop'
//引入右侧底部组件
import RightBottom from '../components/RightBottom'


export default {
    data(){
        return{
           tableData:[
               {sortname:'舒肤佳'},
               {sortname:'舒肤佳'},
               {sortname:'舒肤佳'},
               {sortname:'舒肤佳'},
               {sortname:'舒肤佳'},
               {sortname:'舒肤佳'}
           ]
        }
    },
    components: {
        //注册组件
        LeftMenu,
        RightTop,
        RightBottom
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    }
    
};
</script>

<style>

</style>

