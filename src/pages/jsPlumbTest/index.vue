<template>
  <div class="tables" id="container">
    <el-icon class="mr8"><large-biaoqian></large-biaoqian></el-icon>
    <el-table :data="list1" style="margin-right: 150px">
      <el-table-column prop="name" label="Name" />
      <el-table-column label="nodeId">
        <template #default="{ row, column, $index }">
          <div :key="row.nodeId" :id="row.nodeId" name="joint" class="col2">
            {{ row.nodeId }}
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-table :data="list2" style="margin-left: 150px">
      <el-table-column label="Name">
        <template #default="{ row, column, $index }">
          <div :key="row.nodeId" :id="row.nodeId" name="data" class="col2">
            {{ row.name }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="nodeId" label="nodeId" />
    </el-table>
  </div>

  <!-- <div class="tables" id="container">
    <div>
      <p
        v-for="(item, index) in list1"
        :key="item.nodeId"
        :id="item.nodeId"
        name="joint"
        class="col2"
      >
        {{ item.name }}
      </p >
    </div>
    <div>
      <p
        v-for="(item, index) in list2"
        :key="item.nodeId"
        :id="item.nodeId"
        name="data"
        class="col2"
      >
        {{ item.name }}
      </p >
    </div>
  </div> -->

  <!-- <h3>jsplumb使用</h3>
  <div id="container" style="width: 1000px">
    <div class="col1">
      <div
        v-for="item in list1"
        :key="item.nodeId"
        :id="item.nodeId"
        name="joint"
      >
        <div style="display: flex">
          <div>{{ item.name }}</div>
          <div>{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="col2">
      <div
        v-for="item in list2"
        :key="item.nodeId"
        :id="item.nodeId"
        name="data"
      >
        {{ item.name }}
      </div>
    </div>
  </div> -->
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import jsPlumb from "jsplumb";
//jsplumb使用
let $jsPlumb = jsPlumb.jsPlumb;
let jsPlumb_instance = null; // 缓存实例化的jsplumb对象
//模型轴
const list1 = reactive([
  { name: "name1", nodeId: "name1", axis: "", type: "" },
  { name: "name2", nodeId: "name2", axis: "", type: "" },
  { name: "name3", nodeId: "name3", axis: "", type: "" },
  { name: "name4", nodeId: "name4", axis: "", type: "" },
  { name: "name5", nodeId: "name5", axis: "", type: "" },
  { name: "name6", nodeId: "name6", axis: "", type: "" },
]);
//接口数据点
const list2 = reactive([
  { name: "数据1", nodeId: "data1" },
  { name: "数据2", nodeId: "data2" },
  { name: "数据3", nodeId: "data3" },
  { name: "数据4", nodeId: "data4" },
  { name: "数据5", nodeId: "data5" },
  { name: "数据6", nodeId: "data6" },
  { name: "数据7", nodeId: "data7" },
  { name: "数据8", nodeId: "data8" },
  { name: "数据9", nodeId: "data9" },
  { name: "数据10", nodeId: "data10" },
  { name: "数据11", nodeId: "data11" },
  { name: "数据12", nodeId: "data12" },
  { name: "数据13", nodeId: "data13" },
  { name: "数据14", nodeId: "data14" },
  { name: "数据15", nodeId: "data15" },
  { name: "数据16", nodeId: "data16" },
  { name: "数据17", nodeId: "data17" },
  { name: "数据18", nodeId: "data18" },
]);

const showPlumb = () => {
  jsPlumb_instance = $jsPlumb.getInstance({
    Container: "container", // 选择器id
    EndpointStyle: { radius: 4, fill: "#fff",stroke: "#276EE5", strokeWidth: 2 }, // 端点样式
    PaintStyle: { stroke: "#276EE5", strokeWidth: 2 }, // 绘画样式，默认8px线宽  #456
    HoverPaintStyle: { fillStyle: "red", strokeStyle: "red" }, // 默认悬停样式  默认为null
    ConnectionOverlays: [
      // 此处可以设置所有箭头的样式，因为我们要改变连接线的样式，故单独配置
      [
        "Arrow",
        {
          // 设置参数可以参考中文文档
          location: 1,
          width: 10,
          length: 10,
          paintStyle: {
            stroke: "#276EE5",
            fill: "#276EE5",
          },
        },
      ],
    ],
    Connector: ["Straight"], // 要使用的默认连接器的类型：直线，折线，曲线等
    DrapOptions: { cursor: "crosshair", zIndex: 2000 },
  });



  jsPlumb_instance.batch(() => {
    for (let i = 0; i < list1.length; i++) {
      initLeaf(list1[i].nodeId, "joint");
    }
    for (let i = 0; i < list2.length; i++) {
      initLeaf(list2[i].nodeId, "data");
    }
  });

  const joint = document.getElementsByName("joint");
  const data = document.getElementsByName("data");
  // console.log(JSON.stringify(joint));
  // console.log(JSON.stringify(data));
  // console.log(joint);
  // console.log(data);

  jsPlumb_instance.setSourceEnabled(joint, true);
  jsPlumb_instance.setTargetEnabled(data, true);
  jsPlumb_instance.setDraggable(joint, false); // 是否支持拖拽
  jsPlumb_instance.setDraggable(data, false); // 是否支持拖拽

  jsPlumb_instance.bind("click", (conn, originalEvent) => {
    // console.log(conn);
    jsPlumb_instance.deleteConnection(conn);
  });
};

// 初始化具体节点
const initLeaf = (id, type) => {
  const ins = jsPlumb_instance;
  const elem = document.getElementById(id);
  if (type == "joint") {
    ins.makeSource(elem, {
      anchor: [1, 0.5, 0, 0], // 左 上 右 下
      allowLoopback: false,
      maxConnections: -1,
    });
  } else {
    ins.makeTarget(elem, {
      anchor: [0, 0.5, 0, 0],
      allowLoopback: false,
      maxConnections: -1,
    });
  }
};

onMounted(() => {
  setTimeout(() => {
    showPlumb();
  });
});
</script>

<style scoped>
.tables {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#container {
  position: relative;
  margin-top: 20px;
  width: 100%;
  /* height: 300px; */
  display: flex;
}

.col2,
.col1 {
  float: left;
  text-align: center;
}

.col1 {
  width: 180px;
}

.col2 {
  width: 100%;
  /* width: 120px; */
  /* margin-left: 80px; */
  background: red;
}

/* .col2 > div,
.col1 > div {
  line-height: 30px;
  margin: 0 0 17px 0;
  background: #ef631e;
  color: #fff;
} */
</style>
