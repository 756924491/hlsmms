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
                    <h4>添加管理员账号</h4>
                </div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column label="用户名称" width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="用户组" width="180">
                        <template slot-scope="scope">
                            <el-popover trigger="hover" placement="top">
                            <p>姓名: {{ scope.row.name }}</p>
                            <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">{{ scope.row.name }}</el-tag>
                            </div>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column label="管理">
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
        return {
            tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
            }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
            }]
      }
    },
    components: {
        //注册组件
        LeftMenu,
        RightTop,
        RightBottom
    },

    
};
</script>

<style>

</style>

