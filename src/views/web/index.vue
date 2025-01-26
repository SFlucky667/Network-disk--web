<script setup lang="ts">

</script>

<template>
    <div class="disk_web">
      <div class="disk_header">
        <div class="avatar">

        </div>
      </div>
      <div class="disk_slide">
        <div class="avatar">
          <img src="@assets/img.png" alt="" />
        </div>
        <div class="disk_menus">
      </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
.disk_web {
  width: 1000px;
  height:600px;
  background-color: rgba(253, 253, 253, 0.22);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 5px 3px rgba(0,0,0,0.05);
  display: flex;
}
.disk_header {
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 5px 8px rgba(0,0,0,0.05);

}
  .disk_slide {
    width: 10%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction:column;
    align-items: center;
    padding: 0 0;
    order:-1;
    box-shadow: 0 0 5px 8px rgba(0,0,0,0.05);
    .avatar {
      width: 65px;
      height: 65px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
}
</style>