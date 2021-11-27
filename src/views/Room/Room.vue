<template>
  <div class="transfer">
    <el-container>
      <ButtonMenu></ButtonMenu>
      <el-header>
        <el-tabs type="border-card"
                 v-model="activeName">
          <el-tab-pane disabled
                       name="home">
            <span slot="label"
                  disabled><i class="el-icon-date"></i></span>
          </el-tab-pane>
          <el-tab-pane label="分析室"
                       name="room">
            分析室，使用者仅需调整部分初始数据就可看到疫情的模拟状况（该功能数据虚构仅供学习交流和警示作用！）
          </el-tab-pane>
        </el-tabs>
        <div class="head_right">
          <div class="rBox">

          </div>
        </div>
      </el-header>
      <el-container>
        <!--        主要内容-->
        <el-main>

          <div class="main_left">
            <Prediction></Prediction>
          </div>

        </el-main>
        <!--        右侧栏-->
        <el-aside width="30%">
          <div class="aside_box top">
            <Timeline></Timeline>
          </div>
          <div class="aside_box bottom">
            <p class="topP">死亡人数通常被用作评估传播率和感染严重程度的关键指标。
              顶尖学术期刊《自然》以“加速文章预览”
              （Accelerated Article Preview）的形式,在线发表了一篇研究论文。
              来自英国剑桥大学和法国巴斯德研究所的科学家，
              综合45个国家地区的流行病学数据，做出推算。
              在65岁以下的人群中，按年龄划分的新冠死亡率在各个国家地区之间高度一致，
              可以作为整个人口感染数量的可靠指标
              5-9岁年龄段因感染新冠而死亡的比例始终是最低的。年龄每增加5岁，感染死亡率增加0.59%。

            </p>
            <p>论文摘要中，研究人员表示，监测新冠病毒的传播水平和感染的严重程度
              是指导应对这一流行病的重要手段。文中模型框架可以帮助各个国家
              地区评估新冠流行的进程</p>
          </div>
        </el-aside>
      </el-container>
      <ButtonMenu></ButtonMenu>
    </el-container>
  </div>
</template>

<script>
import NavHeader from "../Transfer/NavHeader";
import Prediction from "./Prediction";
import Timeline from "../Timeline/Timeline";
import ButtonMenu from "../Decorate/ButtonMenu";
export default {
  components: { NavHeader, Prediction, Timeline, ButtonMenu },
  data () {
    return {
      activeName: 'room'
    }
  },
  methods: {
  },

}
</script>

<style scoped>
.transfer {
  /* background-color: #D5B09D; */
  background-color: #bea5a9;

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
  height: 80%;
  width: 100%;
}

.el-header {
  text-align: center;
  height: 20% !important;
  padding: 0.5% 0 0.5% 2%;
  /*弹性容器 flex 布局*/
  display: flex;
  /*两端对齐*/
  justify-content: space-between;
}

/*卡片导航栏*/
.el-tabs {
  width: 60.5%;
  height: 100%;
  /*阴影效果*/
  box-shadow: 0.3125rem 0.3125rem 0.3125rem #a57878;
  text-align: left;
  /*15px的圆角*/
  border-radius: 0.9375rem;
  background-color: #e8e1d1;
}
/deep/ .el-tabs__header.is-top {
  color: black;
  background-color: #888880;
  border-radius: 0.9375rem;
  height: 30%;
}
/deep/ .el-tabs--border-card > .el-tabs__header .el-tabs__item {
  color: #eee;
  border-left: 0;
  border-right: 0;
}

/deep/ .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: #ffffff;
  /*background-color: #dee7e6;*/
  background-color: #888880;
  border-right-color: #dcdfe6;
  border-left-color: #dcdfe6;
  padding-left: 0;
  font-size: 1rem;
}
/deep/ .el-tabs__content {
  /*介绍文字字体大小*/
  font-size: 1.1rem;
  text-indent: 2em;
  padding: 2% !important;
  height: 70%;
  border-radius: 0.9375rem;
  /*background-color: #58849D;*/
}

.head_right {
  /*background-color: #75ff8c;*/
  width: 40%;
  position: relative;
  top: 0;
}
.rBox {
  position: relative;
  background: url("../../assets/img/疫情分析室.png");
  background-size: 100% 100%;
  left: 16%;
  top: 10%;
  width: 72%;
  height: 86.4%;
}
.transfer > .el-container > .el-container > .el-main {
  position: relative;
  width: 60%;
}
.el-main {
  color: #333;
  text-align: center;
  /*line-height: 160px;*/
  height: 100%;
  padding: 2%;
}
.main_left {
  position: relative;
  background-color: #e8e1d1;
  height: 100%;
  overflow: hidden;
  /*阴影效果*/
  /*box-shadow: 0 0 0.625rem #888888;*/
  /*box-shadow: 0.3125rem -0.3125rem 0.3125rem #d7d7d7;*/
  box-shadow: 0.3125rem 0.3125rem 0.3125rem rgba(165, 120, 120, 0.57);
  /*15px的圆角*/
  border-radius: 0.9375rem;
}

.el-aside {
  /*background-color: #D3DCE6;*/
  color: #333;
  /*text-align: center;*/
  /*line-height: 200px;*/
  /*width: 40% !important;*/
  width: 37% !important;
  height: 100% !important;
  padding: 2% 0;
  overflow: hidden;
}
.aside_box {
  position: relative;
  width: 92%;
  /*margin-left: 2%;*/
  margin-right: 2%;
  /*15px的圆角*/
  border-radius: 0.9375rem;
}
.aside_box.top {
  height: 47%;
  padding: 0 2%;
  background-color: #e8e1d1;
  box-shadow: 0.3125rem 0.3125rem 0.3125rem rgba(165, 120, 120, 0.57);
}
.aside_box.bottom {
  height: 46.5%;
  font-size: 1em;
  padding: 1% 2% 0 2%;
  /*padding-left: 2%;*/
  text-align: left;
  text-indent: 2em;
  margin-top: 5%;
  background-color: #e8e1d1;
  overflow: auto;
  box-shadow: 0.3125rem 0.3125rem 0.3125rem rgba(165, 120, 120, 0.57);
}



.aside_box.bottom > p {
  margin-bottom: 0;
  font-size: 1rem;
}
.topP {
  margin-top: 0;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

