<template>
  <div class="flex flex-row h-screen">
    <el-menu default-active="0" class="el-menu-vertical-demo">
      <el-menu-item
        v-for="item in MenuConfig"
        :key="item.index"
        :path="item.path"
        :index="item.index"
      >
        <RouterLink :to="item.path">
          {{ item.name }}
        </RouterLink>
      </el-menu-item>
    </el-menu>
    <RouterView class="flex-1"></RouterView>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
const MenuConfig = [
  {
    path: '/',
    index: '0',
    name: '博客'
  },
  {
    path: '/user',
    index: '1',
    name: '用户'
  },
  {
    path: '/comment',
    index: '2',
    name: '评论'
  },
  {
    path: '/mine',
    index: '3',
    name: '我的'
  }
]

const handleMenuClick = (e: any) => {
  console.log('🚀  e:', e)
  return {}
}
</script>
