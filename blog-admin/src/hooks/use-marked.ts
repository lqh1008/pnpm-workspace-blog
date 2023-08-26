import { parse } from 'marked'
import { ref, watchEffect, type Ref } from 'vue'
const useMarked = (content: Ref): any => {
  const tHtml = ref('')
  watchEffect(() => (tHtml.value = parse(content.value)))
  return {
    tHtml
  }
}

export default useMarked
