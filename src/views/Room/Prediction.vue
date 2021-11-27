<template>
  <div class="prediction">
    <div class="box" style="width: 100%; height: 100%" ref="room_ref"></div>
  </div>
</template>

<script>

import $ from 'jquery'
//import $ from "../../assets/js/jquery-1.11.0.min.js";
export default {
  name: "room",
  data() {
    return {};
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      var myChart = this.$echarts.init(this.$refs.room_ref,);

//居民数量
      var nodesnum = 240;
//病毒传染机会
      var xiadu = 1;
//病毒的传染性，接触就传染的概率
      var infectivity = 0.3;
//治疗天数
      var cureday = 4;
//死亡率
      var dierate = 0.03;
//社区结构大小
      var shequsize = 90;
//社区内连接强度
      var density = 0.35;

      $(`
    <div class="input-item chuan" @click="chuanbo">多次点击进行模拟</div>
    <div class="text">传染性:0.3</div>
<input class="slider" type="range" min="0" max="0.5" value="0.3" step="0.01" style="">
<div class="textcure">潜伏期天数:14</div>
<input class="slidercure" type="range" min="2" max="30" value="14" step="1" style="">
<div class="textdie">致死率:0.03</div>
<input class="sliderdie" type="range" min="0" max="1" value="0.03" step="0.01" style="">

`).appendTo($('.prediction'));
// <div class="r0">估计R0:</div>
      $('.input-item').css({
        position: 'absolute',
        bottom: '2%',
        left: '2%',
        display: '-ms-flexbox',
        display: 'flex',
        '-ms-flex-wrap': 'wrap',
        'flex-wrap': 'wrap',
        '-ms-flex-align': 'center',
        'align-items': 'center',
        'user-select':'none',
        width: '8.4rem',
        height: '2rem',
      });
      $('.chuan').css({
        display: '-webkit-box',
        display: '-ms-flexbox',
        display: 'flex',
        '-webkit-box-pack': 'center',
        '-ms-flex-pack': 'center',
        'justify-content': 'center',
        '-webkit-box-align': 'center',
        '-ms-flex-align': 'center',
        'align-items': 'center',
        border: '1px solid #ced4da',
        'border-radius': '.25rem',
        'background-color': '#e9ecef',
        color: '#495057',
        'text-align': 'center',
        cursor: 'pointer',
        'background-color': '#616161',
        color:'#e9e9e9'
      });
      $('.slider').css({
        position: 'absolute',
        top: '72%',
        left: '1rem',
        display: '-ms-flexbox',
        display: 'flex',
        '-ms-flex-wrap': 'wrap',
        'flex-wrap': 'wrap',
        '-ms-flex-align': 'center',
        'align-items': 'center',
        width: '6rem',
        height: '2rem',
      });
      $('.text').css({
        position: 'absolute',
        top: '72%',
        left: '7.4rem',
        display: '-ms-flexbox',
        display: 'flex',
        '-ms-flex-wrap': 'wrap',
        'flex-wrap': 'wrap',
        '-ms-flex-align': 'center',
        'align-items': 'center',
        width: '6rem',
        height: '2rem',
      });
      $('.slidercure').css({
        position: 'absolute',
        top: '78%',
        left: '1rem',
        display: '-ms-flexbox',
        display: 'flex',
        '-ms-flex-wrap': 'wrap',
        'flex-wrap': 'wrap',
        '-ms-flex-align': 'center',
        'align-items': 'center',
        width: '6rem',
        height: '2rem',
      });
      $('.textcure').css({
        position: 'absolute',
        top: '78%',
        left: '7.4rem',
        display: '-ms-flexbox',
        display: 'flex',
        '-ms-flex-wrap': 'wrap',
        'flex-wrap': 'wrap',
        '-ms-flex-align': 'center',
        'align-items': 'center',
        width: '10rem',
        height: '2rem',
      });
      $('.sliderdie').css({
        position: 'absolute',
        top: '84%',
        left: '1rem',
        display: '-ms-flexbox',
        display: 'flex',
        '-ms-flex-wrap': 'wrap',
        'flex-wrap': 'wrap',
        '-ms-flex-align': 'center',
        'align-items': 'center',
        width: '6rem',
        height: '2rem',
      });
      $('.textdie').css({
        position: 'absolute',
        top: '84%',
        left: '7.4rem',
        display: '-ms-flexbox',
        display: 'flex',
        '-ms-flex-wrap': 'wrap',
        'flex-wrap': 'wrap',
        '-ms-flex-align': 'center',
        'align-items': 'center',
        width: '10rem',
        height: '2rem',
      });
      $('.r0').css({
        position: 'absolute',
        top: '5px',
        left: '12rem',
        display: '-ms-flexbox',
        display: 'flex',
        '-ms-flex-wrap': 'wrap',
        'flex-wrap': 'wrap',
        '-ms-flex-align': 'center',
        'align-items': 'center',
        width: '10rem',
        height: '2rem',
      });

      var nodes = [
        {
          name: '0',
          category: 1,
        },
      ];
      var nodeindexes = [];
//生成节点
      for (var i = 1; i < nodesnum; i++) {
        nodes.push({
          name: i.toString(),
          category: 1,
        });
        nodeindexes.push(i);
      }

      var links = [];
//随机生成边
      var items = [];

      function shequ(links, items, nodes, density) {
        var shequ1size = nodes.length;
        for (var i = 0; i < shequ1size; i++) {
          for (var j = i; j < shequ1size; j++) {
            if (Math.random() < (((density * density * i) / shequ1size) * j) / shequ1size && i != j) {
              links.push({
                source: nodes[i].name,
                target: nodes[j].name,
              });
              items.push(nodes[i].name);
              items.push(nodes[j].name);
            }
          }
        }
        return links, items;
      }

      for (var j = 0; j < nodesnum; j += shequsize) {
        var start = Math.max(j - Math.floor(0.1 * shequsize), 0);
        var end = Math.min(j + shequsize + Math.floor(0.1 * shequsize), nodesnum);
        var shequ1node = [];
        for (var i = start; i < end; i++) {
          shequ1node.push(nodes[i]);
        }
        links, (items = shequ(links, items, shequ1node, density));
      }

//补充边
      for (var i = 0; i < nodesnum; i++) {
        if (items.indexOf(i.toString()) == -1) {
          nodeindexes.pop(i);
          links.push({
            source: i,
            target: nodeindexes[Math.floor(Math.random() * nodeindexes.length)],
          });
        }
      }

//随机下毒一个人
      nodes[Math.floor(Math.random() * nodesnum)].category = 0;

//估计R0
      var r0 = ((2 * cureday * infectivity * links.length) / nodes.length).toFixed(2);

      $('.r0').text('估计R0:' + r0);
      $('.slider').change(function () {
        infectivity = this.value;
        $('.text').text('传染性:' + infectivity);
        var r0 = ((2 * cureday * infectivity * links.length) / nodes.length).toFixed(2);
        $('.r0').text('估计R0:' + r0);
      });
      $('.slidercure').change(function () {
        cureday = this.value;
        $('.textcure').text('潜伏期天数:' + cureday);
        var r0 = ((2 * cureday * infectivity * links.length) / nodes.length).toFixed(2);
        $('.r0').text('估计R0:' + r0);
      });
      $('.sliderdie').change(function () {
        dierate = this.value;
        $('.textdie').text('致死率:' + dierate);
        var r0 = ((2 * cureday * infectivity * links.length) / nodes.length).toFixed(2);
        $('.r0').text('估计R0:' + r0);
      });

//去重函数
      function unique(arr) {
        return Array.from(new Set(arr));
      }

//病毒数
      var viruscount = 1;
      var viruscounts = [[1, viruscount]];
      var viruscounts_new = [[1, 0]];
      var cures = [[1, 0]];
      var dies = [[1, 0]];

      var option = {
        title: [
          {
            text: '患者人数：0',
            subtext: '设置模拟传染属性：', 
            top: '62%',
            left: '1.6%',
          },
          {
            text: '数据虚构，仅供学习交流',
            textStyle: {
              fontSize: 12,
            },
            top: 'bottom',
            right: 'right',
          },
        ],
        grid: [
          {
            gridindex: 1,
            left: '2%',
            width:'40%',
            top: '13%',
            height:'20%',
            containLabel: true,
          },
        ],
        xAxis: [
          {
            name: '天',
            type: 'value',
            show: true,
            min: 0,
            max: 10,
            gridIndex: 0,
          },
        ],
        yAxis: [
          {
            name: '人数',
            type: 'value',
            show: true,

            gridIndex: 0,
          },
        ],
        
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        legend: [
          {
            data: ['感染者', '未感染', '治愈', '死亡'],
            orient: 'vertical',
            x2: '2%',
            y: '2%',
          },
          {
            data: ['总患者数', '新增患者数', '治愈数', '死亡数'],

            x: '2%',
            y: '2%',
          },
        ],

        series: [
          {
            type: 'graph',
            name: '模拟人员',
            layout: 'force',
            symbolSize: 12,
            roam: true,
            top: '16%',
            left:'46%',
            label: {
              fontSize: 12,
              show: false,
            },
            edgeSymbol: ['circle', 'circle'],
            edgeSymbolSize: [4, 4],
            edgeLabel: {
              fontSize: 10,
            },
            categories: [
              {
                name: '感染者',
              },
              {
                name: '未感染',
              },
              {
                name: '治愈',
              },
              {
                name: '死亡',
              },
            ],
            data: nodes,
            // links: [],
            links: links,
            lineStyle: {
              opacity: 0.9,
              width: 1.5,
              curveness: 0,
            },
            draggable: true,
            force: {
              repulsion: 20,
              gravity: 0.12,
              edgeLength: 1,
            },
          },
          {
            xAxisIndex: 0,
            yAxisIndex: 0,
            name: '总患者数',
            type: 'line',
            showSymbol: false,
            data: viruscounts,
            itemStyle: {
              normal: {
                color: '#C23531',
              },
            },
          },
          {
            xAxisIndex: 0,
            yAxisIndex: 0,
            name: '新增患者数',
            type: 'line',
            showSymbol: false,
            data: viruscounts,
            itemStyle: {
              normal: {
                color: '#2f4554',
              },
            },
          },
          {
            xAxisIndex: 0,
            yAxisIndex: 0,
            name: '治愈数',
            type: 'line',
            showSymbol: false,
            data: viruscounts,
            itemStyle: {
              normal: {
                color: '#61A0A8',
              },
            },
          },
          {
            xAxisIndex: 0,
            yAxisIndex: 0,
            name: '死亡数',
            type: 'line',
            showSymbol: false,
            data: viruscounts,
            itemStyle: {
              normal: {
                color: '#D48265',
              },
            },
          },
        ],
      };

      myChart.setOption(option);


      var t = 1;
      var score = 0;
      var gameend = 0;
      $('.chuan').click(function () {
        //计算分数
        score += parseInt(infectivity * 100);
        //找到红的点
        var virusitem = [];


        for (var eachnodeinfo in nodes) {
          if (nodes[eachnodeinfo].category == 0) {
            virusitem.push(nodes[eachnodeinfo].name);
          }
        }
        //找到红的点连接的点,新的感染者
        var virusitem_new = [];
        for (var linkinfo in links) {
          //console.log(links[linkinfo].source.toString())
          if (virusitem.indexOf(links[linkinfo].source.toString()) != -1) {
            if (Math.random() < infectivity) {
              if (nodes[links[linkinfo].target].category == 1) {
                virusitem_new.push(links[linkinfo].target);
              }
            }
          }
          if (virusitem.indexOf(links[linkinfo].target.toString()) != -1) {
            if (Math.random() < infectivity) {
              if (nodes[links[linkinfo].source].category == 1) {
                virusitem_new.push(links[linkinfo].source);
              }
            }
          }
        }
        /*     for (linkinfo in links) {
                //console.log(links[linkinfo].source.toString())
                if (virusitem.indexOf(links[linkinfo].source.toString()) != -1) {
                    if (Math.random() < infectivity) {
                        if (nodes[links[linkinfo].target].category == 1) {
                            virusitem_new.push(links[linkinfo].target);
                        }
                    }
                }
                if (virusitem.indexOf(links[linkinfo].target.toString()) != -1) {
                    if (Math.random() < infectivity) {
                        if (nodes[links[linkinfo].source].category == 1) {
                            virusitem_new.push(links[linkinfo].source);
                        }
                    }
                }
            } */
        //感染者加入
        for (var virusitem_new_id in virusitem_new) {
          virusitem_new_id = virusitem_new[virusitem_new_id];
          virusitem.push(virusitem_new_id.toString());
        }

        virusitem = unique(virusitem);

        //更新患者信息
        for (var nodes_id in nodes) {
          if (virusitem.indexOf(nodes[nodes_id].name.toString()) != -1) {
            nodes[nodes_id].category = 0;
            if (nodes[nodes_id].infecttime) {
            } else {
              nodes[nodes_id].infecttime = t;
            }
          }
        }

        //判断治愈情况
        for (var nodes_id in nodes) {
          if ((t - nodes[nodes_id].infecttime > cureday) & (nodes[nodes_id].category == 0)) {
            if (Math.random() < dierate) {
              nodes[nodes_id].category = 3;
            } else {
              nodes[nodes_id].category = 2;
            }
          }
        }

        //计数
        var cure = 0;
        var die = 0;
        for (var nodes_id in nodes) {
          if (nodes[nodes_id].category == 2) {
            cure += 1;
          }
          if (nodes[nodes_id].category == 3) {
            die += 1;
          }
        }
        t += 1;
        viruscounts.push([t, virusitem.length]);
        viruscounts_new.push([t, virusitem.length - viruscount]);
        cures.push([t, cure]);
        dies.push([t, die]);

        var optionchange = {
          title: [
            {
              text: '患者数：' + virusitem.length,
              subtext: '设置模拟传染属性' + '：',
            },
          ],
          xAxis: [
            {
              max: 2 + t,
            },
          ],
          series: [
            {
              data: nodes,
            },
            {
              data: viruscounts,
            },
            {
              data: viruscounts_new,
            },
            {
              data: cures,
            },
            {
              data: dies,
            },
          ],
        };
        myChart.setOption(optionchange);

        //病毒数
        //判断游戏结束
        //计算分数

        /* if ((viruscount == 0) & (xiadu == 0) & (gameend == 0)) {
          alert('游戏结束，你的得分是：' + ((score * density * 1000) / t / (cure + die)).toFixed(2) + '分');
          gameend = 1;
        } */
        viruscount = virusitem.length;
      });

      myChart.on('click', function (p) {
        if (p.dataType == 'node') {
          if (xiadu > 0) {
            xiadu -= 1;

            //找到红的点
            var virusitem = [];
            for (var eachnodeinfo in nodes) {
              if (nodes[eachnodeinfo].category == 0) {
                virusitem.push(nodes[eachnodeinfo].name);
              }
            }

            //更新点击的点
            nodes[p.name].category = 0;

            //重新计算感染者数量
            for (var eachnodeinfo in nodes) {
              if (nodes[eachnodeinfo].category == 0) {
                virusitem.push(nodes[eachnodeinfo].name);
              }
            }

            //去重
            virusitem = unique(virusitem);

            //更新点
            for (var nodes_id in nodes) {
              if (virusitem.indexOf(nodes[nodes_id].name.toString()) != -1) {
                nodes[nodes_id].category = 0;
                nodes[nodes_id].infecttime = t;
              }
            }
            optionchange = {
              title: [
                {
                  text: '患者数：' + virusitem.length,
                  subtext: '你还有' + xiadu + '次模拟机会（点击目标模拟）',
                },
              ],
              xAxis: [
                {
                  max: 2 + t,
                },
              ],
              series: [
                {
                  data: nodes,
                },
              ],
            };
            myChart.setOption(optionchange);

            //病毒数
            viruscount = virusitem.length;
          }
        }
      });


      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>

<style scoped>
.prediction {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
