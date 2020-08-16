<template>
  <div id="app">

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 90%;
  height: 90%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
}

.van-step--horizontal .van-step__title {
  float: left;
  //  important:note: 必须要添加这个， 才能避免指示条移位的问题
}


// 定制不需要 scope， 全局设定
.van-image {
  img {
    border-radius: 10px;
    max-height: 450px;
  }
}

</style>
