import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app.vue'
import router from './router'

// 引入编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(mavonEditor)

app.mount('#app')
