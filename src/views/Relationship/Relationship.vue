<template>
  <div class="Relationship">
    <div
      class="box"
      style="width: 100%; height: 100%"
      ref="Relationship_ref"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Relationship",
  data() {
    return {};
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      let myEcharts = this.$echarts.init(this.$refs.Relationship_ref);
      var data = [
        {
          name: "完整致病机理",
          value: "COVID-19完整致病机理",
          symbol: "roundRect",
          symbolSize: 15,
          label: {
            offset: [-80, 1],
          },
          children: [
            {
              name: "生存策略",
              value: "生存策略",
              symbol: "diamond",
              label: {
                offset: [-30, -15],
              },
              children: [
                {
                  name: "无倾向性",
                  value: "无倾向性",
                  label: {
                    offset: [-30, -15],
                  },
                  children: [
                    {
                      name: "细胞内病毒复制",
                      value: "细胞内病毒复制",
                      label: {
                        offset: [-30, -15],
                      },
                    },
                    {
                      name: "细胞间病毒传播",
                      value: "细胞间病毒传播",
                      label: {
                        offset: [-30, -15],
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "感染阶段",
              value: "感染阶段",
              symbol: "diamond",
              label: {
                offset: [-30, -15],
              },
              children: [
                {
                  name: "自限制阶段",
                  value: "自限制阶段",
                  label: {
                    offset: [-30, -15],
                  },
                  children: [
                    {
                      name: "面对轻症至中症患者",
                      value: "面对轻症至中症患者",
                      label: {
                        offset: [-30, -15],
                      },
                      children: [
                        {
                          name: "弱势",
                          value: "弱势",
                          symbol: "diamond",
                          label: {
                            offset: [-30, -15],
                          },
                        },
                      ],
                    },
                    {
                      name: "面对重症至危重症患者",
                      value: "面对重症至危重症患者",
                      label: {
                        offset: [-30, -15],
                      },
                      children: [
                        {
                          name: "弱势",
                          value: "弱势",
                          symbol: "diamond",
                          label: {
                            offset: [-30, -15],
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "入侵机理",
              value: "入侵机理",
              symbol: "diamond",
              label: {
                offset: [-30, -15],
              },
              children: [
                {
                  name: "增强亲和力",
                  value: "增强亲和力",
                  label: {
                    offset: [-30, -15],
                  },
                  children: [
                    {
                      name: "血管紧张素转化酶",
                      value: "血管紧张素转化酶",
                      label: {
                        offset: [-30, -15],
                      },
                      children: [
                        {
                          name: "基因",
                          value: "基因",
                          label: {
                            offset: [-30, -15],
                          },
                        },
                        {
                          name: "蛋白质",
                          value: "蛋白质",
                          label: {
                            offset: [-30, -15],
                          },
                        },
                        {
                          name: "离子",
                          value: "离子",
                          label: {
                            offset: [-30, -15],
                          },
                        },
                        {
                          name: "免疫",
                          value: "免疫",
                          label: {
                            offset: [-30, -15],
                          },
                        },
                        {
                          name: "等等",
                          value: "等等",
                          label: {
                            offset: [-30, -15],
                          },
                        },
                      ],
                    },
                    {
                      name: "组织器官内的恒定状态",
                      value: "组织器官内的恒定状态",
                      label: {
                        offset: [-30, -15],
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "微环境机理",
              value: "微环境机理",
              symbol: "diamond",
              label: {
                offset: [-30, -15],
              },
              children: [
                {
                  name: "创造利于病毒持续复制的微环境",
                  value: "创造利于病毒持续复制的微环境",
                  label: {
                    offset: [-30, -15],
                  },
                },
                {
                  name: "该微环境能够",
                  value: "该微环境能够",
                  label: {
                    offset: [-30, -15],
                  },
                  children: [
                    {
                      name: "激活固有性免疫",
                      value: "激活固有性免疫",
                      label: {
                        offset: [-30, -15],
                      },
                      children: [
                        {
                          name: "降低宿主细胞内的ACE2表达",
                          value: "降低宿主细胞内的ACE2表达",
                          label: {
                            offset: [-30, -15],
                          },
                        },
                        {
                          name: "进一步促进病毒复制和流出",
                          value: "进一步促进病毒复制和流出",
                          label: {
                            offset: [-30, -15],
                          },
                        },
                      ],
                    },
                    {
                      name: "抑制适应性免疫",
                      value: "抑制适应性免疫",
                      label: {
                        offset: [-30, -15],
                      },
                      children: [
                        {
                          name: "降低宿主细胞的死亡",
                          value: "降低宿主细胞的死亡",
                          label: {
                            offset: [-30, -15],
                          },
                        },
                        {
                          name: "进一步维持病毒复制和流出",
                          value: "进一步维持病毒复制和流出",
                          label: {
                            offset: [-30, -15],
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "适应性突变",
              value: "适应性突变",
              symbol: "diamond",
              label: {
                offset: [-30, -15],
              },
              children: [
                {
                  name: "在有利的微环境",
                  value: "在有利的微环境",
                  label: {
                    offset: [-30, -15],
                  },
                  children: [
                    {
                      name: "增强适应性变异能力",
                      value: "增强适应性变异能力",
                      label: {
                        offset: [-30, -15],
                      },
                      children: [
                        {
                          name: "抑制病毒复制疗法",
                          value: "抑制病毒复制疗法",
                          label: {
                            offset: [-30, -15],
                          },
                        },
                        {
                          name: "抑制病毒扩散的疗法",
                          value: "抑制病毒扩散的疗法",
                          label: {
                            offset: [-30, -15],
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "生存策略6",
              value: "生存策略",
              symbol: "diamond",
              label: {
                offset: [-30, -15],
              },
            },
            {
              name: "潜伏感染",
              value: "潜伏感染",
              symbol: "diamond",
              label: {
                offset: [-30, -15],
              },
              children: [
                {
                  name: "灵活地切换到潜伏感染模式",
                  value: "灵活地切换到潜伏感染模式",
                  label: {
                    offset: [-30, -15],
                  },
                  children: [
                    {
                      name: "免疫力减弱",
                      value: "免疫力减弱",
                      label: {
                        offset: [-30, -15],
                      },
                    },
                    {
                      name: "有效但非治愈性的疗法停药后",
                      value: "有效但非治愈性的疗法停药后",
                      label: {
                        offset: [-30, -15],
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "病毒携带危害",
              value: "病毒携带危害",
              symbol: "diamond",
              label: {
                offset: [-30, -15],
              },
              children: [
                {
                  name: "有症状的复制感染模式",
                  value: "有症状的复制感染模式",
                  label: {
                    offset: [-30, -15],
                  },
                  children: [
                    {
                      name: "快速引发严重的",
                      value: "快速引发严重的",
                      label: {
                        offset: [-30, -15],
                      },
                      children: [
                        {
                          name: "细胞因子风暴",
                          value: "细胞因子风暴",
                          label: {
                            offset: [-30, -15],
                          },
                        },
                        {
                          name: "致命的其他并发症",
                          value: "致命的其他并发症",
                          label: {
                            offset: [-30, -15],
                          },
                        },
                      ],
                    },
                    {
                      name: "无症状的潜伏感染模式",
                      value: "无症状的潜伏感染模式",
                      label: {
                        offset: [-30, -15],
                      },
                      children: [
                        {
                          name:
                            "持续破坏宿主细胞依赖ACE2所调节维持的多种恒定状态",
                          value:
                            "持续破坏宿主细胞依赖ACE2所调节维持的多种恒定状态",
                          label: {
                            offset: [-30, -15],
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ];
      let option = {
        title: {
          text: "COVID-19完整致病机理",
        },
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        series: [
          {
            lineStyle: {
              color: "lightblue",
            },
            emphasis: {
              focus: "ancestor",
              blurScope: "coordinateSystem",
            },
            type: "tree",
            roam: true,
            layout: "orthogonal",
            orient: "LR",
            symbol: "emptyCircle",
            symbolSize: 10,
            left: 80,
            right: 220,
            initialTreeDepth: 5,
            label: {
              show: true,
              offset: [10, 0],
              align: "left",
            },
            tooltip: {
              formatter: function (params) {
                return params.value.replace("/r/n", "<br />");
              },
            },
            data: data,
          },
        ],
      };

      myEcharts.setOption(option);
      window.addEventListener("resize", function () {
        myEcharts.resize();
      });
    },
  },
};
</script>

<style scoped>
.Relationship {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
