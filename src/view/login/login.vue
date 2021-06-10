<template>
  <!-- 最外层标签的class名字使用组件名 -->
  <div class="login">
    <div class="left">
      <div class="title">
        <img src="@/assets/img/loginLogo.png" alt="" />
        <span class="titleName">黑马面面</span>
        <span class="titleLine">|</span>
        <span class="titleName2">用户登录</span>
      </div>
      <!-- 
      1:加一个el-form表单,再加入子项el-form-item
         :model属性, 绑定表单元素的值
      2:在el-form-item下加入一个el-input 
         v-model双向绑定表单元素的值
         placeholder  
         prefix-icon  input前面图标 
         show-password是否显示密码图标,以点点形式显示  

      加入表单验证
         1: 实现基本布局与数据绑定
         2: 在el-form上绑定一个rules属性  rules属性的值要是一个对象
         3: 在需要验证的项的el-form-item上定义一个prop属性，prop的值为该项内表单v-model绑定的值
         4: 在rules里写相应项的验证规则
             [{ required:true,message:"手机号必填",trigger:"change" }] 

      登录的点击校验
         1.在el-form上定义一个ref  ref="值"
         2.为登录按钮绑定一个事件
         3.调用el-form的表单验证方法
           this.$refs.form.validate(result=>{
             result它是一个boolean值,
             true验证通过
             false表示   验证不通过
           })       

            
      -->
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item prop="phone">
          <el-input
            prefix-icon="el-icon-user"
            v-model="form.phone"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            :show-password="true"
            prefix-icon="el-icon-lock"
            v-model="form.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>

        <!-- 
        栅栏处理共24栏
        el-row:行
           它有一个子项是el-col 代表栏 多少栏 :span="栏数"   
        -->
        <el-form-item prop="code">
          <el-row>
            <el-col :span="16">
              <el-input
                v-model="form.code"
                prefix-icon="el-icon-key"
                placeholder="请输入验证码"
              />
            </el-col>

            <el-col :span="8">
              <img src="@/assets/img/key.jpg" class="key" alt="" />
            </el-col>
          </el-row>
        </el-form-item>

        <!-- 
          el-checkbox
          v-model默认值可以来一个空字符串,这样的选择结果就是true/false
          el-link   type决定颜色
        -->
        <el-form-item>
          <el-checkbox v-model="form.isCheck">
            我已阅读并同意
            <el-link type="primary">用户隐私</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <!-- 
          el-button 
          type="值" 值决定按钮的颜色
        -->
        <el-form-item>
          <el-button class="btn" type="primary" @click="login">登录</el-button>
          <br />
          <el-button class="btn" type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="right">
      <img src="@/assets/img/login_banner_ele.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        phone: "", // 手机号
        password: "", // 电话
        code: "", // 验证码
        isCheck: "", // 是否同意
      },
      // 表单验证规则
      rules:{
        phone: [{ required:true,message:"请输入手机号",trigger:'change' }],
        password: [{ required:true,message:"请输入密码",trigger:'change' },
        {
          min:6,
          max:12,
          message:"请输入6到12位长度密码",
          trigger:"change"
        }
        ],
        code: [{ required:true,message:"请输入验证码",trigger:'change' },
        {
          min:4,
          max:4,
          message:"请输入4位验证码",
          trigger:"change"
        }
        ]
      }
    };
  },
  methods:{
    login(){
      this.$refs.form.validate(result => {
        this.$message.success(result + "")
      }) 
    }

  }
};
</script>

<style lang="less">
.login {
  /* 弹性盒子布局 */
  display: flex;
  // 主轴布局
  justify-content: space-around; //  中间空出的内容宽度是两侧两倍
  // 纵轴
  align-items: center;
  height: 100%;
  //   width: 1400px;
  //   height: 788px;
  background: linear-gradient(225deg, #1493fa, #01c6fa);
  .left {
    width: 478px;
    height: 550px;
    background: #f5f5f5;
    padding: 43px;
    .title {
      margin-bottom: 20px;
      .titleName {
        font-size: 24px;
        margin-left: 15px;
        margin-right: 15px;
        font-weight: 400;
        color: #0c0c0c;
      }
      .titleLine {
        color: #ccc;
        font-size: 24px;
      }
      .titleName2 {
        font-size: 22px;
        margin-left: 15px;
      }
    }
    .btn {
      width: 100%;
    }
    .btn:nth-child(1){
      margin-bottom: 26px;
    }
  }
}
</style>