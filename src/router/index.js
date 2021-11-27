import Vue from 'vue';
import VueRouter from 'vue-router';
const Home = () => import('../views/Home/Home')
const Detail = () => import('../views/Detail/Detail')
const WorldMap = () => import("../views/WorldMap/WorldMap")
const ChinaMap = () => import("../views/ChinaMap/ChinaMap")
const Bank = () => import('../views/Bank/Bank')
const Room = () => import('../views/Room/Room')
const ProvinceCharts = () => import('../views/ProvinceCharts/ProvinceCharts')
const Start = () => import('../views/Start/Start')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Start'
  },
  {
    path: '/Start',
    name: 'Start',
    component: Start
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    redirect: '/WorldMap',
    children: [
      { path: '/WorldMap', component: WorldMap },
      { path: '/ChinaMap', component: ChinaMap },
      { path: '/ProvinceCharts', component: ProvinceCharts }
    ]
  },
  {
    path: '/Bank',
    name: 'Bank',
    component: Bank
  },
  {
    path: '/Room',
    name: 'Room',
    component: Room
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail
  },
]

const router = new VueRouter({
  routes
})

export default router
