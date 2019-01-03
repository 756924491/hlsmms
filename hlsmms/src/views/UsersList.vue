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
                    <h4>账号管理</h4>
                </div>
                <!-- 账号列表 -->
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column label="用户id" width="180">
                        <template slot-scope="scope">{{ scope.row.userid }}</template>
                    </el-table-column>
                    <el-table-column label="用户账号" width="180">
                        <template slot-scope="scope">{{ scope.row.username }}</template>
                    </el-table-column>
                    <el-table-column label="添加日期" width="180">
                        <!-- 用过滤器格式化添加日期 -->
                        <template slot-scope="scope">{{ scope.row.addDate | foramtDate }}</template>
                    </el-table-column>
                    <el-table-column label="用户组" width="180">
                        <template slot-scope="scope">{{ scope.row.usergroup }}</template>
                    </el-table-column>
                    <el-table-column label="管理"  width="180"  align='center'>
                        <template slot-scope="scope">
                            <el-button size="mini"  @click="handleEdit(scope.row.userid)"><i class="el-icon-edit"></i> 编辑</el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.row.userid)"><i class="el-icon-delete"></i> 删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
              </el-card>
          </el-main>
          <!-- 右边底部 -->
          <RightBottom></RightBottom>
      </el-container>
      <!-- 对话框 -->
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
             <el-form label-position='top' :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名：" prop="username">
                    <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="userpwd">
                    <el-input type="password" v-model="ruleForm2.userpwd" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="选择用户组：" prop="usergroup">
                    <el-select v-model="ruleForm2.usergroup" placeholder="请选择用户组">
                    <el-option label="超级管理员" value="超级管理员"></el-option>
                    <el-option label="普通管理员" value="普通管理员"></el-option>
                    </el-select>
                </el-form-item>
             </el-form>
             <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('ruleForm2')">确 定</el-button>
             </span>
      </el-dialog>
  </el-container>
</template>

<script>
//引入组件
//引入左侧菜单组件
import LeftMenu from '../components/LeftMenu';
//引入右侧顶部组件
import RightTop from '../components/RightTop';
//引入右侧底部组件
import RightBottom from '../components/RightBottom';

//引入 moment 模块处理时间
import moment from 'moment';


export default {
    data(){
        return {
            tableData: [],
            ruleForm2: {
                userpwd: '',
                username:'',
                usergroup:''
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
                ],
                usergroup:[
                    { required: true, message: '请选择用户组', trigger: 'change' }
                ]
            },
            //对话框显示或隐藏
            dialogVisible: false,

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
                    //验证成功，发送 ajax
                    this.axios.post('http://127.0.0.1:9090/users/usersave',this.qs.stringify(this.ruleForm2))
                    .then(result => {
                        //根据后台返回的数据判断修改成功或失败
                        if(result.data.isOk){
                            //修改成功弹出的消息
                            this.$message({
                                message: result.data.msg,
                                type: 'success'
                            });
                            //修改成功后，关闭对话框
                            this.dialogVisible = false;
                            //刷新 用户列表
                            this.getusers()
                        }else{
                            //修改失败弹出的消息
                            this.$message.error('错了：'+result.datar.msg);
                        }                        
                    }).catch(err => {
                        this.$message.error('错了：'+err.message);
                    })
                }
            });
        },
        //对话框是否关闭的方法
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
        
        //编辑按钮
        handleEdit(userid) {
            //console.log(userid);
            //发送 ajax get方式，拿旧数据 （根据 id）
            this.axios.get('http://127.0.0.1:9090/users/getuserbyid?userid='+userid)
            .then(oldUserData => {
                //console.log(oldUserData);
                //接收后端传回来的数据
                this.ruleForm2=oldUserData.data[0];
                //显示对话框
                this.dialogVisible=true;
            }).catch(err => {
                this.$message.error('错了：'+err.message);
            })
        },
        //删除按钮
        handleDelete(userid) {
            console.log(userid);
            //发送 ajax 给后端 传入 userid 
            this.axios.get(`http://127.0.0.1:9090/users/userdel?userid=${userid}`)
            .then(result => {
                //console.log(result);
                //根据后端返回的结果判断是否删除成功
                result = result.data;
                //console.log(result);
                
                if(result.isOk){
                    //删除成功
                    this.$message({
                        message: result.msg,
                        type: 'success'
                    });
                    //刷新当前页面
                    this.getusers();
                }else{
                    //删除失败
                    this.$message.error('出错了：'+result.msg);
                }
            })
            .catch(err => {
                this.$message.error('出错了：'+err.message)
            })
        },
        //获取用户数据的方法
        getusers(){
            //没有参数，与没有密码，所以发送get方式
            this.axios.get('http://127.0.0.1:9090/users/userslist')
            .then(result => {
                //console.log(result);
                //将数据库返回的数据赋值给数据模板， 注意这里需要加 this 才能找到 tableData
                this.tableData = result.data;
            })
            .catch(err =>{
                console.log(err.message);
            })
        }
    },

    filters:{
        //处理日期的函数
        foramtDate(oldDate){
            //返回处理后的结果
            return moment(oldDate).format("YYYY年MM月DD日");
        }
    },
    //钩子函数，发送ajax，刷新用户列表
    created(){
        this.getusers()
    }

    
};
</script>

<style>

</style>

