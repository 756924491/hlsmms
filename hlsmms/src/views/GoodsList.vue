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
                    <h4>商品管理</h4>
                </div>
                <!-- 搜索 -->
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="">
                        <el-select v-model="formInline.region" placeholder="-----------选择分类---------------">
                        <el-option label="分类一" value="分类一"></el-option>
                        <el-option label="分类二" value="分类二"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="关键字">
                        <el-input v-model="formInline.user" ></el-input>
                    </el-form-item>
                    <span class="detail">（商品名称、条形码）</span>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>

                <hr>
                <!-- 商品列表 -->
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column label="商品条形码" width='120'>
                        <template slot-scope="scope">{{ scope.row.goodsnum }}</template>
                    </el-table-column>
                    <el-table-column label="商品名称" width='100'>
                        <template slot-scope="scope">{{ scope.row.goodsname }}</template>
                    </el-table-column>
                    <el-table-column label="所属分类" width='100'>
                        <template slot-scope="scope">{{ scope.row.sortname }}</template>
                    </el-table-column>
                    <el-table-column label="售价（元）" width='95'>
                        <template slot-scope="scope">{{ scope.row.price }}</template>
                    </el-table-column>
                    <el-table-column label="促销价（元）" width='95'>
                        <template slot-scope="scope">{{ scope.row.sale }}</template>
                    </el-table-column>
                    <el-table-column label="市场价（元）" width='95'>
                        <template slot-scope="scope">{{ scope.row.marketprice }}</template>
                    </el-table-column>
                    <el-table-column label="库存" width='60'>
                        <template slot-scope="scope">{{ scope.row.sort }}</template>
                    </el-table-column>
                    <el-table-column label="库存总额（元）" width='110'>
                        <template slot-scope="scope">{{ scope.row.allsort }}</template>
                    </el-table-column>
                    <el-table-column label="销售总额（元）" width='110'>
                        <template slot-scope="scope">{{ scope.row.allprice }}</template>
                    </el-table-column>
                    <el-table-column label="管理"  width='160'>
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
            formInline: {
                user: '',
                region: '',
                goodsnum:'',
                goodsname:'',
                sortname:'',
                price:'',
                sale:'',
                marketprice:'',
                sort:'',
                allsort:'',
                allprice:''
 
            },
           tableData: [
                {
                    goodsnum:'6911989262549',
                    goodsname:'优乐美',
                    sortname:'优乐美',
                    price:'5.00',
                    sale:'未促销',
                    marketprice:'5.50',
                    sort:'0（缺）',
                    allsort:'0.00',
                    allprice:'0.00'
                }
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
      onSubmit() {
        console.log('submit!');
      },
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

.detail{
    font-size: 12px;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    vertical-align: middle
}
.el-table{
    font-size: 10px!important;
}
.el-table .cell{
    padding: 0;
}
</style>

