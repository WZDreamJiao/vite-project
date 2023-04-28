<template>
  <div>
      <el-icon v-html="getIcon(`${name}`)"></el-icon>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: ""
  },
});
</script>

<style scoped></style>
