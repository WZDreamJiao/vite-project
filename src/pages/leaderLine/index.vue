<template>
  <div></div>
</template>

<script setup>
const data = ref([
  { name: "1", id: "1" },
  { name: "2", id: "2" },
  { name: "3", id: "3" },
]);

let result = data.value.map((item) => {
  return {
    name: `${item.name}${item.name}`,
  };
});
console.log(result);
</script>

<style scoped></style>
