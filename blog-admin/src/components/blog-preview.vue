<template>
  <div>
    <el-dialog v-model="value" title="Shipping address">
      <div v-html="blogContent"></div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import useMarked from '@/hooks/use-marked'
import { toRef, watchEffect, ref } from 'vue'
import { computed } from 'vue'

const props = defineProps(['modelValue', 'blogDetail'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const blogContent = ref('')
watchEffect(() => {
  const { tHtml } = useMarked(toRef(props.blogDetail.content ?? ''))
  blogContent.value = tHtml.value
})
</script>

<style scoped></style>
