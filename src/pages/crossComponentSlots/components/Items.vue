<template>
  <div class="items">
    <It>
      <slot></slot>
    </It>
  </div>
</template>

<script setup>

import It from "@/pages/crossComponentSlots/components/It.vue";
</script>

<style scoped>
.items {
  background-color: #67c23a;
}

</style>
