<template>
  <!--  显示中国疫情实时地图，悬浮省份显示该省现存病例、新增病例。
默认为中国各省份现有病例地图，点击某个省份显示该省各市的病例图（视难度做地图形式或者柱状图/饼图）-->
  <div class="home">
        <div id="tips">
      <img src="../../assets/img/提示.png" alt="" width="40px" id="tipsImg" />
      <p id="tipsTxt">点击上面的图标<br />可以打开导航栏哦</p>
    </div>
    <el-container>
<!--      顶部区域-->
      <el-header>
        <img alt="logo" src="../../assets/img/headlogo.png" class="logo1">
<!--        <h1>Covid-19 疫情大数据分析可视化</h1>-->
        <img alt="疫情侦测站" src="../../assets/img/疫情侦测站.png" class="titleImg">
        <img alt="logo" src="../../assets/img/针管 logo.png" class="logo2">
      </el-header>
      <!--    页面主体区域-->
      <el-container>
        <!--        中央地图区域-->
        <el-container>
          <el-main>
            <!--            中央区域地图-->
            <div class="main_map">
              <div class="Accumulated data">
                <!--                <img src="../../assets/img/累积数据.png" alt="图片" height="100px">-->
              </div>
              <div class="map">
                <router-view></router-view>
              </div>
            </div>
          </el-main>
        </el-container>
        <!--        右侧栏-->
        <el-aside>
          <!-- <div class="aside_box"></div> -->

          <!-- <div @click="moreTo" class="btn_more, el-icon-right"></div> -->
          <div class="news">
            <News></News>
          </div>

        </el-aside>
      </el-container>
<!--      导航菜单-->
      <ButtonMenu></ButtonMenu>
    </el-container>
  </div>
</template>
<script>
import Relationship from "../Relationship/Relationship";
import ButtonMenu from "../Decorate/ButtonMenu";
import News from "./News";
export default {
  data() {
    return {
      
    };
  },
  methods: {
  },
  name: "Home",
  components: {Relationship, ButtonMenu, News},
};
</script>
<style scoped>
#tips {
  position: fixed;
  height: 8%;
  width: 14%;
  background-color: rgba(255, 255, 255, 0.95);
  top: 10%;
  right: 2%;
  opacity: 0;
  border-color: rgba(219, 228, 236, 0.5);
  box-shadow: 10px 10px 50px rgb(203, 232, 243);
  border-radius: 10px;
  animation-name: tipschange;
  animation-timing-function: ease-in-out;
  -webkit-animation-duration: 4s;
}

#tipsTxt {
  position: relative;
  left: 7px;
  top: -5px;
  float: left;
  color: rgba(0, 0, 0, 0.692);
}
#tipsImg {
  float: left;
  margin-top: 8px;
  margin-left: 5px;
}
@-webkit-keyframes tipschange {
  0% {
    opacity: 0;
    transition: 1s;
    z-index: 99;
    right: 0%;
  }
  20% {
    opacity: 1;
    z-index: 99;
    right: 2%;
    transition: 2s;
  }
  60% {
    opacity: 1;
    z-index: 99;
    right: 2%;
    transition: 1s;
  }

  100% {
    opacity: 0;
    right: -50%;
    z-index: -99;
  }
}
</style>
<style scoped>
html,
body {
  width: 100%;
  height: 100%;
}
.home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red; /* 不支持线性的时候显示 */
  /*background-image: linear-gradient(to bottom right, #00A5E5 , #9ADDF8);*/
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  /*background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);*/
}
.home > .el-container > .el-container {
  height: 70%;
  width: 100%;
}
.el-container {
  height: 100%;
  color: white;
}
.el-header {
  /*background-color: #b3c0d1;*/
  color: #333;
  text-align: center;
  line-height: 50px;
  height: 13% !important;
  /*border: 1px solid red;*/
  overflow: hidden;
  /*display: flex;*/
  /*justify-content: center;*/
}
h1{
  font-size: 2rem;
}
.titleImg {
  position: relative;
  top: 0;
  width: 24.7375rem;
  height: 5.75rem;
}
.logo1{
  position: absolute;

  left: 10%;
  /*left: 10%;*/
  top: 1%;
  width: 110px;
  height: 100px;

}
.logo2{
  position: absolute;
  right: 10%;
  top: 0;
  width: 200px;
  height: 125px;
}
.el-aside {
  /*background-color: #d3dce6;*/
  /*background-color: #e9eef3;*/
  color: #333;
  text-align: center;
  width: 25% !important;
  height: 100%;
  padding: 20px 0;
  /*border: 1px solid red;*/
  /*隐藏滚动条而不影响功能,适配火狐和IE*/
  scrollbar-width: none;
  -ms-overflow-style: none;
  background-color: #e9eef3;
}
.news{
  width: 96%;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
/*隐藏滚动条而不影响功能，适配Chrome*/
.el-aside::-webkit-scrollbar {
  width: 0 !important;
  display: none;
}
.aside_box {
  /*position: relative;*/
  width: 100%;
  height: 80%;
  /*background-color: #42b983;*/
  /*margin-top: 10%;*/
  /*margin-bottom: 10%;*/
  margin: 0 auto;
  /* border: 1px solid red; */
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  /*border: 1px solid red;*/
  text-align: center;
  /*line-height: 160px;*/
  /*  隐藏溢出区域*/
  overflow: hidden;
  height: 100%;
}
.copyright > a {
  display: none !important;
}
.main_map {
  width: 100%;
  height: 100%;
  margin: 0;
  /*border: 1px solid red;*/
}
.map{
    width: 100%;
  height: 100%;
  position: relative;
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
</style>
