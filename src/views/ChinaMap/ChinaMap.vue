<template>
  <div class="map_ch">
    <button @click="changeV" class="btn slide">世界地图</button>
        <div id="tips">
      <img src="../../assets/img/提示.png" alt="" width="40px" id="tipsImg" />
      <p id="tipsTxt">点击各省份<br />可以看详细信息哦</p>
    </div>
 <el-switch
       v-model="value"
       :active-value="1"
       :inactive-value="0"
       active-color='#409eff'
       inactive-color='#409eff'
       active-text='现存'
       inactive-text='累积'
       @change='changeStatus'
       class="changeBtn"
  >
  </el-switch>
    <div class="box" style="width: 100%; height: 100%" ref="ChinaMap_ref"></div>
  </div>
</template>
<style scoped>
#tips {
  position: fixed;
  height: 8%;
  width: 14%;
  background-color: rgba(255, 255, 255, 0.95);
  top: 18%;
  left: 2%;
  opacity: 0;
  border-color: rgba(219, 228, 236, 0.5);
  box-shadow: 10px 10px 50px rgb(203, 232, 243);
  border-radius: 10px;
  animation-name: tipschange;
  animation-timing-function: ease-in-out;
  -webkit-animation-duration: 4s;
}

#tipsTxt {
  position: relative;
  left: 7px;
  top: -5px;
  float: left;
  color: rgba(0, 0, 0, 0.692);
}
#tipsImg {
  float: left;
  margin-top: 8px;
  margin-left: 5px;
}
@-webkit-keyframes tipschange {
  0% {
    opacity: 0;
    transition: 1s;
    z-index: 99;
    left: 0%;
  }
  20% {
    opacity: 1;
    z-index: 99;
    left: 2%;
    transition: 2s;
  }
  60% {
    opacity: 1;
    z-index: 99;
    left: 2%;
    transition: 1s;
  }

  100% {
    opacity: 0;
    left: -50%;
    z-index: -99;
  }
}
</style>
<style scoped>
.btn{
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
button:hover, button:focus {
  border-color: var(--hover);
  color: #fff;
}

button {
  background: none;
  border: 2px solid #409eff;
  color: #fff;
  font: inherit;
  line-height: 1;
  /* margin: 0.5em; */
  padding: 1em 1em;
}
</style>
<script>
import "../../assets/js/china";
export default {
  name: "ChinaMap",
  data() {
    return {
      value: true,
      title: "中国累积确诊人数分布图",
      changeNum: 8,
      province: "南海诸岛",
    };
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    
 changeStatus(callback){
   this.change()
      console.log(callback)// 0 1 0 1 0 1 状态可以获取到
    },
    changeV() {
        this.$router.push("/WorldMap");
  },
    change() {
      this.drawChart();
      this.changeNum = !this.changeNum;
    },
    drawChart() {
      //this.axios.get("http://localhost:8080/res/test.json").then((res) => {
      this.axios.get("http://110.42.237.123:8080/CovidData/province_data").then((res) => {
        var that = this;
        var provinceShortName = res.data.map((item) => item.provinceShortName);
        var confirmedCount = res.data.map((item) => item.confirmedCount);
        let myEcharts = this.$echarts.init(this.$refs.ChinaMap_ref);
        myEcharts.on("click", function (params) {
          that.$router.push({
            path: "/ProvinceCharts",
            query: {
              province: params.name,
            },
          });
          //window.open(params.data.url);
          // window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.value));
        });
        var outname = provinceShortName;
        var outvalue = confirmedCount;

        if (this.changeNum === false) {
          outvalue = res.data.map((item) => item.currentConfirmedCount);
          this.title = "中国现存确诊人数分布图";
        } else {
          this.title = "中国累积确诊人数分布图";
        }

        var outdata = [];
        for (var i = 0; i < outname.length; i++) {
          outdata.push({
            name: outname[i],
            value: outvalue[i],
          });
        }
        outdata.push({
          
          name: "南海诸岛",
          value: outvalue[8],
        });
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
                color: "#72a2dd", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#b3b3b3", // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          },
          title: {
            top: 10,
            text: this.title,
            subtext: "",
            x: "center",
            textStyle: {
              fontSize:24,
              color: "white",
            },
          },
          tooltip: {
            show: true,
            formatter: function (params) {
              return (
                "&nbsp;&nbsp;" +
                params.name +
                "&nbsp;&nbsp;&nbsp;" +
                params.value +
                "人&nbsp;&nbsp;"
              );
            },
          },
          visualMap: {
            type: "piecewise",
            left: "15",
            bottom: "15",
            itemWidth: 27,
            itemHeight: 15,
            textStyle: {
              color: "#333333",
              fontSize: 14,
            },
            pieces: [
              {
                min: 500,
                label: ">500",

              },
              {
                max: 500,
                min: 200,
                label: "200-500",
              },
              {
                max: 200,
                min: 0,
                label: "<200",
              },
              {
                value: 0,
                label: "无数据",
              },
            ],
            inRange: {
              color: ["#B2CAE0", "#D2EAFF", "#8AC6FD", "#45A5F8"],
            },
            outOfRange: {
              color: ["#999999"],
            },
          },
          geo: {
            map: "china",
            show: true,
            roam: false,
            label: {
              emphasis: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                borderColor: "rgba(0,63,140,0.2)",
                shadowColor: "rgba(0,63,140,0.2)",
                shadowOffsetY: 20,
                shadowBlur: 30,
              },
            },
          },
          series: [
            {
              type: "map",
              map: "china",
              aspectScale: 0.75,
              //zoom:1.1,
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
                  areaColor: "#B2CAE0",
                  borderColor: "#fff",
                  borderWidth: 1,
                },
                emphasis: {
                  areaColor: "#FFAE00",
                },
              },
              data: outdata,
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
.map_ch {
  width: 100%;
  height: 100%;
  position: relative;
}
.changeBtn{
  position: absolute;
    right: 3%;
  top: 5%;
  z-index: 99;

}
</style>
