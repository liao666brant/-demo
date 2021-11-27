<template>
  <div id="TopTen">
    <!--    <div class="box"-->
    <!--         style="width: 23.894375rem; height: 16.62125rem;"-->
    <!--         ref="top_ref"></div>-->
    <div class="box"
         style="width: 100%; height: 100%;"
         ref="top_ref"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  data() {
    return {
      timeDate: [],
      addOverseasCount: [],
      totalOverseasCount: []
    }
  },
  mounted() {
    this.getApi()
  },
  methods: {
    getApi() {
      this.axios.get('http://110.42.237.123:8080/CovidData/overseas_data').then(res => {
        // 获取top10省份名称
        // var confirmedCount = res.data.map((item) => item.confirmedCount);
        this.addOverseasCount = res.data.map((item) => item.addOverseasCount);
        this.timeDate = res.data.map((item) => item.date);
        this.totalOverseasCount = res.data.map((item) => item.totalOverseasCount);
        // console.log(totalOverseasCount)
        // console.log(addOverseasCount)
        this.drawChart()
      }).catch((err) => {
        console.log(err)
        console.log('获取请求失败！');
      });
    },
    drawChart() {
      let myEcharts = this.$echarts.init(this.$refs.top_ref)
      const option = {
        //backgroundColor: '#031A32',
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true
            }
          }
        },
        grid: {
          top: '12%',
          left: '2%',
          right: '0%',
          bottom: '-2%',
          containLabel: true
        },
        legend: {
          // data: ["昨日总人数",  "昨日使用率"],
          data: ["新增境外输入",  "总境外输入"],
          top: "0%",
          left:'18%',
          textStyle: {
            color: "#000",
            fontSize: 11
          }
        },
        xAxis: {
          data: this.timeDate,
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: "#3d5269",
              width: 2
            }
          },
          axisTick: {
            show: true, //隐藏X轴刻度
            alignWithLabel: true
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#396A87", //X轴文字颜色
              fontSize: 14
            },
            interval: 0,
            rotate: 30
          }
        },
        yAxis: [{
          type: "value",
          name: "境外新增数",
          nameTextStyle: {
            color: "#396A87",
            fontSize: 12,
            left: "2%"
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 2,
              color: "#3d5269"
            }
          },
          axisTick: {
            show: true
          },
          axisLine: {
            show: true
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#396A87",
              fontSize: 12
            }
          }
        },
          {
            type: "value",
            name: "总境外输入数",
            nameTextStyle: {
              color: "#396A87",
              fontSize: 12
            },
            position: "right",
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#396A87",
                width: 1
              }
            },
            axisLabel: {
              show: true,
              formatter: "{value}", //右侧Y轴文字显示
              textStyle: {
                color: "#396A87",
                fontSize: 14
              }
            }
          }
        ],
        series: [{
          name: "新增境外输入",
          type: "bar",
          barWidth: 12,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: "#5092da"
              },
                {
                  offset: 1,
                  color: "#3d5269"
                }
              ])
            }
          },
          data: this.addOverseasCount
        },
          {
            name: "总境外输入",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 6, //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              color: "#5092da",
              borderColor: "#5092da",
              width: 2,
              shadowColor: "#5092da",
              shadowBlur: 2
            },
            lineStyle: {
              color: "#5092da",
              width: 2,
              shadowBlur: 2
            },
            data: this.totalOverseasCount
          }
        ]
      }
      myEcharts.setOption(option)
      // 使图表跟随窗口缩放
      window.addEventListener("resize", function () {
        myEcharts.resize();
      });
    }
  }
}
</script>

<style>
#TopTen {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
