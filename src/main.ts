import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 导入mock，提供数据服务
import '@/mock/index'

// 设置初始化样式
import '@/assets/style/base.less'
import '@/assets/style/iconfont.less'

// 导入vant组件
import { Tab, Tabs, Swipe, SwipeItem } from 'vant'

const app = createApp(App)
// 注册vant组件
app.use(Tab)
app.use(Tabs)
app.use(Swipe)
app.use(SwipeItem)

// createApp(App).use(router).mount('#app')

app.use(router)
app.mount('#app')
