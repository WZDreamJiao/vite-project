<template>
  <div class="container" ref="scroll_container">
    123
  </div>
</template>

<script setup>
const images = [
  "../src/assets/images/2.jpg",
  "../src/assets/images/03.jpg",
  "../src/assets/images/11.jpg",
  "../src/assets/images/12.jpg",
  "../src/assets/images/13.jpg",
  "../src/assets/images/15.jpg",
]
const scroll_container = ref()
let currentIndex = 0;
const createItem = (index) => {
  const imageUrl = images[index];
  const item = document.createElement("div")
  item.classList.add("item")
  item.innerHTML = `<img src="${imageUrl}"/>`
  scroll_container.value.appendChild(item)
  return item
}
const resetElements = () => {
  scroll_container.value.innerHTML = ""
  const prevIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1
  const nextIndex = currentIndex + 1 > images.length - 1 ? 0 : currentIndex + 1
  createItem(prevIndex).classList.add("prev")
  createItem(currentIndex).classList.add("current")
  createItem(nextIndex).classList.add("next")
}
onMounted(() => {
  resetElements()
  let isAnimating = false
  nextTick(() => {
    // 监听鼠标滚轮事件
    scroll_container.value.addEventListener("wheel", e => {
      console.log(e.deltaY)
      if (!e.deltaY) {
        return;
      }
      if (isAnimating) {
        return;
      }
      isAnimating = true
      if (e.deltaY > 0) {
        // 往下滚
        scroll_container.value.classList.add("scroll-down")
        currentIndex = currentIndex + 1 > images.length - 1 ? 0 : currentIndex + 1
      } else {
        // 往上滚
        scroll_container.value.classList.add("scroll-up")
        currentIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1
      }
    });
    // 监听动画事件
    scroll_container.value.addEventListener("transitionend", e => {
      isAnimating = false
      scroll_container.value.classList.remove("scroll-down")
      scroll_container.value.classList.remove("scroll-up")
      resetElements()
    })
  })
})
</script>

<style scoped>
.container {
  background-color: #409eff;
  position: relative;
}

:deep(.item) {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

:deep(.item img) {
  position: absolute;
  width: 100%;
  height: calc(100vh - 20px);
  object-fit: cover;
}

:deep(.prev) {
  z-index: 1;
  height: 0;
}

:deep(.next) {
  z-index: 1;
  height: 0;
  bottom: 0;
}
</style>