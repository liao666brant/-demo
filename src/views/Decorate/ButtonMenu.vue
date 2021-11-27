<template>
  <div class="ButtonMenu">
    <!--                          菜单按钮和对话框-->
    <div class="btn_menu" @click="centerDialogVisible = true">
      <img
        ref="navBox"
        src="../../assets/img/导航.png"
        alt=""
        width="100px"
        class="nav"
        :style="{ nav: centerDialogVisible }"
      />
    </div>
<!--     <div id="tips">
      <img src="../../assets/img/提示.png" alt="" width="40px" id="tipsImg" />
      <p id="tipsTxt">点击上面的图标<br />可以打开导航栏哦</p>
    </div> -->
    <el-dialog width="30%" :visible.sync="centerDialogVisible" center>
      <label class="dialog_btn">
        <div
          class="dialog_main"
          @click="btn_router('/Home')"
          style="text-align: center"
        >
          <img src="../../assets/img/主页.png" alt="图标" />
          <div class="dialog_btn_title">侦测站</div>
        </div>
      </label>
      <label class="dialog_btn">
        <div
          class="dialog_main"
          @click="btn_router('/bank')"
          style="text-align: center"
        >
          <img src="../../assets/img/资料.png" alt="图标" />
          <div class="dialog_btn_title">资料馆</div>
          <!--            <br>-->
        </div>
      </label>
      <label class="dialog_btn">
        <div
          class="dialog_main"
          @click="btn_router('/room')"
          style="text-align: center"
        >
          <img src="../../assets/img/分析统计.png" alt="图标" />
          <div class="dialog_btn_title">分析室</div>
        </div>
      </label>
      <label class="dialog_btn">
        <div
          class="dialog_main"
          @click="btn_router('/detail')"
          style="text-align: center"
        >
          <img src="../../assets/img/更多.png" alt="图标" />
          <div class="dialog_btn_title">展示厅</div>
        </div>
      </label>
      <span slot="footer" class="dialog-footer"> </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ButtonMenu",
  data() {
    return {
      centerDialogVisible: false,
      show: false,
    };
  },
  methods: {
    changeHeight() {
      var nav = this.$refs.navBox;
      if (this.centerDialogVisible == false) {
        this.show = true;
        nav.style.top = 0 + "px";
        nav.style.transition = "1s";
      } else if (this.centerDialogVisible == true) {
        this.show = false;
        nav.style.top = -150 + "px";
        nav.style.transition = "1s";
      }
    },
    btn_router(flag) {
      this.$router.push(flag);
    },
  },
};
</script>
<style scoped>
.nav {
  cursor: pointer;
  position: fixed;
  float: right;
  top: -3%;
  right: 2%;
  z-index: 999;
  animation-iteration-count: infinite;
  animation-name: shake;
  animation-timing-function: ease-in-out;
  -webkit-animation-duration: 4s;
}
@-webkit-keyframes shake {
  0% {
    -webkit-transform: rotate(0deg);
    -webkit-transform-origin: 50% 0;
    transition: 1s;
  }
  25% {
    -webkit-transform: rotate(10deg);
    -webkit-transform-origin: 50% 0;
    transition: 1s;
  }
  50% {
    -webkit-transform: rotate(0deg);
    -webkit-transform-origin: 50% 0;
    transition: 1s;
  }
  75% {
    -webkit-transform: rotate(-10deg);
    -webkit-transform-origin: 50% 0;
    transition: 1s;
  }
  100% {
    -webkit-transform: rotate(0deg);
    -webkit-transform-origin: 50% 0;
    transition: 1s;
  }
}

