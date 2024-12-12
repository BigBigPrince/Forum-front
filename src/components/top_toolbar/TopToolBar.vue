<template>
  <div class="top_toolbar">
    <div id="topBar-logo"></div>
    <div class="toolBar-container"></div>
    <div class="userInfo"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TopToolBar',
}
</script>

<script lang="ts" setup>

</script>

<style scoped>
.top_toolbar {
  top: 0;
  position: fixed;
  width: 100%;
  height: 50px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 100
}
#topBar-logo {
  position: absolute;
  width: 120px;
  height: 100%;
  background-color: skyblue;
}
.toolBar-container {
  position: absolute;
  left: 150px;
  height: 100%;
  width: 600px;
  background-color: skyblue;
}
</style>
