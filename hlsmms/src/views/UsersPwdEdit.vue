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
                    <h4>密码修改</h4>
                </div>
                <el-form label-position='top' :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="原密码" prop="oldPass">
                        <el-input type="password" v-model="ruleForm2.oldPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="newPass">
                        <el-input type="password" v-model="ruleForm2.newPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
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
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm2.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        var validatePassCheck = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm2.pass) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
        return{
            ruleForm2: {
                oldPass:'',
                newPass: '',
                checkPass: ''
            },
            rules2: {
                oldPass:[
                    { required:true,message:'密码不能为空', trigger: 'blur' },
                    { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }  //长度验证
                ],
                newPass: [
                    { required:true,message:'密码不能为空', trigger: 'blur' },
                    { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }  //长度验证
                ],
                checkPass: [
                    { required:true,message:'密码不能为空', trigger: 'blur' },
                    { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' },  //长度验证
                    { validator: validatePassCheck, trigger: 'blur' }  //密码一致验证
                ]
            }
        };
    },
    components: {
        //注册组件
        LeftMenu,
        RightTop,
        RightBottom
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>

<style>

</style>

