<template>
  <div class="container">
    <div class="bars-container" :class="{ 'slide-to-bottom': slideToBottom }">
      <div class="bar" v-for="n in 3" :key="n" />
    </div>
    <button @click="toggleSlide">
      Toggle Slide
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const slideToBottom = ref(false);

const toggleSlide = () => {
  slideToBottom.value = !slideToBottom.value;
};
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.bars-container {
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(315deg);
  transition: transform 0.5s ease-in-out;
}

.slide-to-bottom {
  transform: rotate(315deg) translateX(-100%);
}

.bar {
  width: 3px;
  height: 15px;
  background-color: black;
  margin: 2px;
  display: inline-block;
}

button {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>