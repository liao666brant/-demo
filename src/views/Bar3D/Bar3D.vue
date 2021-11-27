<template>
  <div id="Bar3D">
    <!--    <div class="box"-->
    <!--         style="width: 23.894375rem; height: 16.62125rem;"-->
    <!--         ref="top_ref"></div>-->
    <div class="box"
         style="width: 100%; height: 100%;"
         ref="Bar3D_ref"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.drawChart()

  },
  methods: {
    drawChart() {
      let myEcharts = this.$echarts.init(this.$refs.Bar3D_ref)
      const age = ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69',
        '70-79', '80-89', '90+'];
      const country = ['中国', '丹麦', '意大利',
        '荷兰', '韩国', '西班牙', '瑞士'];

      const data = [[0, 0, 0], [0, 1, 0.2], [0, 2, 0.2], [0, 3, 0.2], [0, 4, 0.4], [0, 5, 1.3], [0, 6, 3.6], [0, 7, 8.0], [0, 8, 14.8], [0, 9, 14.8],
        [1, 0, 0.2], [1, 1, 0.2], [1, 2, 0.2], [1, 3, 0.2], [1, 4, 0.2], [1, 5, 0.2], [1, 6, 4.5], [1, 7, 14.9], [1, 8, 24.6], [1, 9, 36.8],
        [2, 0, 0.1], [2, 1, 0], [2, 2, 0.1], [2, 3, 0.3], [2, 4, 0.9], [2, 5, 2.5], [2, 6, 9.5], [2, 7, 24.1], [2, 8, 30.2], [2, 9, 25.0],
        [3, 0, 0], [3, 1, 0], [3, 2, 0.1], [3, 3, 0.2], [3, 4, 0.4], [3, 5, 1.5], [3, 6, 7.3], [3, 7, 20.9], [3, 8, 28.7], [3, 9, 27.1],
        [4, 0, 0], [4, 1, 0], [4, 2, 0], [4, 3, 0.1], [4, 4, 0.2], [4, 5, 0.7], [4, 6, 2.5], [4, 7, 9.7], [4, 8, 22.2], [4, 9, 22.2],
        [5, 0, 0.2], [5, 1, 0.3], [5, 2, 0.3], [5, 3, 0.3], [5, 4, 0.6], [5, 5, 1.3], [5, 6, 4.5], [5, 7, 14.2], [5, 8, 23.4], [5, 9, 24.7],
        [6, 0, 0], [6, 1, 0], [6, 2, 0], [6, 3, 0.1], [6, 4, 0], [6, 5, 0.4], [6, 6, 2.1], [6, 7, 8.1], [6, 8, 19.9], [6, 9, 19.9]];
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        title: {
          text: '不同国家的COVID-19病死率（%）'
        },
        visualMap: {
          max: 30,
          inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          }
        },
        xAxis3D: {
          type: 'category',
          data: age,
          name: '年龄段'
        },
        yAxis3D: {
          type: 'category',
          data: country,
          name: '国家'
        },
        zAxis3D: {
          type: 'value',
          name: '病死率%'
        },
        grid3D: {
          boxWidth: 200,
          boxDepth: 100,
          viewControl: {
            // projection: 'orthographic'
          },
          light: {
            main: {
              intensity: 1.2,
              shadow: true
            },
            ambient: {
              intensity: 0.3
            }
          }
        },
        series: [{
          type: 'bar3D',
          data: data.map(function (item) {
            return {
              value: [item[1], item[0], item[2]],
            }
          }),
          shading: 'lambert',

          label: {
            fontSize: 16,
            borderWidth: 1
          },
          emphasis: {
            label: {
              fontSize: 30,
              color: '#eeff32'
            },
            itemStyle: {
              color: '#900'
            }
          }
        }]
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
#Bar3D {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
