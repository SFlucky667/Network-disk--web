<script setup lang="ts">
import {reactive} from "vue";
const form = reactive({
  userName: "",
  password: "",
})
</script>

<template>
  <div class="disk_login">
    <div class="banner">
    </div>
    <div class="login_from">
      <el-form  :model="form" >
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

      </el-form>
    </div>
  </div>
</template>

<style lang="scss">
 .disk_login {
   width: 500px;
   height: 406px;
   background-color: rgba(0, 253, 232, 0.16);
   border-radius: 5px;
   overflow: hidden;
   box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);

   .banner {
     height: 140px;
     width: 100%;
     background-color: #0094fd;

     &::after {
         content: "Network disk";
       position: absolute;
       top:30%;
       left:50%;
       transform: translate(-50%,-50%);
       color: #fd0022;
       font-size: 3rem;
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