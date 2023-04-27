<template>
  <div class="layout">
    <el-container class="container">
      <el-aside class="aside">
        <div class="head">
          <div>奥里给给</div>
        </div>
       <div class="menus">
         <el-scrollbar>
           <el-menu
               default-active="2"
               class="el-menu-vertical-demo"
               background-color="#222832"
               text-color="#fff"
               :router="true"
           >
             <el-sub-menu index="1">
               <template #title>
                 <el-icon><ep-location /></el-icon>
                 <span>Navigator One</span>
               </template>
               <el-menu-item-group title="Group One">
                 <el-menu-item index="1-1">item one</el-menu-item>
                 <el-menu-item index="1-2">item two</el-menu-item>
               </el-menu-item-group>
               <el-menu-item-group title="Group Two">
                 <el-menu-item index="1-3">item three</el-menu-item>
               </el-menu-item-group>
               <el-sub-menu index="1-4">
                 <template #title>item four</template>
                 <el-menu-item index="1-4-1">item one</el-menu-item>
               </el-sub-menu>
             </el-sub-menu>
             <el-menu-item index="2">
               <el-icon><icon-menu /></el-icon>
               <span>Navigator Two</span>
             </el-menu-item>
             <el-menu-item index="3" disabled>
               <el-icon><document /></el-icon>
               <span>Navigator Three</span>
             </el-menu-item>
             <el-menu-item index="4">
               <el-icon><setting /></el-icon>
               <span>Navigator Four</span>
             </el-menu-item>
             <el-menu-item index="4">
               <el-icon><setting /></el-icon>
               <span>Navigator Four</span>
             </el-menu-item>
           </el-menu>
         </el-scrollbar>
       </div>
      </el-aside>
      <el-container class="content">
        <div class="main">
          <KeepAlive>
          <el-scrollbar>
            <router-view />
          </el-scrollbar>
          </KeepAlive>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { routes } from "@/router/routes.js";
</script>
<style scoped>
.layout {
  min-height: 100vh;
  background-color: #ffffff;
}
.container {
  height: 100vh;
}
.aside {
  width: 200px;
  background-color: #222832;
}
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
.head > div {
  display: flex;
  align-items: center;
  color: #fff
}
.menus{
  height: calc(100vh - 50px);
}

.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}
.main {
  overflow: auto;
  padding: 10px;
}
</style>
