import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import(/* webpackChunkName: "home" */ "../views/Home/Home");
const Detail = () =>
  import(/* webpackChunkName: "detail"*/ "../views/Detail/Detail");
const WorldMap = () =>
  import(/* webpackChunkName: "world" */ "../views/WorldMap/WorldMap");
const ChinaMap = () =>
  import(/* webpackChunkName: "ChinaMap" */ "../views/ChinaMap/ChinaMap");
const Bank = () => import(/* webpackChunkName: "Bank" */ "../views/Bank/Bank");
const Room = () => import(/* webpackChunkName: "Room" */ "../views/Room/Room");
const ProvinceCharts = () =>
  import(
    /* webpackChunkName: "ProvinceCharts" */ "../views/ProvinceCharts/ProvinceCharts"
  );
const Start = () =>
  import(/* webpackChunkName: "Start" */ "../views/Start/Start");
  
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/Start",
  },
  {
    path: "/Start",
    name: "Start",
    component: Start,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    redirect: "/WorldMap",
    children: [
      {path: "/WorldMap", component: WorldMap},
      {path: "/ChinaMap", component: ChinaMap},
      {path: "/ProvinceCharts", component: ProvinceCharts},
    ],
  },
  {
    path: "/Bank",
    name: "Bank",
    component: Bank,
  },
  {
    path: "/Room",
    name: "Room",
    component: Room,
  },
  {
    path: "/Detail",
    name: "Detail",
    component: Detail,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
