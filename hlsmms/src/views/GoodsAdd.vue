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
                <el-form id='goodsadd' :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="商品分类" prop="classname">
                        <el-select v-model="ruleForm.classname" placeholder="请选择分类">
                        <el-option label="零食" value="零食"></el-option>
                        <el-option label="酒水" value="酒水"></el-option>
                        <el-option label="烟草" value="烟草"></el-option>
                        <el-option label="服装" value="服装"></el-option>
                        <el-option label="糖果" value="糖果"></el-option>
                        <el-option label="首饰" value="首饰"></el-option>
                        <el-option label="护肤品" value="护肤品"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="商品条形码" prop="barcode">
                        <el-input v-model="ruleForm.barcode"></el-input>
                        <el-button type="success" @click="createBarcode()">生成条码</el-button>
                    </el-form-item>
                    <el-form-item label="商品名称" prop="goodsname">
                        <el-input v-model="ruleForm.goodsname"></el-input>
                    </el-form-item>
                    <el-form-item label="商品进价" prop="costprice">
                        <el-input v-model="ruleForm.costprice" @blur="updatePrice()"></el-input>
                    </el-form-item>
                    <el-form-item label="商品售价" prop="saleprice">
                        <el-input v-model="ruleForm.saleprice"></el-input>
                    </el-form-item>
                    <el-form-item label="市场价" prop="marketprice">
                        <el-input v-model="ruleForm.marketprice"></el-input>
                    </el-form-item>
                    <el-form-item label="入库数量" prop="stocknum">
                        <el-input v-model="ruleForm.stocknum"></el-input>
                    </el-form-item>
                    <el-form-item label="商品重量" prop="weight">
                        <el-input v-model="ruleForm.weight"></el-input>
                    </el-form-item>
                    <el-form-item label="商品单位" prop="unit">
                        <el-input v-model="ruleForm.unit"></el-input>
                    </el-form-item>
                    <el-form-item label="会员优惠" prop="isdiscount">
                        <el-radio-group v-model="ruleForm.isdiscount">
                        <el-radio label='1'>享受</el-radio>
                        <el-radio label='0'>不享受</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否促销" prop="ispromotion">
                        <el-radio-group v-model="ruleForm.ispromotion">
                        <el-radio label='1'>启用</el-radio>
                        <el-radio label='0'>禁用</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="商品简介" prop="details">
                        <el-input type="textarea" row=5 v-model="ruleForm.details"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
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
        return{
            ruleForm: {
                classname: '',
                barcode: '',
                goodsname: '',
                costprice: 0,
                saleprice: 0,
                marketprice: 0,
                stocknum: 0,
                weight:'',
                unit:'',
                isdiscount:'0',
                ispromotion:'0',
                details:''
            },
            rules: {
                classname: [
                    { required: true, message: '请输入商品分类', trigger: 'blur' }
                ],
                barcode: [
                    { required: true, message: '请输入商品条形码', trigger: 'blur' }
                ],
                goodsname: [
                    { required: true, message: '请输入商品名称', trigger: 'blur' }
                ],
                costprice: [
                    { required: true, message: '请输入商品进价', trigger: 'blur' }
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
    methods:{
        //提交表单的方法
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                //表单验证通过，发送 ajax  提交到后端，保存数据
                this.axios.post('http://127.0.0.1:9090/goods/goodsadd',this.qs.stringify(this.ruleForm)) 
                .then(result => {
                    //根据后端返回的数据判断是否添加成功
                    if(result.data.isOk){
                        //弹出添加成功的提示框
                        this.$message({
                            message:result.data.msg,
                            type:'success'
                        });

                        //弹出是否继续添加的提示框
                        this.$confirm('是否继续添加?', '提示', {
                            confirmButtonText: '是',
                            cancelButtonText: '否',
                            type: 'warning'
                        }).then(() => {
                            //确认继续添加的代码
                            //初始化表单
                            this.ruleForm={
                                classname: "",
                                barcode: "",
                                goodsname: "",
                                saleprice: 0,
                                marketprice: 0,
                                costprice: 0,
                                stocknum: 0,
                                weight: "",
                                unit: "",
                                isdiscount: "1",
                                ispromotion: "0",
                                details: ""
                            };
                        }).catch(() => {
                            //不再添加的代码，跳转到商品列表页
                            this.$router.push('/goodslist')         
                        });
                        
                    }else{
                        this.$message.error(result.data.msg)
                    }
                }).catch(err => {
                    console.error(err.message)
                })
            } else {
                console.log('error submit!!');
                return false;
            }
            });
         },
        createBarcode(){
            this.ruleForm.barcode = new Date().getTime(); //用时间戳生成商品条形码 
        },
        updatePrice(){
            //市场价等于进价的3倍，销售价等于市场价的0.8倍
            this.ruleForm.marketprice = this.ruleForm.costprice*3;
            this.ruleForm.saleprice = this.ruleForm.marketprice*0.8;
        }
    }
}
</script>

<style>
#goodsadd .el-input{
    width: 200px;
}
</style>

