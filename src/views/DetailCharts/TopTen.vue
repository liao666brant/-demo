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
export default {
  data () {
    return {
      // confirmedCount  该省累计确诊人数
      // confirmedCount_percentage  该省的累计确诊人数占总累计确诊人数的百分比
      // currentConfirmedCount  当前确诊人数
      // currentConfirmedCount_percentage 当前确诊人数占当前总确诊人数的百分比
      // provinceName: 省份名称
      topDataCurrent: [],
      provinceNames: [],
      currentPercentage: [],
      topConfirmed: [],
      confirmedPercentage: []
    }
  },
  // created () {
  //
  // },
  mounted () {
    this.getApi()

  },
  methods: {
    getApi () {
      this.axios.get('http://110.42.237.123:8080/CovidData/provinceTop10_data').then( res => {
        // 获取top10省份名称
        for (let i=9;i>=0;i--) {
          this.provinceNames.push(res.data[i].provinceName)
          this.topDataCurrent.push(res.data[i].currentConfirmedCount)
          let percentage1 = (res.data[i].currentConfirmedCount_percentage)*100
          this.currentPercentage.push(percentage1.toFixed(2))
          this.topConfirmed.push((res.data[i].confirmedCount)*100)
          let percentage2 = (res.data[i].confirmedCount_percentage)*100
          this.confirmedPercentage.push(percentage2.toFixed(2))
        }
        this.drawChart()
      }).catch((err) => {
        console.log(err)
        console.log('获取请求失败！');
      });
    },
    drawChart () {
      let myEcharts = this.$echarts.init(this.$refs.top_ref)
      const option = {
        // title: {
        //   text: '全国现存确诊Top10',
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['当前确诊', '确诊占比']
        },
        grid: {
          top: '8%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: this.provinceNames

        },
        series: [
          {
            name: '当前确诊',
            type: 'bar',
            data: this.topDataCurrent
          },
          {
            name: '确诊占比',
            type: 'bar',
            data: this.currentPercentage
          }
        ]
      };
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
#TopTen{
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