</style>
<style scoped>
.btn_menu {
  /*   z-index: 10;
  position: fixed;
  width: 1.875rem;
  height: 1.875rem;
  left: 62.5rem;
  top: 0.125rem;
  background-color: #42b983;
  background-image: url("../../assets/img/导航.png"); */
}
/* Dialog对话框 公共部分样式 Start*/
/*蒙层部分*/
/deep/.commonDialog {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 101;
  overflow: hidden;
}
/*框体部分*/
/deep/.commonDialog .content {
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5625rem;
  box-shadow: 0.125rem 0.1875rem 0.3125rem #bbb;
  overflow: hidden;
  padding-bottom: 1.5625rem;
  margin-bottom: 1.875rem;
  max-height: 90%;
  width: 62.5rem;
}
/*head 部分*/
/deep/.commonDialog .content .head {
  height: 2.75rem;
  line-height: 2.75rem;
  background: #efefef;
  width: 100%;
  text-align: center;
  color: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}
/*内容区部分*/
/deep/.commonDialog .content .main {
  width: 100%;
  max-height: 70vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5625rem 1.25rem;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
  margin-bottom: 0.3125rem;
}
/deep/.el-dialog,
.el-message-box {
  border-radius: 0.5625rem;
}
/deep/.el-dialog__headerbtn,
.el-message-box__headerbtn {
  /* top: 5px !important;
   right: 10px;*/
  font-size: 1.125rem;
}
/deep/.el-icon-close {
  color: #666 !important;
}
/deep/.el-dialog__header,
.el-message-box__header {
  border-top-left-radius: 0.5625rem;
  border-top-right-radius: 0.5625rem;
  height: 2.75rem;
  /*background: #efefef;*/
  background: #a9cdff;
  width: 100%;
  text-align: center;
  color: #666;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25rem;
  box-sizing: border-box;
}
/deep/.el-dialog__title,
.el-message-box__title {
  color: #666;
  font-size: 0.75rem !important;
}
/deep/.coverage-release .el-dialog__body {
  padding: 1.25rem;
}
/deep/ .el-dialog__body {
  display: flex;
  justify-content: space-between;
}
/* Dialog对话框 公共部分样式 End*/
/deep/.el-dialog {
  /*background-color: #cbe1f1;*/
  width: 42% !important;
  height: 31% !important;
  top: 15%;
  box-shadow: 0 0.2375rem 0.18125rem rgba(0, 0, 0, 0.034),
    0 0.56875rem 0.4rem rgba(0, 0, 0, 0.042),
    0 1.075rem 0.70625rem rgba(0, 0, 0, 0.048),
    0 1.9125rem 1.18125rem rgba(0, 0, 0, 0.052),
    0 3.575rem 2.1125rem rgba(0, 0, 0, 0.058),
    0 8.5625rem 5rem rgba(0, 0, 0, 0.07);
  border-radius: 0.625rem;
}
/*开启对话框后的背景层*/
.el-dialog__wrapper {
  /*background-color: #EDF2F7;*/
  background-color: rgba(237, 242, 247, 0.67);
}
/*对话框按钮*/
/deep/.dialog_btn {
  /*margin: 10px 0;*/
}
/deep/.dialog_btn:hover {
  transition: all 1s;
  top: -0.3125rem;
  /*box-shadow: 0 0 35px #2775b6;*/
  box-shadow: 0 2.4px 8px -11px rgba(39, 117, 182, 0.41),
    0 6.2px 18.5px -11px rgba(39, 117, 182, 0.61),
    0 12.6px 34.9px -11px rgba(39, 117, 182, 0.38),
    0 25.9px 67.6px -11px rgba(39, 117, 182, 0.34),
    0 71px 182px -11px rgba(39, 117, 182, 0.4);
  background-color: rgba(39, 117, 182, 0.15);
  border-radius: 0.9375rem;
  opacity: 0.85;
  cursor: pointer;
}
.dialog_main {
  margin: 0.625rem;
  font-size: 1.2rem;
  color: #8c939d;
  font-weight: bold;
}
.dialog_main > img {
  width: 5rem;
  height: 5rem;
}
.dialog_main > img:hover {
  transition: all 0.15s;
  width: 5.3125rem;
  height: 5.3125rem;
}
</style>
