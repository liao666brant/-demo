<template>
  <div id="NewTrend">
    <div class="box"
         style="width: 100%; height: 100%;"
         ref="top_ref"></div>
  </div>
</template>

<script>
export default {
  // created () {
  //   this.getApi()
  // },
  data(){
    return {
      name:'',
      addConfirmCount:'',
      death:'',
      heal:'',
    }
  },
  mounted () {
    this.getApi()
  },
  methods: {
    getApi () {
        this.axios.get('http://110.42.237.123:8080/CovidData/worldAddConfirm_data').then( res => {
          this.name=res.data.map(((item) => item.name))
          this.addConfirmCount=res.data.map(((item) => item.addConfirmCount))
          this.death=res.data.map(((item) => item.death))
          this.heal=res.data.map(((item) => item.heal))
          this.drawChart()
        })
      
      
    },
    drawChart () {
      let myChart = this.$echarts.init(this.$refs.top_ref)
      var info=[]
      for(let i in this.name){
          this.name[i]=Number(i)+1+'.'+this.name[i]
          info.push({国家:  this.name[i], 新增确诊: this.addConfirmCount[i], 累计死亡: this.death[i], 累计治愈: this.heal[i]})
      }
      //数据
var list = [];
var time = [];
for (var i = 0; i < info.length; i++) {
    var data = [];
    time.push(info[i].国家);
    for (var j = 0; j < 3; j++) {
        var obj = {
            "name": "",
            "value": ""
        };
        if (j === 0) {
            obj.name = "累计治愈"
            obj.value = info[i].累计治愈;
            data.push(obj);
        }
        if (j === 1) {
            obj.name = "新增确诊"
            obj.value = info[i].新增确诊;
            data.push(obj);
        }
        if (j === 2) {
            obj.name = "累计死亡"
            obj.value = info[i].累计死亡;
            data.push(obj);
        }
    }
    list.push(data);

}

myChart.on('timelinechanged', function(timelineIndex) {
    var arrIndex = timelineIndex.currentIndex;
    var 国家 = option.baseOption.timeline.data[arrIndex];

});

myChart.on('click', function(params) {
    $('#cmp64062ainput').textbox().textbox('setValue', 国家);
    console.log(params);

});

var na = ["新增确诊", "累计死亡", "累计治愈"];

      const option = {
         "baseOption": {
        "timeline": {
            "axisType": "category",
            "autoPlay": true,
            "playInterval": 2000,
            "orient": "vertical",
            "lineStyle": {
                "color": "#b9bbbe"
            },
            "label": {
                "fontSize": 12,
                "textStyle": {
                    "color": "#000000"
                }
            },
            "controlStyle": {
                "color": "rgba(255,255,255,0.7)"
            },
            "checkpointStyle": {
                "color": "#3b424a"
            },
            "left": "6%",
            "right": "65%",
            "top": "0%",
            "bottom": "0%",
            "data": time,
            inverse: true
        },
        "tooltip": {
            "trigger": "item",
            formatter: function(params) {
                var relVal = params[0].name;
                for (var i = 0, l = params.length; i < l; i++) {
                    relVal += '<br/>' + params[i].seriesName + ' : ' + formatNum(params[i].value) + "万元";
                }
                return relVal;
            },
        },
        "legend": {
            "orient": "vertical",
            "top": "2%",
            "right": "0%",
            "textStyle": {
                "fontSize": 12,
                "color": "#ffff0"
            },
            "data": na,
            icon: "circle",
            itemWidth: 7,
            itemHeight: 7,
        },
        "series": [{
            "name": "饼图",
            "type": "pie",
            "radius": "60%",
            "center": ["65%", "65%"]
        }]
    },
    "options": [{
        "series": [{
            "name": "饼图options",
            "color": ["#49c790", "#d26e1c", "#4a90e2"],
            "data": list[0],
            "itemStyle": {
                "normal": {
                    "label": {
                        "position": "inner",
                        "show": true,
                        "textStyle": {
                            "fontSize": 10,
                            "color": "#ffffff"
                        },
                        formatter: "{c}"
                    },
                    "lableLine": {
                        "show": false
                    }
                },
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    }, {
        "series": [{
            "name": "饼图options",
            "data": list[1],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    }, {
        "series": [{
            "name": "饼图options",
            "data": list[2],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    }, {
        "series": [{
            "name": "饼图options",
            "data": list[3],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    }, {
        "series": [{
            "name": "饼图options",
            "data": list[4],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    }, {
        "series": [{
            "name": "饼图options",
            "data": list[5],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    }, {
        "series": [{
            "name": "饼图options",
            "data": list[6],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    }, {
        "series": [{
            "name": "饼图options",
            "data": list[7],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    },{
        "series": [{
            "name": "饼图options",
            "data": list[8],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    },{
        "series": [{
            "name": "饼图options",
            "data": list[9],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    }]
      }

      myChart.setOption(option)
      // 使图表跟随窗口缩放
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }
  }
}
</script>

<style>
#NewTrend{
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
