<template>
  <div class="start">
    <vue-particles color="#F6676A"
                   :particleOpacity="0.7"
                   :particlesNumber="70"
                   shapeType="circle"
                   :particleSize="6"
                   linesColor="#858585"
                   :linesWidth="1.5"
                   :lineLinked="true"
                   :lineOpacity="0.4"
                   :linesDistance="150"
                   :moveSpeed="3"
                   :hoverEffect="true"
                   hoverMode="grab"
                   :clickEffect="true"
                   clickMode="push"></vue-particles>
    <div class="wrapper"
         @click="changeV">
      <span class="btn">进入网站</span>

    </div>
  </div>
</template>

<script>
export default {
  name: "Start",
  data () {
    return {
      particularColor: ''
    }
  },
  methods: {
    changeV () {
      this.$router.push("/Home");
    },
  }
}
</script>

<style scoped>
.start {
  position: absolute;
  width: 100%;
  height: 100%;
  /*background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);*/
  background: url("../../assets/img/开始.png") no-repeat;
  background-size: 100% 100%;
}
#particles-js {
  width: 100%;
  height: calc(100% - 0px);
  top: 0;
  position: absolute;
}
.wrapper {
  position: relative;
  /* top: 28.75rem; */
  top: 61%;
}

.wrapper {
  text-align: center;
  margin: 15px auto 0;
  line-height: 160px;
}

.btn {
  display: inline-block;
  font-size: 1.25rem;
  cursor: pointer;
  margin: 0 67px;
  width: auto;
  min-width: 10.04125rem;
  height: 60px;
  line-height: 52px;
  padding: 0 20px;
  border-radius: 9px;
  text-align: center;
  position: relative;
  z-index: 1;
  color: #fff;
  font-weight: bold;
  border: 3px solid rgba(255, 168, 0, 0.7);
  background: #ffa800;
  box-sizing: border-box;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  letter-spacing: 0;
  text-decoration: none;
}

.btn:after {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  content: "";
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.btn:before {
  /* speak: none; */
  font-size: 48px;
  line-height: 90px;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  display: block;
  -webkit-font-smoothing: antialiased;
}

.btn:after {
  top: 0;
  left: 0;
  padding: 0;
  z-index: -1;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
  opacity: 0;
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
}

.btn:hover {
  border-radius: 50px;
  background: rgba(255, 168, 0, 0.7);
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  border: 3px solid #ffa800;
}

.btn:hover:after {
  -webkit-animation: sonarEffect 0.5s ease-out 0.2ms;
  -moz-animation: sonarEffect 0.5s ease-out 0.2ms;
  animation: sonarEffect 0.5s ease-out 0.2ms;
}

@-webkit-keyframes sonarEffect {
  0% {
    opacity: 0.3;
  }

  40% {
    opacity: 0.5;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1),
      0 0 1px 2px rgba(9, 6, 6, 0.5);
  }

  100% {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1),
      0 0 1px 2px rgba(10, 5, 5, 0.5);
    -webkit-transform: scale(1.4);
    opacity: 0;
  }
}

@-moz-keyframes sonarEffect {
  0% {
    opacity: 0.3;
  }

  40% {
    opacity: 0.5;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1),
      0 0 1px 2px rgba(16, 8, 8, 0.5);
  }

  100% {
    box-shadow: 0 0 0 2px rgba(16, 9, 9, 0.1),
      0 0 1px 2px rgba(255, 255, 255, 0.5);
    -moz-transform: scale(1.4);
    opacity: 0;
  }
}

@keyframes sonarEffect {
  0% {
    opacity: 0.3;
  }

  40% {
    opacity: 0.5;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1),
      0 0 1px 2px rgba(7, 2, 2, 0.5);
  }

  100% {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1),
      0 0 1px 2px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.4);
    opacity: 0;
  }
}
</style>
