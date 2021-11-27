<template>
  <div class="home">
    <el-container>
      <!--      头部区域-->
      <el-header height="80px">
        <img class="titleImg"
             alt="数据展示厅"
             src="../../assets/img/数据展示厅.png">
        <!--        <div class="titleImg"></div>-->
        <!--        <h1>Covid-19 疫情大数据分析可视化</h1>-->
      </el-header>
      <!--    页面主体区域-->
      <el-container>
        <!--        左侧栏-->
        <el-aside>
          <div class="aside_box left top">
            <!--            图表标题-->
            <div class="echartsTitle">全国现存确诊Top10</div>
            <div class="myCharts">
              <TopTen></TopTen>
            </div>
            <!--            用于绘制底部边框-->
            <div class="aside_footer"></div>
          </div>
          <div class="aside_box left bottom">
            <!--            图表标题-->
            <div class="echartsTitle">世界现存确诊Top10</div>
            <div class="myCharts">
              <NewTrend></NewTrend>
            </div>
            <!--            <NewTrend></NewTrend>-->
            <!--            用于绘制底部边框-->
            <div class="aside_footer"></div>
          </div>
        </el-aside>
        <!--        中央地图区域-->
        <el-container>
          <el-main>
            <!--            中央区域顶幅-->
            <div class="main_head">
              <!--              数字展示区域-->
              <div class="mh-hd">
                <ul>
                  <li>{{ hdData.confirmedCount }}</li>
                  <li>{{ hdData.currentConfirmedCount }}</li>
                  <li>{{ hdData.curedCount }}</li>
                  <li class="liLaster">{{ hdData.deadCount }}</li>
                </ul>
              </div>
              <!--              文字展示区域-->
              <div class="mh-bd">
                <ul>
                  <li>累计确诊</li>
                  <li>现存确诊</li>
                  <li>累积治愈</li>
                  <li>累积死亡</li>
                </ul>
                <div class="psInfo">注：国内数据</div>
              </div>
            </div>
            <!--            中央区域图-->
            <div class="main_map">
              <!-- <models></models> -->
              <Bar3D></Bar3D>
            </div>
          </el-main>
        </el-container>
        <!--        右侧栏-->
        <el-aside>
          <div class="aside_box">
            <!--            图表标题-->
            <div class="echartsTitle">世界每日新增、治疗和死亡图</div>
            <div class="myCharts">
              <WorldData></WorldData>
            </div>

            <!--            用于绘制底部边框-->
            <div class="aside_footer"></div>
          </div>
          <div class="aside_box">
            <!--            图表标题-->
            <div class="echartsTitle">我国近期境外输入趋势图</div>
            <div class="myCharts">
              <OverseasInput></OverseasInput>
            </div>

            <!--            用于绘制底部边框-->
            <div class="aside_footer"></div>
          </div>
          <!--          <div @click="moreTo"-->
          <!--               class="btn_more">more</div>-->

        </el-aside>
      </el-container>
      <ButtonMenu></ButtonMenu>
    </el-container>

  </div>
</template>

<script>
// @ is an alias to /src
import TopTen from '../DetailCharts/TopTen.vue'
import NewTrend from '../DetailCharts/NewTrend'
import WorldData from '../DetailCharts/WorldData'
import OverseasInput from '../DetailCharts/OverseasInput'
import models from "../Decorate/models"
import Bar3D from '../Bar3D/Bar3D'
import ButtonMenu from "../Decorate/ButtonMenu";

export default {
  data () {
    return {
      hdData: {}
    }
  },
  created () {
    this.getHdData()
  },
  methods: {
    moreTo () {
      this.$router.push('/bank')
    },
    home_page () {
      this.$router.push('/')
    },
    getHdData () {
      this.axios.get('http://110.42.237.123:8080/CovidData/ChinaTotal_data').then((result) => {
        this.hdData = result.data
      }).catch((err) => {
        console.log('获取请求失败！');
      });
    }
  },
  name: 'Home',
  components: {
    TopTen,
    NewTrend,
    WorldData,
    OverseasInput,
    models,
    Bar3D,
    ButtonMenu
  }
}
</script>

<style scoped>
html,
body {
  position: absolute;
  width: 100%;
  height: 100%;
}

li {
  list-style: none;
}

