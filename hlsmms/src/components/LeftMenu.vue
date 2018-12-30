<template>
     <el-aside width='230px'>
          <div id="leftTitle">
            <h2>华联超市管理系统</h2>
            <p><span>您好，</span><span>admin</span></p>
            <p><a href="">管理首页</a> | <a href="">退出系统</a></p>
          </div>
          <el-menu :default-active="$route.path"  :unique-opened ='true' class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose">
              <el-submenu index="1">
                  <template slot="title">
                      <span>分类管理</span>
                  </template>
                  <el-menu-item-group>
                      <el-menu-item index="/sortlist"><router-link to='/sortlist'>分类管理</router-link></el-menu-item>
                      <el-menu-item index="/sortadd"><router-link to='/sortadd'>添加分类</router-link></el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                  <template slot="title">
                      <span>商品管理</span>
                  </template>
                  <el-menu-item-group>
                      <el-menu-item index="/goodslist"><router-link to='/goodslist'>商品管理</router-link></el-menu-item>
                      <el-menu-item index="/goodsadd"><router-link to='/goodsadd'>添加商品</router-link></el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                  <template slot="title">
                      <span>进货管理</span>
                  </template>
                  <el-menu-item-group>
                      <el-menu-item index="3-1"><router-link to='/ '>库存管理</router-link></el-menu-item>
                      <el-menu-item index="3-2"><router-link to=' /'>添加库存</router-link></el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                  <template slot="title">
                      <span>出货管理</span>
                  </template>
                  <el-menu-item-group>
                      <el-menu-item index="4-1"><router-link to='/ '>销售列表</router-link></el-menu-item>
                      <el-menu-item index="4-2"><router-link to='/ '>商品出库</router-link></el-menu-item>
                      <el-menu-item index="4-3"><router-link to='/ '>商品退货</router-link></el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
              <el-submenu index="5">
                  <template slot="title">
                      <span>统计管理</span>
                  </template>
                  <el-menu-item-group>
                      <el-menu-item index="5-1"><router-link to='/'>销售统计</router-link></el-menu-item>
                      <el-menu-item index="5-2"><router-link to='/ '>进货统计</router-link></el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
              <el-submenu index="6">
                  <template slot="title">
                      <span>账号管理</span>
                  </template>
                  <el-menu-item-group>
                      <el-menu-item index="/userlist"><router-link to='/userlist'>账号管理</router-link></el-menu-item>
                      <el-menu-item index="/useradd"><router-link to='/useradd'>添加账号</router-link></el-menu-item>
                      <el-menu-item index="/pwdedit"><router-link to='/pwdedit'>密码修改</router-link></el-menu-item>
                  </el-menu-item-group>
              </el-submenu> 
              <el-submenu index="7">
                  <template slot="title">
                      <span>会员管理</span>
                  </template>
                  <el-menu-item-group>
                      <el-menu-item index="7-1"><router-link to=' /'>账号管理</router-link></el-menu-item>
                      <el-menu-item index="7-2"><router-link to='/ '>添加账号</router-link></el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
              <el-submenu index="8">
                  <template slot="title">
                      <span>系统管理</span>
                  </template>
                  <el-menu-item-group>
                      <el-menu-item index="/systemMsg"><router-link to='/systemmsg'>系统信息</router-link></el-menu-item>
                      <el-menu-item index="8-2"><router-link to='/ '>系统配置</router-link></el-menu-item>
                      <el-menu-item index="8-3"><router-link to='/ '>权限管理</router-link></el-menu-item>
                      <el-menu-item index="8-4"><router-link to=' /'>添加管理组</router-link></el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
          </el-menu>
      </el-aside>
    
</template>

<script>
export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style>


</style>
