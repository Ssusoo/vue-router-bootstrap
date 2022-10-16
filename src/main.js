import { createApp } from 'vue'
import App from './_2/VueRouterDetail.vue'
import CustomRouter from './router/router'

// TODO 기본
// createApp(App).mount('#app')

// TODO 6) 뷰-라우터(세팅2) main.js에서 뷰-라우터 import 세팅하기(./main.js)
createApp(App).use(CustomRouter).mount('#app')

