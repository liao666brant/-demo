<template>
  <div id="app_nav">
    <div class="nav_father">
      <nav>
        <menu>
          <li>
<!--            <a href="#">-->
<!--              <span class="fa fa-twitter"></span>-->
<!--              <span>首页</span>-->
<!--            </a>-->
            <router-link to="/">
                <span class="fa fa-twitter"></span>
                <span>首页</span>
            </router-link>
          </li>
          <li id="at">
<!--            <a href="#">-->
<!--              <span class="fa fa-github"></span>-->
<!--              <span>资料馆</span>-->
<!--            </a>-->
            <router-link to="bank">
              <span class="fa fa-twitter"></span>
              <span>资料馆</span>
            </router-link>
          </li>
          <li>
<!--            <a href="#">-->
<!--              <span class="fa fa-facebook"></span>-->
<!--              <span>分析室</span>-->
<!--            </a>-->
            <router-link to="room">
              <span class="fa fa-twitter"></span>
              <span>分析室</span>
            </router-link>
          </li>
          <li>
<!--            <a href="#">-->
<!--              <span class="fa fa-google-plus"></span>-->
<!--              <span>行动组</span>-->
<!--            </a>-->
            <router-link to="action">
              <span class="fa fa-twitter"></span>
              <span>行动组</span>
            </router-link>
          </li>
        </menu>
        <div class="ribbon left"></div>
        <div class="ribbon right"></div>
      </nav>
    </div>

  </div>
</template>

<script>
export default {
  name: "nav"
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  border: 0;
}

body {
  background-color: #3d332a;
  background-image: url('http://mojoimage.com/free-image-hosting-12/9690bg.jpg');
  padding-top: 3.125rem;
}
.nav_father{
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
nav {
  width: 45.375rem;
  margin-left: 30%;
  position: relative;
}

menu:after,
menu:before {
  top: 0;
  width: 3.75rem;
  height: 4.75rem;
  background: #eae2d5;
  display: block;
  content: "";
  position: absolute;
}

menu:after {
  clear: both;
  left: 72%;
  border-right: 1px solid #857e74;
}

menu:before {
  left: -3.4375rem;
  border-left: 0.01rem solid #857e74;
}

.ribbon {
  position: absolute;
  top: 4.75rem;
  border-style: solid;
  border-width: .8125rem;
}

.ribbon.left {
  left: -3.4375rem;
  border-color: #857e74 #857e74 transparent transparent;
}

.ribbon.right {
  left: 77.4%;
  border-color: #857e74 transparent transparent #857e74;
}

.left:after,
.left:before {
  display: block;
  content: "";
  position: absolute;
  left: -68px;
  border-style: solid;
  z-index: 0;
}

.left:after {
  top: -4.25rem;
  border-width: 3.625rem 0 0 3.5rem;
  border-color: #eae2d5 transparent transparent transparent;
}

.left:before {
  top: -1.625rem;
  border-width: 0 2.5rem 2.375rem 2.5625rem;
  border-color: transparent transparent #eae2d5 transparent;
}

.right:after,
.right:before {
  display: block;
  content: "";
  position: absolute;
  right: -4.0625rem;
  border-style: solid;
  z-index: 0;
}

.right:before {
  top: -1.5625rem;
  border-width: 0 2.5rem 2.375rem 2.375rem;
  border-color: transparent transparent #eae2d5 transparent;
}

.right:after {
  top: -4.0625rem;
  border-width: 3.625rem 3.5rem 0 0;
  border-color: #eae2d5 transparent transparent transparent;
}

li {
  width: 13%;
  float: left;
  position: relative;
  margin-left: 2.0625rem;
  cursor: pointer;
  background-color: #eae2d5;
  list-style-type: none;
  border-left: 0.125rem solid #d7cfc2;
  border-right: 0.125rem solid #d7cfc2;
  transition: margin .1s, padding .1s, border 1s;
}

li:first-child {
  margin-left: 1.25rem;
}

li:before,
li:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  width: 1.25rem;
  height: 100%;
  background: inherit;
  transition: all .1s;
}

li:before {
  right: 100%;
}

li:after {
  left: 100%;
}

li:hover {
  cursor: pointer;
  margin-top: -0.5625rem;
  box-shadow: 0 .25rem .625rem 0px #000;
  transition: margin .2s, padding .2s;
}

li:hover:before,
li:hover:after {
  height: 86%;
  background: #d7cfc2;
  transition: all .2s;
}

li:hover:before {
  transform: rotate(-30deg) skew(-30deg) translate(1.5px, 9px);
}

li:hover:after {
  transform: rotate(30deg) skew(30deg) translate(-1.5px, 9px);
}

a {
  display: block;
  padding: 0.65625rem 0.9375rem;
  text-decoration: none;
  text-align: center;
  height: 3.4375rem;
}

a span {
  width: 100%;
  text-shadow: 1px 1px 1px #FFF;
  color: #857e74;
  transition: all .2s;
  /*line-height: 3.4375rem;*/
  padding-top: 18%;
}

a span:first-child {
  font-size: 2.0625rem;
  display: block;
  margin-bottom: .25rem;
;
}

a span:last-child {
  text-transform: capitalize;
  font-family: 'Georgia';
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-style: italic;
  color: #6488ba;
}

li:hover span {
  transition: all .2s;
}

li:hover a span:first-child {
  color: #6488ba;
  text-shadow: 1px 1px 1px #FFF, 0 0 1px #6488ba;
}

li:hover a span:last-child {
  color: #857e74;
}
</style>
