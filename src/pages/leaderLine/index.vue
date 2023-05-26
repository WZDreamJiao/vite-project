<template>
  <div></div>
</template>

<script setup>
const data = {
  nodes: [
    {
      id: "0",
      label: "0",
      state: "success",
      description: "This is node-2.",
      subdescription: "This is subdescription of node-2.",
    },
    {
      id: "1",
      label: "1",
      state: "success",
      description: "This is node-2.",
      subdescription: "This is subdescription of node-2.",
    },
    {
      id: "2",
      label: "2",
      state: "success",
      description: "This is node-2.",
      subdescription: "This is subdescription of node-2.",
    },
    {
      id: "3",
      label: "3",
      state: "loading",
      description: "This is node-2.",
      subdescription: "This is subdescription of node-2.",
    },
    {
      id: "4",
      label: "4",
      state: "loading",
      description: "This is node-2.",
      subdescription: "This is subdescription of node-2.",
    },
    {
      id: "5",
      label: "5",
      state: "loading",
      description: "This is node-2.",
      subdescription: "This is subdescription of node-2.",
    },
    {
      id: "6",
      label: "6",
      state: "success",
      description: "This is node-2.",
      subdescription: "This is subdescription of node-2.",
    },
    {
      id: "7",
      label: "7",
      state: "loading",
      description: "This is node-2.",
      subdescription: "This is subdescription of node-2.",
    },
    {
      id: "8",
      label: "8",
      state: "success",
      description: "This is node-2.",
      subdescription: "This is subdescription of node-2.",
    },
    {
      id: "9",
      label: "9",
      state: "success",
      description: "This is node-2.",
      subdescription: "This is subdescription of node-2.",
    },
  ]
}
const result = Boolean(data.nodes.filter(item => {
  return (item.id == 7 && item.state === "loading")
}).length)
console.log(result)
</script>

<style scoped>

</style>
