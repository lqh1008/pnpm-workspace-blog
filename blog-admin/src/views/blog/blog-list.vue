<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="item in tableConfig"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handlePreviewClick(scope.row)"
            >预览</el-button
          >
          <el-button link type="primary" size="small">编辑</el-button>
          <el-button link type="primary" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <blog-preview v-model="dialogTableVisible" :blog-detail="blogDetail"></blog-preview>
  </div>
</template>

<script lang="ts" setup>
import { axios } from '@/services/index'
import { ref } from 'vue'
import BlogPreview from '@/components/blog-preview.vue'
// 标题，封面，内容，点赞量，评论量
const tableConfig = [
  {
    label: '标题',
    prop: 'title'
  },
  {
    label: '封面',
    prop: 'cover'
  },
  {
    label: '内容',
    prop: 'content'
  },
  {
    label: '点赞量',
    prop: 'starCount'
  },
  {
    label: '评论量',
    prop: 'commentCount'
  }
]

const dialogTableVisible = ref(false)

const blogDetail = ref('')

const handlePreviewClick = (row: any) => {
  axios.get(`/blogs/getBlogById?id=${row.id}`).then((res) => {
    blogDetail.value = res.data
  })
  dialogTableVisible.value = true
}

const tableData = ref([])

const getList = () => {
  axios.get('/blogs/getList').then((res: any) => {
    tableData.value = res.data
  })
}

getList()
</script>
