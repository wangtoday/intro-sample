import Vue from 'vue';
import App from './App.vue';


import { Image as VanImage } from 'vant';
import { Button } from 'vant';

import { Step, Steps } from 'vant';


Vue.use(Button);
Vue.use(Step);
Vue.use(Steps);
Vue.use(VanImage);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
