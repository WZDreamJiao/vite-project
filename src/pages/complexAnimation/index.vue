<template>
  <div class="container">
    <div class="ball" ref="ball"></div>
    <div class="slider-demo-block">
      <el-slider v-model="value" :format-tooltip="formatTooltip"/>
    </div>
  </div>
</template>

<script setup>

const ball = ref()
const value = ref(0)

const formatTooltip = (val) => {
  ball.value?.style.setProperty("--delay", `-${val * 2}s`);
  return val * 2
}
</script>

<style scoped>
.ball {
  --delay: 0s;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #409eff;
  animation: move 200s var(--delay) linear forwards paused;
  clip-path: polygon(0 70%, 0% 100%, 100% 100%, 100% 0%);
}


.slider-demo-block {
  width: 200px;
}

:deep(.el-slider) {
  margin: 50px 12px 0;
}

@keyframes move {
  50% {
    transform: translate(100px) scale(1.5);
  }
  100% {
    transform: translate(200px) scale(1);
  }

}

</style>