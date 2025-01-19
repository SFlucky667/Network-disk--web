<script setup lang="ts">
import {reactive} from "vue";
import { ElMessage, type FormRules } from 'element-plus';

type RuleForm=IAuthLoginRequest;
const form=reactive<RuleForm>({
  username: '',
  password: '',
}) ;
const rules=reactive<RuleForm>({
  username: [{required:true,message:"请输入用户名",trigger:'blur'}],
  password: [{requied:true,message:"请输入密码",trigger:'blur'}],
});
const formRules=ref();
</script>

<template>
  <div class="disk_login">
    <div class="banner">
    </div>
    <div class="login_from">
      <el-form ref="formRef" :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.userName" placeholder="用户名"/>
        </el-form-item>
        <el-form-item class="item_password">
          <el-input v-model="form.password" type="password" placeholder="密码"/>
        </el-form-item>
        <el-form-item class="item_action">
        <el-checkbox>记住密码</el-checkbox>
        </el-form-item>
        <el-form-item class="item_btn">
        <el-button style="width: 100%" type="primary">登录</el-button>
        </el-form-item>
      <div class="register_link">
        <router-link to="/register">没账号？立即注册</router-link>
      </div>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss">
 .disk_login {
   width: 500px;
   height: 406px;
   background-color: white;
   border-radius: 5px;
   overflow: hidden;
   box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);

   .banner {
     height: 140px;
     width: 100%;
     background-color: #0084fd;

     &::after {
         content: "Network disk";
       position: absolute;
       top:50%;
       left:50%;
       transform: translate(-50%,-50%);
       color: darkblue;
       font-size: 2rem;
     }
   }
   .login_from {
     padding: 20px 80px;
      .item_password, .item_action ,.item_btn{
        margin-bottom:6px;
      }
   }
 }
</style>