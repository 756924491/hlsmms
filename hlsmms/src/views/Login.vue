/* 模板 */
<template>
    <!-- 用盒子把登录板块包起来，方便设置整个背景色  -->
    <div id="loginbox">
    <!-- 从element上复制卡片效果代码 -->
        <el-card class="box-card" id="login">
            <div slot="header" class="clearfix">
                <h2 align='center'>用户登录</h2>
            </div>
            <div class="text item">
            <!-- 放置表单 -->
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="username">
                        <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="userpwd">
                        <el-input type="password" v-model="ruleForm2.userpwd" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>  
</template>

<script>
//导出数据，做效果，验证等等
export default {
    data() {
        return {
            ruleForm2: {
                userpwd: '',
                username:''
            },
            rules2: {
                userpwd: [
                    //设置密码的验证规则    
                    { required:true, message:'密码不能为空',trigger: 'blur' }, //非空验证
                    { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }  //长度验证
                ],
                username:[
                    //设置用户名的验证规则
                    { required:true, message:'用户名不能为空', trigger: 'blur' },  //非空验证
                    { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }  // 长度验证
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
        //登录按钮点击事件
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    //发送ajax前，必须要携带证书
                    this.axios.defaults.withCredentials=true;
                    //发送  ajax  到后端验证用户名和密码的有效性
                        //console.log(this.ruleForm2);
                    this.axios.post(
                        'http://127.0.0.1:9090/users/checklogin',
                        this.qs.stringify(this.ruleForm2)
                        
                    )
                    .then(result => {
                        //根据后台返回的结果判断登录成功或失败
                        if(result.data.isOk){
                            this.$message({
                                message:'恭喜你'+result.data.msg,
                                type: 'success',
                            });
                        //实现跳转效果
                        this.$router.push('/')
                        }else{
                            this.$message.error(result.data.msg);
                        }
                    }).catch(err => {
                        this.$message.error(err.message);
                    })
                    
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
};
</script>

<style scoped>
/* 本页样式 */
#login{
    width: 400px;height: 300px;
    /* 垂直、水平绝对居中 */
    position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;
}
#loginbox{
    background: #ccc;
}
</style>

