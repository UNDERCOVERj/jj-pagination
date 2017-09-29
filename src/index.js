/*
* @Author: junjie.le
* @Date:   2017-09-29 14:46:32
* @Last Modified by:   junjie.le
* @Last Modified time: 2017-09-29 16:36:03
*/
import Vue from 'vue'
import App from './components/index.vue'
import jjPagination from './main.js'
Vue.use(jjPagination);
new Vue({
	el: '#app',
	render: h=>h(App)
})