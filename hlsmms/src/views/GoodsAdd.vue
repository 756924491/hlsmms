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
                    <h4>添加商品</h4>
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

