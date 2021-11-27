<template>
  <div id="WorldData">
    <div class="box" style="width: 100%; height: 100%" ref="top_ref"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  // created () {
  //   this.getApi()
  // },
  mounted() {
    this.drawChart();
  },
  methods: {
    // getApi () {

    // },
    drawChart() {
      let myEcharts = this.$echarts.init(this.$refs.top_ref);
      this.axios.get("http://110.42.237.123:8080/CovidData/world_total_data").then((res) => {
        var date = res.data.map((item) => item.date);
        date.pop()
        var addConfirm = res.data.map((item) => item.addConfirm);
        var heal = res.data.map((item) => item.heal);
        var death = res.data.map((item) => item.death);
        for(let i=0;i<heal.length;i++){
            heal[i]=heal[i+1]-heal[i]
        }
                for(let i=0;i<death.length;i++){
            death[i]=death[i+1]-death[i]
        }
        
        const option = {
          dataZoom: [
              {
                show: false,
                realtime: true,
                z: 100,
                height: 20,
                width: "70%",
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
/*         title: {
          text: "用电量",
        }, */
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["新增人数", "治愈人数","死亡人数"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
/*         toolbox: {
          feature: {
            saveAsImage: {},
          },
        }, */
        xAxis: {
          type: "category",
          boundaryGap: false, //坐标轴两边留白
          data: date,
          axisLabel: {
            //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            //	margin:15,
            textStyle: {
              color: "#1B253A",
              fontStyle: "normal",
              fontFamily: "微软雅黑",
              fontSize: 12,
            },
            formatter: function (params) {
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 4; //一行显示几个字
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                for (var p = 0; p < rowNumber; p++) {
                  var tempStr = "";
                  var start = p * provideNumber;
                  var end = start + provideNumber;
                  if (p == rowNumber - 1) {
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    tempStr = params.substring(start, end) + "\n";
                  }
                  newParamsName += tempStr;
                }
              } else {
                newParamsName = params;
              }
              return newParamsName;
            },
            //rotate:50,
          },
          axisTick: {
            //坐标轴刻度相关设置。
            show: false,
          },
          axisLine: {
            //坐标轴轴线相关设置
            lineStyle: {
              color: "#E5E9ED",
              // opacity:0.2
            },
          },
          splitLine: {
            //坐标轴在 grid 区域中的分隔线。
            show: true,
            lineStyle: {
              color: "#E5E9ED",
              // 	opacity:0.1
            },
          },
        },
        yAxis: [
          {
            type: "value",
            splitNumber: 5,
            axisLabel: {
              textStyle: {
                color: "#000",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: 12,
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#E5E9ED",
                // 	opacity:0.1
              },
            },
          },
        ],
        series: [
          {
            name: "新增人数",
            type: "line",
            itemStyle: {
              normal: {
                color: "#3A84FF",
                lineStyle: {
                  color: "#3A84FF",
                  width: 1,
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(0,179,244,0.4)",
                    },
                    {
                      offset: 1,
                      color: "rgba(0,179,244, 0.9)",
                    },
                  ]),
                },
              },
            },
            data: addConfirm,
          },
          {
            name: "死亡人数",
            type: "line",
            itemStyle: {
              normal: {
                color: "rgba(255,80,124,1)",
                lineStyle: {
                  color: "rgba(255,80,124,1)",
                  width: 1,
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(255,80,124,0)",
                    },
                    {
                      offset: 1,
                      color: "rgba(255,80,124,0.6)",
                    },
                  ]),
                },
              },
            },
            data: death,
          },
          {
            name: "治愈人数",
            type: "line",
            itemStyle: {
              normal: {
                color: "#00CA60",
                lineStyle: {
                  color: "#00CA60",
                  width: 1,
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(92,214,113,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(92,214,113,0.35)",
                    },
                  ]),
                },
              },
            },
            data: heal,
          },
        ],
      };
      myEcharts.setOption(option);
      // 使图表跟随窗口缩放
      window.addEventListener("resize", function () {
        myEcharts.resize();
      });
      })
      
    },
  },
};
</script>

<style>
#WorldData {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
