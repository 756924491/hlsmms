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
                <div class="text item">
                <!-- 放置表单 -->
                    <el-form label-position='top' :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="用户名：" prop="username">
                            <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="密码：" prop="userpwd">
                            <el-input type="password" v-model="ruleForm2.userpwd" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码：" prop="checkPass">
                            <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="选择用户组：" prop="usergroup">
                            <el-select v-model="ruleForm2.usergroup" placeholder="请选择用户组">
                            <el-option label="超级管理员" value="超级管理员"></el-option>
                            <el-option label="普通管理员" value="普通管理员"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                            <el-button @click="resetForm('ruleForm2')">重置</el-button>
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
        var validatePassCheck = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm2.userpwd) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
        return{
            ruleForm2: {
                userpwd: '',
                username:'',
                checkPass:'',
                usergroup:''
            },
            rules2: {
                userpwd: [
                    //设置密码的验证规则    
                    { required:true, message:'密码不能为空',trigger: 'blur' }, //非空验证
                    { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }  //长度验证
                ],
                checkPass: [
                    //设置密码一致的验证规则    
                    { required:true, message:'密码不能为空',trigger: 'blur' }, //非空验证
                    { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' },  //长度验证
                    { validator: validatePassCheck, trigger: 'blur' }  //密码一致验证
                ],
                username:[
                    //设置用户名的验证规则
                    { required:true, message:'用户名不能为空', trigger: 'blur' },  //非空验证
                    { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }  // 长度验证
                ],
                usergroup:[
                    { required: true, message: '请选择用户组', trigger: 'change' }
                ]
            }
        }
    },
    components: {
        //注册组件
        LeftMenu,
        RightTop,
        RightBottom
    },
    methods: {
        //提交表单的方法
        submitForm(formName) {
            //验证规则后的结果
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('前端验证成功!');
                    //发送  ajax  到后端验证用户名和密码的有效性
                    this.axios.post('http://127.0.0.1:9090/users/usersadd',this.qs.stringify(this.ruleForm2))
                    .then(result =>{
                        //根据返回的结果处理业务逻辑
                        if(result.data.isOk){
                            //添加成功  element中的组件，弹出信息
                            this.$message({
                                message:result.data.msg,
                                type:'success'
                            });
                            setTimeout(() => {
                                //成功后跳转到用户列表  element中的组件，弹出信息
                                this.$router.push("/userlist");
                            }, 100);
                        }else{
                            //添加失败
                            this.$message.error(result.data.msg)
                        }
                        
                    }).catch(err => {
                        console.error('服务器错误返回的信息',err)
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

<style>
.el-form-item{
    margin: 0;
}
.el-input{
    width: 240px;
}
.el-form-item__label{
    padding: 0!important; /* 引入顺序在前面，优先级不够*/
} 
.el-button{
    padding: 6px 14px;
}
.el-button--primary{
    background: linear-gradient(#7ABA00,#459300);
    border-color: #459300;
}
.el-button--primary:hover{
    background: rgba(54, 187, 27) ;
    border-color:rgba(54, 187, 27,.5) ;
}
</style>

