<template>
  <div class="TopLeft">
    <div class="box" style="width: 100%; height: 100%" ref="TopLeft_ref"></div>
  </div>
</template>

<script>
export default {
  name: "TopLeft",
  data() {
    return {};
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      var hashMap = new Map([
        ["安徽", "http://110.42.237.123:8080/Data/search_anhui_data"],
        ["澳门", "http://110.42.237.123:8080/Data/search_aomen_data"],
        ["北京", "http://110.42.237.123:8080/Data/search_beijing_data"],
        ["福建", "http://110.42.237.123:8080/Data/search_fujian_data"],
        ["甘肃", "http://110.42.237.123:8080/Data/search_gansu_data"],
        ["广东", "http://110.42.237.123:8080/Data/search_guangdong_data"],
        ["广西", "http://110.42.237.123:8080/Data/search_guangxi_data"],
        ["贵州", "http://110.42.237.123:8080/Data/search_guizhou_data"],
        ["海南", "http://110.42.237.123:8080/Data/search_hainan_data"],
        ["河北", "http://110.42.237.123:8080/Data/search_hebei_data"],
        ["河南", "http://110.42.237.123:8080/Data/search_henan_data"],
        ["黑龙江", "http://110.42.237.123:8080/Data/search_heinongjiang_data"],
        ["湖北", "http://110.42.237.123:8080/Data/search_hubei_data"],
        ["湖南", "http://110.42.237.123:8080/Data/search_hunan_data"],
        ["吉林", "http://110.42.237.123:8080/Data/search_jilin_data"],
        ["江苏", "http://110.42.237.123:8080/Data/search_jiangsu_data"],
        ["江西", "http://110.42.237.123:8080/Data/search_jiangxi_data"],
        ["辽宁", "http://110.42.237.123:8080/Data/search_liaoning_data"],
        ["内蒙古", "http://110.42.237.123:8080/Data/search_neimenggu_data"],
        ["宁夏", "http://110.42.237.123:8080/Data/search_ningxia_data"],
        ["青海", "http://110.42.237.123:8080/Data/search_qinghai_data"],
        ["山东", "http://110.42.237.123:8080/Data/search_shandong_data"],
        ["山西", "http://110.42.237.123:8080/Data/search_shanxi_province_data"],
        ["陕西", "http://110.42.237.123:8080/Data/search_shanxi_data"],
        ["上海", "http://110.42.237.123:8080/Data/search_shanghai_data"],
        ["四川", "http://110.42.237.123:8080/Data/search_sichuan_data"],
        ["台湾", "http://110.42.237.123:8080/Data/search_taiwan_data"],
        ["天津", "http://110.42.237.123:8080/Data/search_tianjing_data"],
        ["西藏", "http://110.42.237.123:8080/Data/search_xizang_data"],
        ["香港", "http://110.42.237.123:8080/Data/search_xianggang_data"],
        ["新疆", "http://110.42.237.123:8080/Data/search_xinjiang_data"],
        ["云南", "http://110.42.237.123:8080/Data/search_yunnan_data"],
        ["浙江", "http://110.42.237.123:8080/Data/search_zhejiang_data"],
        ["重庆", "http://110.42.237.123:8080/Data/search_chongqin_data"],
        ["南海诸岛", "http://110.42.237.123:8080/Data/search_hainan_data"],
      ]);
      var urlname = hashMap.get(this.$route.query.province);
      // this.axios.get("http://localhost:8080/res/test.json").then((res) => {
      //this.axios.get("http://110.42.237.123:8080/CovidData/province_data").then((res) => {
      this.axios.get(urlname).then((res) => {
        var all = res.data;
        if (all.length != 1) {
          all.shift();
          var cityName = all.map((item) => item.cityName);
        } else {
          var cityName = all.map((item) => item.provinceShortName);
        }
        var confirmedCount = all.map((item) => item.confirmedCount);
        var provincenum = confirmedCount.reduce(
          (a, b) => Number(a) + Number(b)
        );
        let myChart = this.$echarts.init(
          this.$refs.TopLeft_ref,
          "purple-passion"
        );
        var data = [];
        for (let i in cityName) {
          data.push({
            name: cityName[i],
            value: confirmedCount[i],
          });
        }

        var colorList = [
          "#73DDFF",
          "#73ACFF",
          "#FDD56A",
          "#FDB36A",
          "#FD866A",
          "#9E87FF",
          "#58D5FF",
        ];
        let option = {
          /*backgroundColor: {
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
                color: "#7e7e7e", // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          }, */
          backgroundColor: false,
          tooltip: {},
          title: {
            text: "各市区历史累积确诊图",
            x: "center",
            y: "3.5%",
          },
          dataset: {
            source: data,
          },
          series: [
            {
              type: "pie",
              radius: ["32%", "73%"],
              encode: {
                tooltip: ["name", "value"],
                value: "value",
              },
              y: "6%",
              label: {
                show: true,
                formatter: function (params) {
                  return params.value.name;
                },
              },
            },
          ],
          graphic: {
            elements: [
              {
                type: "group",
                left: "center",
                top: "center",
                children: [
                  {
                    type: "text",
                    id: "text1",
                    y: 140,
                    // left: 'center',
                    // top: 'center',
                    style: {
                      text: "本省确诊总和",
                      font: "20px bolder",

                      textAlign: "center",
                    },
                  },
                  {
                    type: "text",
                    id: "text2",
                    // left: 'center',
                    // top: 'center',
                    y: 105,
                    // x: -5,
                    style: {
                      text: provincenum,
                      font: "35px bolder",
                      textAlign: "center",
                    },
                  },
                ],
              },
            ],
          },
        };
        myChart.on("highlight", function (params) {
          const itemData = data[params.dataIndex - 1];
          const { name, value } = itemData;
          myChart.setOption({
            graphic: {
              elements: [
                {
                  id: "text1",
                  style: {
                    text: name,
                    font: "25px bolder",

                    //y: -20,
                    textAlign: "center",
                  },
                },
                {
                  id: "text2",
                  style: {
                    text: value,
                    font: "35px bolder",
                    textAlign: "center",
                  },
                },
              ],
            },
          });
        });
        let dataIndex = 0;
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex,
        });
        setInterval(function () {
          myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
            dataIndex,
          });
          myChart.dispatchAction({
            type: "showTip",
            seriesIndex: 0,
            dataIndex,
          });
          dataIndex = dataIndex >= data.length - 1 ? 0 : dataIndex + 1;
          myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex,
          });
        }, 2000);

        myChart.setOption(option);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      });
    },
  },
};
</script>

<style scoped>
.TopLeft {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
