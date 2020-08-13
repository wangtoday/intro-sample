<template>
  <div>
    <van-steps :active="active">
      <van-step>1</van-step>
      <van-step>2</van-step>
      <van-step>3</van-step>
      <van-step>4</van-step>
      <van-step>5</van-step>
      <van-step>6</van-step>
    </van-steps>


    <!--    Note: should only pass part of string variable, if we
    pass a full variable string, webpack will not work; wired 😣-->
    <van-image width="100%" height="50%"
               fit="contain"
               :src="require(`../assets/${currentImg}`)" />
    <div class="img-content-block">
      {{ currentDetail }}
      <div v-if="currentExtraDetail" class="extra-detail">{{ currentExtraDetail }}</div>
    </div>
    <van-button
        type="default" v-on:click="nextStep">
      {{ active !== 5 ? '下一步' : '重来' }}
    </van-button>


  </div>
</template>

<script>

import config from './config';

const currentImg = config['0'].img;
const currentDetail = config['0'].detail;
const currentExtraDetail = null;

/***
 * 返回需要的 step
 * @param currentPage
 * @returns {string}
 */
const switchStep = (currentPage) => {
  return config[currentPage];
  // 直接使用配置读取的方法
  // switch (currentPage) {
  //   case 0:
  //     return config[currentPage];
  //   case 1:
  //     return '02.gif';
  //   case 2:
  //     return '03.gif';
  //   case 3:
  //     return '04.png';
  //   case 4:
  //     return '05.png';
  //   case 5:
  //     return '06.gif';
  //   default:
  //     return '01.gif';
  // }
};

export default {
  name: 'HelloWorld',
  data() {
    return {
      active: 0,
      currentImg,
      currentDetail,
      currentExtraDetail,
    };
  },
  created() {
    console.log(config);
  },
  props: {
    msg: String,
  },
  methods: {
    nextStep: function() {
      this.active = this.active === 5 ? 0 : this.active + 1;
      const currentInfo = switchStep(this.active);
      this.currentImg = currentInfo.img;
      this.currentDetail = currentInfo.detail;
      this.currentExtraDetail = currentInfo.extraDetail;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.van-image {
  //max-height: 600px;
}

.img-content-block {
  min-height: 75px;
  font-size: 13px;
}

.extra-detail {
  font-size: 12px;
  margin-top: 5px;
  font-weight: 600;
}


</style>
