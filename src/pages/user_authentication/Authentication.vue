<template>
  <div class="authentication">
    <div class="authBox">
      <div ref="barRef" class="bar" v-for="(item, index) in items" :key="index" :style="{'--spacing-y': spacingY(index) + 'px',  'background-color': `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`, 'animation-duration': (Math.random() * 0.5 + 1).toFixed(1) + 's', 'transition-duration': (Math.random() * 0.5 + 1).toFixed(1) + 's'   }"></div>
      <div class="changeMode_Auto_One" @click="changeMode" ref="changeModeRefOne">
        <div ref="modeIndicate" id="changeFont">
          <span ref="indicateFont" class="unselectable">{{ showMode }}</span>
        </div>
      </div>
      <component :is="currentComponent" class="showIndex"></component>
      <div class="changeMode_Auto_Second" @click="changeMode" ref="changeModeRefSecond">
        <div ref="modeIndicate" id="changeFont">
          <span ref="indicateFont" class="unselectable">{{ showMode }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Authentication',
}
</script>

<script lang="ts" setup>
import {computed, ref} from "vue";
import Register from "@/pages/user_authentication/Register.vue";
import Login from "@/pages/user_authentication/Login.vue";
const items = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
const spacingY = (index) => index * 61;
let mode = ref(true);
const currentComponent = computed(() => {
  return mode.value? Login : Register;
});
const showMode = ref("注册");
let changeModeRefOne = ref<HTMLElement | null>(null);
let barRef = ref<HTMLElement | null>(null);
let modeIndicate = ref<HTMLElement | null>(null);
let indicateFont = ref<HTMLElement | null>(null);
let changeModeRefSecond = ref<HTMLElement | null>(null);
function changePage() {
  mode.value = !mode.value;
}
function changeMode() {
  const s = barRef.value;
  if (changeShowMode()) {
    if (Array.isArray(s)) {
      s.forEach((element, index) => {
        element.style.top = "500px";
      });
    }
    setTimeout(changePage, 300);
    changeModeIndicate(true);
    changeIndicateFont(true);
  } else {
    if (Array.isArray(s)) {
      s.forEach((element, index) => {
        element.style.top = "-500px";
      });
    }
    setTimeout(changePage, 300);
    changeModeIndicate(false);
    changeIndicateFont(false);
  }

}
function changeShowMode() {
  if (showMode.value === "注册") {
    modeIndicate.value.style.marginTop = "0";
    showMode.value = "登录";
    return true;
  } else {
    modeIndicate.value.style.marginTop = "";
    showMode.value = "注册";
    return false;
  }
}
function changeModeIndicate(boolean) {
  if (boolean === true) {
    changeModeRefOne.value.style.top = "0";
    changeModeRefOne.value.style.left = "0";
    changeModeRefOne.value.style.marginLeft = "-50%";
    changeModeRefOne.value.style.marginTop = "-50%";
    changeModeRefSecond.value.style.top = "0";
    changeModeRefSecond.value.style.left = "0";
    changeModeRefSecond.value.style.marginLeft = "86%";
    changeModeRefSecond.value.style.marginTop = "43%";
  } else if (boolean === false) {
    changeModeRefOne.value.style.top = "-120px";
    changeModeRefOne.value.style.left = "-120px";
    changeModeRefOne.value.style.marginLeft = "0";
    changeModeRefOne.value.style.marginTop = "0";
    changeModeRefSecond.value.style.top = "";
    changeModeRefSecond.value.style.left = "";
    changeModeRefSecond.value.style.marginLeft = "";
    changeModeRefSecond.value.style.marginTop = "";
  }
}
function changeIndicateFont(boolean) {
  if (boolean === true) {
    indicateFont.value.style.marginBottom = "30px";
    indicateFont.value.style.marginTop = "0";
  } else if (boolean === false) {
    indicateFont.value.style.marginBottom = "";
    indicateFont.value.style.marginTop = "";
  }
}

</script>

<style scoped>
.authentication {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background: linear-gradient(90deg, #cdcdf8, #a4f6d4);
  overflow-y: hidden;
}
.showIndex {
  display: flex;
}
:root {
  --spacing-x: 0px; /* 这里给了一个初始值0px，你可以根据实际需求替换成具体数值或其他合适的表达式 */
  --spacing-y: 0px;
}
.bar {
  position: absolute;
  background: #a9a9f8;
  width: 60px;
  height: 500px;
  z-index: 100;
  top: -500px;
  border-radius: 30px;
  left: var(--spacing-y);
}
.changeMode_Auto_One {
  display: flex;
  transform: rotate(315deg);
  position: absolute;
  width: 230px;
  height: 230px;
  background-color: #a1fff0;
  left: -120px;
  top: -120px;
  transition: 1s;
}
.changeMode_Auto_Second {
  display: flex;
  transform: rotate(315deg);
  transition: 1s;
  position: absolute;
  width: 230px;
  height: 230px;
  background-color: #a1fff0;
  left: 100px;
  top: 100px;
  margin-left: 86%;
  margin-top: 43%;
}
.changeMode_Auto_Second :hover {
  cursor: pointer;
}
.unselectable {
  -webkit-user-select: none;  /* Chrome, Safari, Opera */
  -moz-user-select: none;  /* Firefox */
  -ms-user-select: none;  /* Internet Explorer/Edge */
  user-select: none;
}
#changeFont {
  width: 100%;
  height: 100px;
  margin-top: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  color: #333333;
  font-weight: bold;
  text-shadow: 1px 1px 2px #cccccc;
}
#changeFont span {
  margin-top: 20%;
  margin-bottom: 20px;
}
.changeMode_Auto_One:hover {
  cursor: pointer;
  transform-origin: center;
  transform: rotate(315deg) scaleY(1.08); /* 先旋转，再在垂直方向放大 */
}
.authBox{
  width: 800px;
  min-width: 800px;
  height: 450px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: center;
}
#logo span {
  font-size: 16px; /* 字体大小 */
  font-weight: bold; /* 字体加粗 */
  font-family: 'Arial', sans-serif; /* 字体 */
  color: black; /* 文字颜色 */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* 文本阴影 */
  letter-spacing: 2px; /* 字间距 */
  display: inline-block; /* 允许动画效果 */
  transition: transform 0.3s ease, color 0.3s ease; /* 动态效果 */
}
</style>
