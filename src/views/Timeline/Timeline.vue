<template>
  <div class="Timeline">
    <i
      class="boxswich"
      :class="{
        'el-icon-video-pause': this.moveswitch == true,
        'el-icon-video-play': this.moveswitch == false,
      }"
      @click="changeSwitch"
    ></i>
    <div class="box" style="width: 100%; height: 100%" ref="Timeline_ref"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "Timeline",
  data() {
    return {
      moveswitch: true,
      animationswitch: true,
      nowZoomStart: 0,
      nowZoomEnd: 2,
    };
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    changeSwitch() {
      this.moveswitch = !this.moveswitch;
    },
    drawChart() {
      var that = this;
      this.axios
        .get("http://110.42.237.123:8080/CovidData/currentConfirmCount_data")
        .then((res) => {
          let myEcharts = this.$echarts.init(this.$refs.Timeline_ref);
          let mockData = res.data;
          let xData = mockData.map((item) => item.date);
          let yData = mockData.map((item) => item.currentConfirmCount);

          
          let option = {
            title: {
            text: "全国确诊人数每日变化图",
            x: 'center',
            y:'3.5%'
          },
            dataZoom: [
              {
                textStyle:{ color:"black" },
                backgroundColor:'#c0c0c0',
              
                show: true,
                realtime: true,
                z: 100,
                height: 20,
                width: "70%",
                bottom: '8%',
                left: "center",
                containLabel: true,
                start: 0,
                end: 2,
                startValue: 0,
                endValue: 2,
              },
              {
                type: "inside",
                realtime: true,

                start: 0,
                end: 100,
              },
            ],
            //backgroundColor: "rgba(0,0,0,0.5)",
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross",
                label: {
                  backgroundColor: "#6a7985",
                  fontSize: 12,
                },
              },
              textStyle: { fontSize: "100%" },
              formatter: (v) => {
                return `
              <div class='u-p-2'>
                <div class='fz-10'>日期：${v[0].axisValue}</div>
                <div class='fz-10 u-mt-2'>人数：${v[0].value}</div>
              </div>
            `;
              },
            },
            xAxis: {
              type: "category",
              boundaryGap: false, // 两边留白
              axisLabel: { textStyle: { color: "#000", fontSize: 14 } },
              data: xData,
              axisLine: { lineStyle: { color: "#000", width: 1 } },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "rgba(255,255,255,.2)",
                  width: 1,
                },
                show: true,
              },
            },
            yAxis: {
              name: "人",
              type: "value",
              scale: true,
              nameTextStyle: {
                color: "rgba(255,255,255,.5)",
                align: "right",
                padding: [0, 10, 0, 0],
                fontSize: "100%",
              },
              axisLabel: {
                textStyle: { color: "#000", fontSize: "100%" },
                margin: 8,
              },
              axisLine: { lineStyle: { color: "#000", width: 1 } },
              splitLine: {
                lineStyle: {
                  type: "solid",
                  color: "rgba(255,255,255,.2)",
                  width: 1,
                },
                show: true,
              },
            },
            series: [
              {
                name: "lin1",
                type: "line",
                stack: "",
                // 修改的是线下区域的颜色
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "rgba(236, 99, 123, .5)",
                    },
                    {
                      offset: 1,
                      color: "rgba(102, 212, 250,.0)",
                    },
                  ]),
                },
                // 修改的是线的颜色
                lineStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    // 0% 处的颜色                           // 100% 处的颜色
                    colorStops: [
                      { offset: 0, color: "#3a76f6" },
                      { offset: 0.25, color: "#66d4fa" },
                      { offset: 0.75, color: "#f8d470" },
                      { offset: 1, color: "#ec637b" },
                    ],
                    global: false, // 缺省为 false
                  },
                  width: 2,
                },
                //图例样式，默认空心圆，设为none是实心，还有'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
                symbol: "none",
                data: yData,
                markLine: {
                  symbol: "none",
                  data: [
                    {
                      name: "人数最高峰",
                      xAxis: "2020.2.17",
                      lineStyle: {
                        color: "#eb6272",
                        type: "dashed",
                        width: 0,
                      },
                      label: {
                        show: true,
                        formatter: "2020年2月17日\n人数最高峰\n{a|}",
                        align: "center",
                        distance: [0, -60],
                        fontSize: 14,
                        rich: {
                          // a:{ backgroundColor: { image: bg1 }, width: 20, height: 20 }
                        },
                      },
                    },
                    {
                      name: "确诊人数归零",
                      xAxis: "2020.5.28",
                      // symbol: 'image://' + bg2,
                      symbol: "circle",
                      symbolSize: 10,
                      lineStyle: {
                        color: "#66cfef",
                        type: "dashed",
                        width: 1,
                      },
                      label: {
                        show: true,
                        formatter: "2020.5.28\n确诊人数最低",
                        fontSize: 10,
                        align: "center",
                      },
                    },
                  ],
                },
              },
              /*           {
            name: "lin2",
            type: "line",
            stack: "",
            // 修改的是线下区域的颜色
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(236, 99, 123, .5)",
                },
                {
                  offset: 1,
                  color: "rgba(102, 212, 250,.0)",
                },
              ]),
            },
            // 修改的是线的颜色
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                // 0% 处的颜色                           // 100% 处的颜色
                colorStops: [
                  { offset: 0, color: "#3a76f6" },
                  { offset: 0.25, color: "#66d4fa" },
                  { offset: 0.75, color: "#f8d470" },
                  { offset: 1, color: "#ec637b" },
                ],
                global: false, // 缺省为 false
              },
              width: 2,
            },
            //图例样式，默认空心圆，设为none是实心，还有'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
            symbol: "none",
            data: temp,
            markLine: {
              symbol: "none",
              data: [
                {
                  name: "人数最高峰",
                  xAxis: "2-17",
                  lineStyle: {
                    color: "#eb6272",
                    type: "dashed",
                    width: 0,
                  },
                  label: {
                    show: true,
                    formatter: "2.17日\n人数最高峰\n{a|}",
                    align: "center",
                    distance: [0, -60],
                    fontSize: 14,
                    rich: {
                      // a:{ backgroundColor: { image: bg1 }, width: 20, height: 20 }
                    },
                  },
                },
                {
                  name: "确诊人数归零",
                  xAxis: "3-05",
                  // symbol: 'image://' + bg2,
                  symbol: "circle",
                  symbolSize: 10,
                  lineStyle: {
                    color: "#66cfef",
                    type: "dashed",
                    width: 1,
                  },
                  label: {
                    show: true,
                    formatter: "3.5日\n人数归零",
                    fontSize: 14,
                    align: "center",
                  },
                },
              ],
            },
          }, */
            ],
          };

          myEcharts.setOption(option);

          if (that._data.animationswitch == true) {
            setInterval(function () {
               myEcharts.on("datazoom", (params) => {
              that.nowZoomEnd = params.end;
              that.nowZoomStart = params.start;
              
            });
              var t = that._data.moveswitch;
              
              if (that._data.animationswitch == true) {
                that._data.animationswitch = false;
              }
              if (t) {
                // 每次向后滚动一个，最后一个从头开始。
               if (option.dataZoom[0].end > 99||that.initSwitch) {
                that.initSwitch=false
                option.dataZoom[0].end = 2;
                option.dataZoom[0].start = 0;
                that.nowZoomEnd = option.dataZoom[0].end;
                that.nowZoomStart = option.dataZoom[0].start;
              } else {
                option.dataZoom[0].end = that.nowZoomEnd + 0.5;
                option.dataZoom[0].start = that.nowZoomStart + 0.5;
                that.nowZoomEnd = option.dataZoom[0].end;
                that.nowZoomStart = option.dataZoom[0].start;
              }
                myEcharts.setOption(option);
              }
            }, 2000);
          }
          window.addEventListener("resize", function () {
            myEcharts.resize();
          });
        });
    },
  },
};
</script>

<style scoped>
.boxswich {
  position: absolute;
  right: 87%;
  bottom: 5%;
  z-index: 999;
  font-size: 150%;
  cursor: pointer;
}
.Timeline {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