.home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);*/
}

.el-container {
  height: 100%;
}

.el-header {
  /*background-color: #acc3e0;*/
  background-color: #d2b397;
  /*background:linear-gradient(90deg,#e2d1c3 100% , #fdfcfb 0%);*/
  /*background-color: #b3c0d1;*/
  height: 13% !important;
  color: #333;
  text-align: center;
  /*background: url("../../assets/img/hbg.png") no-repeat;*/
}

.titleImg {
  position: relative;
  width: 28.6875rem;
  top: -3%;
  height: 100%;
}

.el-aside {
  background-color: #e2d1c3;
  /*background-color: #e2c3c4;*/
  color: #333;
  text-align: center;
  position: relative;
  width: 25% !important;
  height: 100%;
  overflow: hidden;
}

.aside_box {
  position: relative;
  /*设置宽度100%后会出问题*/
  width: 98%;
  height: 45.2%;
  margin: 4% auto;
  /* border: 1px solid rgba(25, 186, 139, 0.17); */
  background: rgba(255, 255, 255, 0.04) url("../../assets/img/boxbg.png");
  padding: 0 0.1875rem 0.5rem;
}

/*图表盒子*/
.myCharts {
  position: relative;
  width: 100%;
  height: 90%;
  /*background-color: #a57878;*/
}

/*图表标题盒子*/
.echartsTitle {
  font-size: 1rem;
  height: 10%;
  font-weight: bold;
}

.aside_box .left .top {
  position: absolute;
  width: 100%;
  height: 300px;
  /*border: red 1px solid;*/
}

.aside_box::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
}

.aside_box::after {
  position: absolute;
  top: 0;
  right: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
}

.aside_footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}

.aside_footer::before {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
}

.aside_footer::after {
  position: absolute;
  bottom: 0;
  right: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
}

.aside_box h2 {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
}

.btn_more {
  /*width: 80%;*/
  /*height: 6%;*/
  /*background-color: #42b983;*/
  /*margin-top: 10%;*/
  /*margin-bottom: 10%;*/
  /*margin: auto;*/
  /*border: 1px solid red;*/
}

.el-main {
  background-color: #fff1e1;
  color: #333;
  text-align: center;
  /*  隐藏溢出区域*/
  overflow: hidden;
  height: 100%;
}

.copyright > a {
  display: none !important;
}

.main_head {
  width: 100%;
  height: 20%;
  background: #e3ccb8;
  /*background: rgba(101, 132, 226, 0.1);*/
  padding: 0.1875rem;
}

.mh-hd {
  height: 50%;
}

.mh-bd {
  height: 50%;
}

.main_head .mh-hd {
  position: relative;
  border: 1px solid rgba(25, 186, 139, 0.17);
}

.main_head .mh-hd ul {
  display: flex;
}

.main_head .mh-hd ul li {
  position: relative;
  flex: 1;
  text-align: center;
  /*数字 Ul的高度*/
  height: 100%;
  line-height: 1rem;
  font-size: 3rem;
  color: #42b983;
  padding: 0.05rem 0;
  font-family: "electronicFont", serif;
  font-weight: bold;
}

.main_head .mh-hd::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
  top: 0;
  left: 0;
}

.main_head .mh-hd::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
  right: 0;
  bottom: 0;
}

/* .main_head .mh-hd ul li:first-child::after */
.main_head .mh-hd ul li:not(.liLaster)::after {
  content: "";
  position: absolute;
  height: 50%;
  width: 1px;
  /*background: rgba(255, 255, 255, 0.2);*/
  background-color: black;
  right: 0;
  top: 25%;
}

.main_head .mh-bd ul {
  display: flex;
}

.main_head .mh-bd ul li {
  flex: 1;
  /*文字 Ul的高度*/
  height: 100%;
  line-height: 0.5rem;
  text-align: center;
  font-size: 1rem;
  /* color: rgba(255, 255, 255, 0.7); */
  color: black;
  padding-top: 0.125rem;
}
.psInfo {
  text-align: left;
  font-size: 0.5rem;
  color: #929292;
}
.main_map {
  position: relative;
  width: 100%;
  height: 80%;
  padding: 0 0.1875rem;
  background: #e2d1c3;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

/* .home_aside {
} */
</style>
