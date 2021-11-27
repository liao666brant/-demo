<template>
  <div class="map_world">
    <button @click="changeV" class="btn slide">中国地图</button>
    <div class="box" style="width: 100%; height: 100%" ref="WorldMap_ref"></div>
  </div>
</template>

<script>
//import echarts from 'echarts'
import * as echarts from "echarts";
import { geoJson, geoCoordMap1 } from "../../assets/js/WorldMap";
export default {
  name: "WorldMap",
  data() {
    return {
      top10: [],
    };
  },
  mounted() {
    this.getApi();
  },
  methods: {
    changeV() {
      this.$router.push("/ChinaMap");
    },
    getApi() {
      this.axios
        .get("http://110.42.237.123:8080/CovidData/worldTop10_data")
        .then((res) => {
          this.top10 = res.data;
          this.drawChart();
        })
        .catch((err) => {
          console.log(err);
          console.log("获取请求失败！");
        });
    },
    drawChart() {
      //this.axios.get("http://localhost:8080/res/test.json").then((res) => {
      this.axios
        .get("http://110.42.237.123:8080/CovidData/world_data")
        .then((res) => {
          var that = this;
          let myEcharts = this.$echarts.init(this.$refs.WorldMap_ref);

          //console.log(echarts);
          echarts.registerMap("world", geoJson);
          var geoCoordMap = geoCoordMap1;
          // let data_tmp=[];
          // data.series[0].fields&data.series[0].fields[0].values.buffer.map((d,i)=>{
          //   const obj = {};
          //   obj.name = data.series[0].fields[0].values.buffer[i];
          //   obj.value = parseInt(data.series[0].fields[1].values.buffer[i]);
          //   data_tmp.push(obj);
          // });
          myEcharts.on("click", function (params) {
            if (params.data.name == "China") {
              that.$router.push({
                path: "/ChinaMap",
              });
            }
          });
          var data_tmp = res.data;
          data_tmp[0].name = "United States";
          data_tmp = data_tmp.concat(this.top10);
          /* for(let i in res.data){
    if(res.data[i].name=='USA'){
        data_tmp.push({name:'United States',value:res.data[i].confirmedCount})
        continue
    }
    data_tmp.push({name:res.data[i].name,value:res.data[i].confirmedCount})
} */

          /* var data_tmp = [
	{ name: 'China', value: 199 },
    { name: '中国', value: 199 },
    { name: '印度', value: 42 },
    { name: '韩国', value: 102 },
    { name: '日本', value: 81 },
    { name: '美国', value: 212 },
    { name: '加拿大', value: 199 }]; */
          var max = 480,
            min = 9; // todo
          var maxSize4Pin = 100,
            minSize4Pin = 20;

          var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
              var geoCoord = geoCoordMap[data[i].name];
              if (geoCoord) {
                res.push({
                  name: data[i].name,
                  value: geoCoord.concat(data[i].value),
                });
              }
            }
            return res;
          };

          let option = {
            backgroundColor: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#0f378f", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#5b5b5b", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
            title: {
              top: 10,
              text: "世界新冠疫情统计",
              subtext: "",
              x: "center",
              textStyle: {
                fontSize: 24,
                color: "#ccc",
              },
            },

            tooltip: {
              trigger: "item",
              formatter: function (params) {
                if (typeof params.value[2] == "undefined") {
                  return params.name + " : " + params.value;
                } else {
                  return params.name + " : " + params.value[2];
                }
              },
            },
            legend: {
              orient: "vertical",
              y: "bottom",
              x: "right",
              data: ["流量"],
              textStyle: {
                color: "#fff",
              },
            },
            visualMap: {
              show: false,
              min: 0,
              max: 500,
              left: "left",
              top: "bottom",
              text: ["高", "低"], // 文本，默认为数值文本
              calculable: true,
              seriesIndex: [1],
              inRange: {},
            },
            geo: {
              map: "world",
              zoom: 1,
              show: true,
              roam: true,
              label: {
                normal: {
                  show: false,
                  
                },
                emphasis: {
                  show: false,
                },
              },
              itemStyle: {
                normal: {
                  areaColor: "#3a7fd5",
                  borderColor: "#0a53e9", //线
                  shadowColor: "#092f8f", //外发光
                  shadowBlur: 20,
                },
                emphasis: {
                  areaColor: "#0a2dae", //悬浮区背景
                },
              },
            },
            series: [
              {
                symbolSize: 5,
                label: {
                  normal: {
                    formatter: "{b}",
                    position: "right",
                    show: true, //是否显示地名

                  },
                  emphasis: {
                    show: true,
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#fff",
                  },
                },
                name: "light",
                type: "scatter",
                coordinateSystem: "geo",
                data: convertData(data_tmp),
              },
              {
                type: "map",
                map: "china",
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                  normal: {
                    show: false,
                  },
                  emphasis: {
                    show: false,
                    textStyle: {
                      color: "#fff",
                    },
                  },
                },
                roam: true,
                itemStyle: {
                  normal: {
                    areaColor: "#031525",
                    borderColor: "#FFFFFF",
                  },
                  emphasis: {
                    areaColor: "#2B91B7",
                  },
                },
                animation: false,
                data: data_tmp,
              },
              {
                name: "Top 5",
                type: "scatter",
                coordinateSystem: "geo",
                symbol: "pin",
                symbolSize: [50, 50],
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      color: "#fff",
                      fontSize: 9,
                    },
                    formatter(value) {
                      return value.data.value[2];
                    },
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#dfae10", //标志颜色
                  },
                },
                data: convertData(
                  data_tmp
                    .sort(function (a, b) {
                      return b.value - a.value;
                    })
                    .slice(0, 21)
                ), // 流量最大的前
                showEffectOn: "render",
                rippleEffect: {
                  brushType: "stroke",
                },
                hoverAnimation: true,
                zlevel: 1,
              },
            ],
          };

          myEcharts.setOption(option);
          window.addEventListener("resize", function () {
            myEcharts.resize();
          });
        });
    },
  },
};
</script>
<style scoped>
.btn {
  position: absolute;
  right: 3%;
  bottom: 5%;
  z-index: 99;
  cursor: pointer;
}
.slide:hover,
.slide:focus {
  box-shadow: inset 6.5em 0 0 0 var(--hover);
}

.slide {
  --color: #409eff;
  --hover: #66c887;
}

button {
  color: var(--color);
  transition: 0.25s;
}
button:hover,
button:focus {
  border-color: var(--hover);
  color: #fff;
}

button {
  background: none;
  border: 2px solid #409eff;
  font: inherit;
  line-height: 1;
  /* margin: 0.5em; */
  padding: 1em 1em;
  /* background-color: #409eff; */
  color: #fff;
}
</style>
<style scoped>
.map_world {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
