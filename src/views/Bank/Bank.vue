<template>
  <div class="transfer">
    <el-container>
      <ButtonMenu></ButtonMenu>

      <el-container>
        <!--        主要内容-->
        <el-main>
          <div class="mainTitle">
            <span><img alt="logo"
                   src="../../assets/img/笔记本.png"></span>
            <img alt="病毒资料馆"
                 src="../../assets/img/病毒资料馆.png">
          </div>

          <div class="main_left">
            <models></models>
          </div>

        </el-main>
        <!--        右侧栏-->
        <el-aside width="30%">
          <div class="aside_box top">
            <SpeciesCharts></SpeciesCharts>
          </div>
          <div class="aside_box bottom">
            <!--            <br>-->
            <h3>基本介绍</h3>
            <p class="topP">2019新型冠状病毒（2019-nCoV，世卫组织2020年1月命名 ；SARS-CoV-2，国际病毒分类委员会2020年2月11日命名）。
              2021年3月30日，中国—世卫组织新冠病毒溯源联合研究报告在日内瓦发布，报告显示，武汉华南海鲜市场不是新冠病毒最初来源地。</p>
            <p>人感染了冠状病毒后常见体征有呼吸道症状、发热、咳嗽、气促和呼吸困难等。在较严重病例中，感染可导致肺炎、严重急性呼吸综合征、
              肾衰竭，甚至死亡。对于新型冠状病毒所致疾病没有特异治疗方法。但许多症状是可以处理的，因此需根据患者临床情况进行治疗。此外，
              对感染者的辅助护理可能非常有效。做好自我保护包括：保持基本的手部和呼吸道卫生，坚持安全饮食习惯等。</p>
          </div>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavHeader from "../Transfer/NavHeader";
import models from "../Decorate/models";
import SpeciesCharts from "../Bank/SpeciesCharts";
import ButtonMenu from "../Decorate/ButtonMenu";
export default {
  components: { NavHeader, models, SpeciesCharts, ButtonMenu },
  data () {
    return {
      activeName: 'bank'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.transfer {
  background-color: #bebef6;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.el-container {
  height: 100%;
}
.transfer > .el-container > .el-container {
  height: 100%;
  width: 100%;
}

.transfer > .el-container > .el-container > .el-main {
  position: relative;
  width: 60%;
}
.el-main {
  color: #333;
  text-align: center;
  height: 100%;
  /*padding: 2%;*/
}
.mainTitle {
  position: relative;
  width: 100%;
  height: 16%;
}
.mainTitle > img {
  position: relative;
  top: -10px;
  width: 460px;
  height: 109px;
}
.mainTitle > span > img {
  position: relative;
  width: 90px;
  height: 90px;
  top: -20px;
}
.main_left {
  position: relative;
  background-color: #eeedff;
  height: 84%;
  overflow: hidden;
  border-radius: 0.9375rem;
  /*box-shadow: 0 0 0.625rem #888888;*/
  box-shadow: 0.3125rem -0.3125rem 0.3125rem rgba(136, 136, 136, 0.77);
}

.el-aside {
  /*background-color: #D3DCE6;*/
  color: #333;
  width: 37% !important;
  height: 100% !important;
  /*padding: 2% 0;*/
  overflow: hidden;
  padding: 20px 0;
}
.aside_box {
  position: relative;
  width: 92%;
  height: 48.3%;
  /*margin-left: 2%;*/
  /*margin-right: 2%;*/
  /*15px的圆角*/
  border-radius: 0.9375rem;
  /*box-shadow: 0 0 0.625rem #888888;*/
  box-shadow: 0.3125rem -0.3125rem 0.3125rem #888888;
}
.aside_box.top {
  padding: 0 2%;
  background-color: #8889be;
  /*box-shadow: 0.3125rem -0.3125rem 0.3125rem #888888;*/
}
.aside_box.bottom {
  font-size: 1em;
  padding: 0 2%;
  /*padding-left: 2%;*/
  text-align: left;
  text-indent: 2em;
  margin-top: 4%;
  background-color: #8889be;
  overflow: auto;
  /*box-shadow: 0.3125rem -0.3125rem 0.3125rem #888888;*/
}
.aside_box.bottom h3 {
  text-indent: 0;
  padding-left: 1%;
}
.topP {
  margin-top: 0;
}
.aside_box.bottom > p {
  font-size: 1rem;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
