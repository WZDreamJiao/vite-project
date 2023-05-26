<template>
  <div class="layout">
    <el-container class="container">
      <el-aside class="aside">
        <div class="head" @click="handleCollapse">
          <el-icon class="mr8">
            <middle-vite></middle-vite>
          </el-icon>
          <div>奥里给给</div>
          <Icon class="ml8" name="vue"/>
        </div>
        <div class="menus">
          <el-scrollbar>
            <el-menu
                style="height: calc(100vh - 50px)"
                class="el-menu-vertical-demo"
                background-color="#222832"
                text-color="#fff"
                :router="true"
                :collapse="isCollapse"
                :defaultActive="defaultActive"
            >
              <el-menu-item index="/">
                <el-icon>
                  <middle-vue></middle-vue>
                </el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-sub-menu :index="route.path" v-for="route in routes">
                <template #title>
                  <el-icon>
                    <middle-vue></middle-vue>
                  </el-icon>
                  <span>{{ route.meta.title }}</span>
                </template>
                <el-menu-item
                    v-for="item in route.children"
                    :index="`${route.path}/${item.path}`"
                >
                  <el-icon class="mr8">
                    <large-biaoqian></large-biaoqian>
                  </el-icon>
                  <span> {{ item.meta.title }}</span>
                </el-menu-item>
              </el-sub-menu>
              <!--              <el-sub-menu index="/1-4">-->
              <!--                <template #title>-->
              <!--                  <el-icon class="mr8">-->
              <!--                    <large-biaoqian></large-biaoqian>-->
              <!--                  </el-icon>-->
              <!--                  <span>item four</span>-->
              <!--                </template>-->
              <!--                <el-menu-item index="/1-4-1">-->
              <!--                  <el-icon class="mr8">-->
              <!--                    <large-biaoqian></large-biaoqian>-->
              <!--                  </el-icon>-->
              <!--                  <span>item one</span>-->
              <!--                </el-menu-item>-->
              <!--              </el-sub-menu>-->
            </el-menu>
          </el-scrollbar>
        </div>
      </el-aside>
      <el-container class="content">
        <div class="main">
          <el-scrollbar>
            <RouterView v-slot="{ Component }">
              <template v-if="Component">
                <Transition mode="out-in">
                  <KeepAlive>
                    <component :is="Component"></component>
                  </KeepAlive>
                </Transition>
              </template>
              <template v-else>
                <loading></loading>
              </template>
            </RouterView>
          </el-scrollbar>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import {routes} from "@/router/routes.js";

const router = useRouter();
const route = useRoute();
const isCollapse = ref(false);
const defaultActive = computed(() => {
  return route.fullPath
});
const handleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
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
  cursor: pointer;
}

.head > div {
  display: flex;
  align-items: center;
  color: #f61414;
}

.menus {
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
