<template>
<div class="news">
  <div  id="titleText">
    <h2>
      <span>
        <img class="titleImg" alt="icon" src="../../assets/img/新闻 list.png">
      </span>
      疫情新闻
    </h2>
  </div>
  <div class="newsBottom">
    <el-timeline>
      <el-timeline-item v-for="(item, index) in newsData"
                        :timestamp="item.date" placement="top"
                        color="#0bbd87">
        <el-card>
          <!--        <h4>{{ item.title }}</h4>-->
          <h4>
          <span>
            <img alt="图标" src="../../assets/img/新闻.png" width="16px" height="18px">
          </span>
            <a :href="item.href" target="_blank">{{ item.title }}</a>
          </h4>
          <p>{{ item.content }}</p>
          <div>新闻来源：<a href="http://www.xinhuanet.com/politics/xxgzbdgrdfyyq/index.htm" target="_blank">@新华网</a> </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>

</div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      newsData: {},
      msg: '哈哈'
    }
  },
  created() {
    this.getApi()
  },
  methods: {
    getApi () {
      this.axios.get('http://110.42.237.123:8080/CovidData/news_data').then(res =>{
        this.newsData = res.data
      }).catch( err => {

      })
    }
  }
}
</script>

<style scoped>
.news{
  position: relative;
  width: 100%;
  height: 100%;

}
#titleText {
  /*background-color: rgba(66, 108, 215, 0.72);*/
  /*background-color: #62D9FF;*/
  width: 100%;
  height: 5% !important;
  position: relative;
  margin: 0 auto;
  padding: 5% 0;
}
#titleText >h2 {
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  text-align: left;
  left: 10%;
  font-size: 2rem;

}
.newsBottom{
  position: relative;
  width: 100%;
  height: 100%;
  /*padding: 0 5%;*/
}
.el-timeline{
  position: relative;

  width: 80%;
  /*left: -10%;*/
  padding-top: 5%;
}
.titleImg {
  width: 1.25rem;
  height: 1.25rem;
  margin: 0 auto;
}
/deep/.el-card__body {
  border-radius: 10px;
}
.el-card__body > h4 {
  margin-top: 0;
  text-align: left;
  cursor: pointer;
}
.el-card__body > h4 >a {
  border-bottom: 1px solid #6e6ee4;
  text-decoration: none;
  cursor: pointer;
  color: #02a6b5;
}
.el-card__body > h4 >span {
  margin-right: 5px;
}
.el-card__body > p {
  text-align: left;
  text-indent: 2em;
  /*margin-bottom: 0;*/
}
.el-card__body > div {
  text-align: right;
}
</style>
