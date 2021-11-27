<!--<template>-->
<!--  <model-gltf src="static/file.gltf"></model-gltf>-->
<!--</template>-->

<!--<script>-->
<!--import { ModelGltf } from 'vue-3d-model'-->

<!--export default {-->
<!--  components: {-->
<!--    ModelGltf-->
<!--  }-->
<!--}-->
<!--</script>-->

<template>
  <div class="main">
    <div class="show1"
         v-show="showSwitch">
      <el-card v-loading="loading"
               element-loading-text="病毒模型拼命加载中">
      </el-card>
    </div>
    <model-collada :backgroundAlpha="bgAlpha"
                   :rotation="rotation"
                   @on-load="onLoad"
                   src="static/Covid-19.dae"></model-collada>
  </div>
</template>

<script>
import { ModelCollada } from "vue-3d-model";

export default {
  data () {
    return {
      showSwitch: true,
      loading: true,
      bgAlpha: 0,
      rotation: {
        x: -Math.PI / 2,
        y: 0,
        z: 0,
      },
    };
  },
  methods: {
    onLoad () {
      this.rotate();
      setTimeout(() => {
        this.showSwitch = false;
      }, 2000);
    },
    rotate () {
      this.rotation.z += 0.01;
      requestAnimationFrame(this.rotate);
    },
  },
  components: {
    ModelCollada,
  },
};
</script>
<style scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
}
.el-card {
  width: 100%;
  height: 100%;
  position: relative;
}
.show1 {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
