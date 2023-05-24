<template>
  <div style="width: 300px">
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
      :render-content="renderContent"
    />
  </div>
</template>

<script setup>
import { ElTooltip } from "element-plus";

const handleNodeClick = (data) => {
  console.log(data);
};

const renderContent = (h, { node, data, store }) => {
  return h(
    "div",
    {
      class: "custom-tree-node",
    },
    h(
      ElTooltip,
      {
        effect: "dark",
        content: node.label,
        placement: "top",
      },
      h("div", { class: "node-context" }, node.label)
    )
  );
};

const data = [
  {
    label: "Level one 1",
    children: [
      {
        label: "Level two 1-1",
        children: [
          {
            label: "Level three 1-1-1-1-1-1-1-1-1-1-1-1-1-1-1",
          },
        ],
      },
    ],
  },
  {
    label: "Level one 2",
    children: [
      {
        label: "Level two 2-1",
        children: [
          {
            label: "Level three 2-1-1",
          },
        ],
      },
      {
        label: "Level two 2-2",
        children: [
          {
            label: "Level three 2-2-1",
          },
        ],
      },
    ],
  },
  {
    label: "Level one 3",
    children: [
      {
        label: "Level two 3-1",
        children: [
          {
            label: "Level three 3-1-1",
          },
        ],
      },
      {
        label: "Level two 3-2",
        children: [
          {
            label: "Level three 3-2-1",
          },
        ],
      },
    ],
  },
];

const defaultProps = {
  children: "children",
  label: "label",
};
</script>

<style scoped>
:deep(.custom-tree-node) {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
:deep(.node-context) {
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
