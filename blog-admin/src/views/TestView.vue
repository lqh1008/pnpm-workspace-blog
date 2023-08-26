<template>
  <div>
    <mavon-editor v-model="value" />
    <button @click="save">保存</button>
    <div v-html="tHtml"></div>
    <el-button>111</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('**Hello**, _world_!')
import { axios } from '../services/index'
import useMarked from '../hooks/use-marked'

const save = () => {
  axios.post('/blogs/save', { content: value.value }).then((res) => {
    console.log(res)
  })
}

const { tHtml } = useMarked(value)

axios.get('/blogs/getList').then((res) => {
  console.log('🚀  res:', res)
})
</script>

<style lang="scss" scoped></style>
