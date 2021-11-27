<template>
  <div class="ProvinceCharts">
    <div class="title">
      <!-- <span style="color:#393939;">·</span> -->
      {{province }}
    </div>
    <span class="back" @click="backFun"><i class="el-icon-back"> 返回</i> </span>
    <div class="main">
      <div class="top_left"><TopLeft></TopLeft></div>
      <div class="top_right"><TopRight></TopRight></div>
      <!-- <div class="bottom_left"><BottomLeft></BottomLeft></div> -->
      <div class="bottom_right"><BottomRight></BottomRight></div>
    </div>
  </div>
</template>

<script>
import TopLeft from "./PCharts/TopLeft";
import TopRight from "./PCharts/TopRight";
//import BottomLeft from "./PCharts/BottomLeft";
import BottomRight from "./PCharts/BottomRight";
export default {
  data() {
    return {
      province: "海南",
      provinceindex: 8,
      pDate: [], //日期
      pTotalConfirmCount: [], //各省累计确诊人数
      pCured: [], //各省累计治愈人数
      pDeath: [], //各省死亡人数
      pAddConfirmCount: [], //各省新增确诊人数
    };
  },


  created() {
    //this.axios.get("http://localhost:8080/res/test.json").then((res) => {
    this.axios
      .get("http://110.42.237.123:8080/CovidData/province_data")
      .then((res) => {
        this.province = this.$route.query.province;
        const allProvince = res.data.map((item) => item.provinceShortName);
        for (let i in allProvince) {
          if (allProvince[i] === this.province) {
            this.provinceindex = Number(i);
          }
        }
      });
  },
  mounted() {
  },
  watch: {
    $route() {
      this.province = this.$route.query.province;
    },
  },
  components: {
    TopLeft,
    TopRight,
    //BottomLeft,
    BottomRight,
  },
  methods: {
    backFun(){
      this.$router.push("/ChinaMap");
    }
  },
};
</script>

<style>
.back{
  position: absolute;
  left: 2%;
  top: 2%;
  color: #fff;
  font-size: 120%;
  cursor: pointer;
}
.back :hover{
  color: orange;
  transition: 0.4s;
}
.ProvinceCharts {
  position: relative;
  width: 100%;
  height: 100%;
   background-image: linear-gradient(180deg, #72a2dd 0%, #b3b3b3 100%);
}
.title {
  position: relative;
  width: 100%;
  /* border: black solid 1px; */
  height: 5%;
  font-size: 200%;
  color: white;
  font-weight: 1000;
  letter-spacing:10px;
  margin-left: 2%;
}
.main {
  width: 100%;
  /* border: black solid 1px; */
  height: 95%;
  position: relative;
}
.top_left {
  /* background-color: #2c6681; */
  float: left;
  height: 100%;
  width: 50%;
}
.top_right {
  /* background-color: rgba(0, 0, 0, 0.5); */
  float: right;
  height: 50%;
  width: 50%;
}
.bottom_left {
  /* background-color: #b4b5b6; */
  float: left;
  height: 50%;
  width: 50%;
}
.bottom_right {
  /* background-color: rgb(248, 23, 218); */
  float: right;
  height: 50%;
  width: 50%;
}
</style>
