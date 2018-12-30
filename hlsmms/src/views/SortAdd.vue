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
                    <h4>添加分类</h4>
                </div>
                <div class="text item">
                <!-- 放置表单 -->
                    <el-form label-position='top' :model="ruleForm2" status-icon :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="所属分类" prop="sortGroup">
                            <el-select v-model="ruleForm2.sortGroup" placeholder="---------顶级分类--------">
                            <el-option label="超级管理员" value="超级管理员"></el-option>
                            <el-option label="普通管理员" value="普通管理员"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="分类名称：" prop="sortName">
                            <el-input type="password" v-model="ruleForm2.sortName" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="状态：" >
                            <el-radio v-model="radio" label="1">启用</el-radio>
                            <el-radio v-model="radio" label="2">禁用</el-radio>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                        </el-form-item>
                    </el-form>
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
            ruleForm2: {
                sortGroup:'',
                sortName:''
            },
            rules:{
                sortName:[
                    {required:true,message:'必须填写分类',trigger:'blur'}
                ]
            },
            /* 单选框 */
            radio: '1'
        }
    },
    components: {
        //注册组件
        LeftMenu,
        RightTop,
        RightBottom
    },
    methods: {
        submitForm(formName) {
        //
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('前端验证成功!');
                    //发送  ajax  到后端验证用户名和密码的有效性
                    //实现跳转效果
                    this.$router.push('/')
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }   

    
};
</script>

<style>
.el-input{
    width: 240px;
}
</style>

