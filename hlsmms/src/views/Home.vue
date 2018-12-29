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
                    <h4>主页</h4>
                </div>
                <el-alert title="成功提示的文案" type="success"></el-alert>
                <el-alert title="消息提示的文案" type="info"> </el-alert>
                <div class="text item">
                    <el-row :gutter="40">
                        <el-col :span="12">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <h4>销售排行</h4>
                                </div>
                                <div class="text item">
                                    <el-table :data="tableData"  style="width: 100%">
                                        <el-table-column prop="goodsname" label="商品名称" align='center'> </el-table-column>
                                        <el-table-column prop="salenum" label="销量" align='center'> </el-table-column>
                                    </el-table>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="12">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <h4>缺货的商品</h4>
                                </div>
                                <div class="text item">
                                    <el-table :data="shortageData"  style="width: 100%">
                                        <el-table-column prop="goodsname" label="商品名称" align='center'> </el-table-column>
                                        <el-table-column prop="stocknum" label="库存" align='center'> </el-table-column>
                                        <el-table-column label="操作">
                                            <el-button size="mini" @click='handleEdit(scope.$index, scope.row)'> 编辑 </el-button>
                                        </el-table-column>
                                    </el-table>                                    
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
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
                {goodsname:'海飞丝去屑洗发水',salenum:'8'},
                {goodsname:'海飞丝去屑洗发水',salenum:'8'},
                {goodsname:'海飞丝去屑洗发水',salenum:'8'},
                {goodsname:'海飞丝去屑洗发水',salenum:'8'}
            ],
            shortageData:[
                {goodsname:'海飞丝去屑洗发水',stocknum:'0'},
                {goodsname:'海飞丝去屑洗发水',stocknum:'0'},
                {goodsname:'海飞丝去屑洗发水',stocknum:'0'}
            ]
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

