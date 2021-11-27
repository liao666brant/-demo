<template>
  <div class="BottomLeft">
    <div class="box" style="width: 100%; height: 100%" ref="BottomLeft_ref"></div>
  </div>
</template>

<script>
export default {
  name: "BottomLeft",
  data () {
    return {
      pCured: [],
      pTotalConfirmCount: []
    };
  },
  mounted () {
    this.getApi()
  },
  methods: {
    getApi () {
      var hashMap = new Map([
        ["安徽", "http://110.42.237.123:8080/CovidData/anhui_data"],
        ["澳门", "http://110.42.237.123:8080/CovidData/aomen_data"],
        ["北京", "http://110.42.237.123:8080/CovidData/beijing_data"],
        ["福建", "http://110.42.237.123:8080/CovidData/fujian_data"],
        ["甘肃", "http://110.42.237.123:8080/CovidData/gansu_data"],
        ["广东", "http://110.42.237.123:8080/CovidData/guangdong_data"],
        ["广西", "http://110.42.237.123:8080/CovidData/guangxi_data"],
        ["贵州", "http://110.42.237.123:8080/CovidData/guizhou_data"],
        ["海南", "http://110.42.237.123:8080/CovidData/hainan_data"],
        ["河北", "http://110.42.237.123:8080/CovidData/hebei_data"],
        ["河南", "http://110.42.237.123:8080/CovidData/henan_data"],
        ["黑龙", "http://110.42.237.123:8080/CovidData/heinongjiang_data"],
        ["湖北", "http://110.42.237.123:8080/CovidData/hubei_data"],
        ["湖南", "http://110.42.237.123:8080/CovidData/hunan_data"],
        ["吉林", "http://110.42.237.123:8080/CovidData/jilin_data"],
        ["江苏", "http://110.42.237.123:8080/CovidData/jiangsu_data"],
        ["江西", "http://110.42.237.123:8080/CovidData/jiangxi_data"],
        ["辽宁", "http://110.42.237.123:8080/CovidData/liaoning_data"],
        ["内蒙古", "http://110.42.237.123:8080/CovidData/neimenggu_data"],
        ["宁夏", "http://110.42.237.123:8080/CovidData/ningxia_data"],
        ["青海", "http://110.42.237.123:8080/CovidData/qinghai_data"],
        ["山东", "http://110.42.237.123:8080/CovidData/shandong_data"],
        ["山西", "http://110.42.237.123:8080/CovidData/shanxi_province_data"],
        ["陕西", "http://110.42.237.123:8080/CovidData/shanxi_data"],
        ["上海", "http://110.42.237.123:8080/CovidData/shanghai_data"],
        ["四川", "http://110.42.237.123:8080/CovidData/sichuan_data"],
        ["台湾", "http://110.42.237.123:8080/CovidData/taiwan_data"],
        ["天津", "http://110.42.237.123:8080/CovidData/tianjing_data"],
        ["西藏", "http://110.42.237.123:8080/CovidData/xizang_data"],
        ["香港", "http://110.42.237.123:8080/CovidData/xianggang_data"],
        ["新疆", "http://110.42.237.123:8080/CovidData/xinjiang_data"],
        ["云南", "http://110.42.237.123:8080/CovidData/yunnan_data"],
        ["浙江", "http://110.42.237.123:8080/CovidData/zhejiang_data"],
        ["重庆", "http://110.42.237.123:8080/CovidData/chongqin_data"],
        ["南海诸岛", "http://110.42.237.123:8080/CovidData/hainan_data"],
      ]);
      var urlname = hashMap.get(this.$route.query.province);
      this.axios.get(urlname).then((res) => {

        this.pDate = res.data.map((item) => item.date); //日期
        this.pCured = res.data.map((item) => item.cured)
        this.pTotalConfirmCount = res.data.map((item) => item.totalConfirmCount);
        for (let i in this.pTotalConfirmCount) {
          this.pTotalConfirmCount[i] = -this.pTotalConfirmCount[i]
        }
        /* this.pDate = res.data.map((item) => item.date); //日期
        this.pAddConfirmCount = res.data.map((item) => item.addConfirmCount); //各省新增确诊人数
        this.pTotalConfirmCount = res.data.map((item) => item.totalConfirmCount); //各省累计确诊人数
        this.pCured = res.data.map((item) => item.cured); //各省累计治愈人数
        this.pDeath = res.data.map((item) => item.death); */
        this.drawChart()
      });
    },
    drawChart () {
      let myEcharts = this.$echarts.init(this.$refs.BottomLeft_ref);
      var days_emotion = this.pDate;

      // 正向和负向评论随时间变动的数据
      var data_emotion_positive = this.pCured;
      var data_emotion_negative = this.pTotalConfirmCount

      // 类别索引
      var category_emotion = ['positive', 'negative'];


      let option = {
        title: {
          text: '新冠疫情相关推特评论情绪分布情况'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: category_emotion,
          x2: '5%',
        },
        /*     grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            }, */
        xAxis: [

          {
            data: days_emotion,
            type: 'category'
          }
        ],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          },

        }],
        series: [{
          name: 'positive',
          type: 'bar',
          stack: '总量',
          color: '#66c0f4',
          // label: {
          //     show: true
          // },
          data: data_emotion_positive
        },
        {
          name: 'negative',
          type: 'bar',
          stack: '总量',
          color: '#f4506e', //df3150
          // label: {
          //     show: true,
          //     position: 'left'
          // },
          data: data_emotion_negative
        }
        ]
      };

      myEcharts.setOption(option);
      window.addEventListener("resize", function () {
        myEcharts.resize();
      });
    },
  },
};
</script>

<style scoped>
.BottomLeft {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
