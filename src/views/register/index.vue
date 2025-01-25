<script setup lang="ts">

import {reactive} from "vue";
const form =reactive({
  username: "",
  password: "",
})
</script>

<template>
  <div class="disk_register">
    <div class="banner"></div>
    <div class="register_from">
     <el-form :model="form">
       <el-form-item prop="username">
         <el-input v-model="form.username" placeholder="用户名" />
       </el-form-item>

       <el-form-item prop="password" class="item_password">
         <el-input v-model="form.password" placeholder="密码" type="password" />
       </el-form-item>

       <el-form-item class="item_btn">
        <el-button style="width: 100%" type="primary" >注册</el-button>
       </el-form-item>
     </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.disk_register {
  width: 500px;
  height: 406px;
  background-color: rgba(0, 253, 232, 0.16);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);

  .banner {
    height: 160px;
    width: 100%;
    background-color: #005bfd;

    &::after {
      content: "Network disk";
      position: absolute;
      top:32%;
      left:50%;
      transform: translate(-50%,-50%);
      color: #fd0022;
      font-size: 3rem;
    }
  }
  .register_from {
    padding: 20px 80px;
    .item_btn{
      margin-bottom:16px;
    }
  }
}
</style>