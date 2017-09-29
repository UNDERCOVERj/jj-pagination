/*
* @Author: junjie.le
* @Date:   2017-09-29 16:33:04
* @Last Modified by:   junjie.le
* @Last Modified time: 2017-09-29 16:34:19
*/
import Vue from 'vue'
import jjPagination from './components/jj-pagination.vue'
export default {
	install(Vue, options) {
		Vue.component('jj-pagination', jjPagination)
	}
}