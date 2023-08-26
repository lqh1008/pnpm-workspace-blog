import { createRouter, createWebHistory } from 'vue-router'
// TODO : 有些逻辑需要拆出去，TS 类型限制应该限制的更好些
const modules = import.meta.glob('../(views|layouts)/**/**.vue')

const regRoute = (path: string) => {
  const regex = /\/([^/]+)\.vue$/
  const match = path.match(regex)
  return match![1]
}

// 生成路由
const autoImportRoutes: any[] = []
const topLevelRoutes = ['login', 'default-layout']
const finalRoutes: any[] = []
const genRoutes = () => {
  for (const module in modules) {
    const route = regRoute(module)
    autoImportRoutes.push({
      path: `/${route}`,
      name: route,
      component: () => import(/* @vite-ignore */ `${module}`),
      children: []
    })
  }
  const childRoutes: any[] = []
  autoImportRoutes.forEach((item) => {
    if (topLevelRoutes.includes(item.name)) {
      finalRoutes.push(item)
    } else {
      childRoutes.push(item)
    }
  })
  const index = finalRoutes.findIndex((item) => item.name === 'default-layout')
  finalRoutes[index].children = [...childRoutes]
  finalRoutes[index].path = '/'
  finalRoutes[index].redirect = '/blog-list'
}
genRoutes()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...finalRoutes]
})

export default router
