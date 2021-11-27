<template>
  <div class="BottomRight">
    <div
      class="box"
      style="width: 100%; height: 100%"
      ref="BottomRight_ref"
    ></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: "BottomRight",
  data() {
    return {
      pDate: [],
      pTotalConfirmCount:[],
      pCured:[],
      pDeath:[]
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
      //this.axios.get('http://110.42.237.123:8080/CovidData/hainan_data').then((res) => {
      this.pDate = res.data.map((item) => item.date); //日期
      this.pCured = res.data.map((item) => item.cured);
      this.pDeath = res.data.map((item) => item.death); 
      this.pTotalConfirmCount = res.data.map((item) => item.totalConfirmCount);
      /* this.pDate = res.data.map((item) => item.date); //日期
      this.pAddConfirmCount = res.data.map((item) => item.addConfirmCount); //各省新增确诊人数
      this.pTotalConfirmCount = res.data.map((item) => item.totalConfirmCount); //各省累计确诊人数
      this.pCured = res.data.map((item) => item.cured); //各省累计治愈人数
      this.pDeath = res.data.map((item) => item.death); */
      this.drawChart()
    });
    },
    drawChart() {
    var pDate=this.pDate
    var pAddConfirmCount = this.pAddConfirmCount
    var pCured = this.pCured 
    var pDeath  = this.pDeath;
      let myEcharts = this.$echarts.init(this.$refs.BottomRight_ref,'purple-passion');


    var category = this.pDate;
var dottedBase = [];
var lineData = this.pDeath;
var barData = this.pTotalConfirmCount
var rateData = this.pCured;               





      let option = {
           dataZoom: [
              {
                textStyle:{ color:"white" },
                show: true,
                realtime: true,
                z: 100,
                height: 20,
                width: "80%",
                bottom: '10%',
                left: "center",
                containLabel: true,
                start: 0,
                end: 5,
                startValue: 0,
                endValue: 10,
                
              },
              {
                type: "inside",
                realtime: true,

                start: 0,
                end: 100,
              },
            ],
      
    title: {
        text: '全省疫情累积图',
        x: 'center',
        y: '2%',
        /* textStyle:{
            color:'#B4B4B4',
            fontSize:16,
            fontWeight:'normal',
        }, */
        
    },
    //backgroundColor: '#191E40',
    backgroundColor: false,
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.8)',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#7B7DDC'
            }
        }
    },
    legend: {
        data: ['累计确诊人数', '累计治愈人数','累计死亡人数',],
        textStyle: {
            color: 'white'
        },
        top:'10%',
    },
    grid:{
        x:'10%',
        width:'80%',
        y:'17%',
        height:'55%'
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#B4B4B4'
            }
        },
        axisLabel: {
              color: '#fff',
              width: 100,
            },
        axisTick:{
            show:false,
        },
    },
    yAxis: [{
        
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
        },
        axisLabel:{
            formatter:'{value} ',
            color: '#fff',
              width: 100,
        }
    },
        {

        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
        },
        axisLabel:{
            formatter:'{value} ',
            color: '#fff',
              width: 100,
        }
    }],
    
    series: [{
        name: '累计治愈人数',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 8,
        yAxisIndex: 1,
        itemStyle: {
                normal: {
                color:'#3EACE5'},
        },
        data: rateData
    }, 
    
    {
        name: '累计确诊人数',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#956FD4'},
                        {offset: 1, color: '#3EACE5'}
                    ]
                )
            }
        },
        data: barData
    }, 
    
    {
        name: '累计死亡人数',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(156,107,211,0.5)'},
                        {offset: 0.2, color: 'rgba(156,107,211,0.3)'},
                        {offset: 1, color: 'rgba(156,107,211,0)'}
                    ]
                )
            }
        },
        z: -12,
        
        data: lineData
    }, 
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
.BottomRight {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
