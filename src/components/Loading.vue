<template>
  <div></div>
</template>

<script setup>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
onMounted(()=>{
  NProgress.start();
})
onUnmounted(()=>{
  NProgress.done();
})
</script>

<style scoped></style>
