<template>
  <div class="TopRight">
    <div class="box" style="width: 100%; height: 100%" ref="TopRight_ref"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "TopRight",
  data() {
    return {
      province: "北京",
      pAddConfirmCount:[],
      pDate:[],
    };
  },
  mounted() {
    
    this.getApi();
  },
  methods: {
    getApi(){
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
      ["黑龙江", "http://110.42.237.123:8080/CovidData/heinongjiang_data"],
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
      this.pAddConfirmCount = res.data.map((item) => item.addConfirmCount); //各省累计确诊人数
      /* this.pDate = res.data.map((item) => item.date); //日期
      this.pAddConfirmCount = res.data.map((item) => item.addConfirmCount); //各省新增确诊人数
      this.pTotalConfirmCount = res.data.map((item) => item.totalConfirmCount); //各省累计确诊人数
      this.pCured = res.data.map((item) => item.cured); //各省累计治愈人数
      this.pDeath = res.data.map((item) => item.death); */
      this.drawChart()
    });
    },
    drawChart() {
      let myEcharts = this.$echarts.init(this.$refs.TopRight_ref,'purple-passion');
      var pDate = this.pDate;
      var xdata = this.pAddConfirmCount;
      
      let option = {
              dataZoom: [
              {
                textStyle:{ color:"white" },
                show: true,
                realtime: true,
                z: 100,
                height: 20,
                width: "80%",
                bottom: 5,
                left: "center",
                containLabel: true,
                start: 0,
                end: 10,
                startValue: 0,
                endValue: 10
              },
              {
                type: "inside",
                realtime: true,

                start: 0,
                end: 100,
              },
            ],
                      title: {
            text: "全省每日新增确诊图",
            x: 'center',
            y:'7%'
          },
        //backgroundColor: "#232d36",
        backgroundColor: false,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 255, 233,0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255, 255, 255,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)",
                  },
                ],
                global: false,
              },
            },
          },
        },
        grid: {
          top: "27%",
          left: "10%",
          right: "7%",
          bottom: "15%",
          height:'55%'
          // containLabel: true
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: false,
              color: "#A582EA",
            },

            axisLabel: {
              color: '#fff',
              width: 100,
            },
            splitLine: {
              show: false,
            },
            boundaryGap: false,
            data: pDate, //this.$moment(data.times).format("HH-mm") ,
          },
        ],

        yAxis: [
          {
            type: "value",
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#00BFF3",
                opacity: 0.23,
              },
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              margin: 20,
              textStyle: {
                color: "#fff",
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          
          {
            name: "新增确诊人数：",
            type: "line",
            showAllSymbol: true,
            symbol: "none",
            symbolSize: 10,
            lineStyle: {
              normal: {
                color: 'orange',
              },
            },
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: '#fff',
              },
            },
            itemStyle: {
              color: "#fff",
              borderColor: "#A582EA",
              borderWidth: 2,
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(43,193,145,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(43,193,145,0)",
                    },
                  ],
                  false
                ),
              },
            },
            data: xdata, //data.values
          },
        ],
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
.TopRight {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
