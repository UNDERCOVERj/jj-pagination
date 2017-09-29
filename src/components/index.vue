<template>
	<div id="app">
		<jj-pagination 
			:curPage="curPage"
			:pages="pages"
			:total="total"
			:prev-text="'<<'"
			:next-text="'>>'"
			:main-class="'sss'"
			>
		</jj-pagination>
	</div>
</template>
<script>
	/*import jjPagination from './jj-pagination.vue'*/
	export default {
		name: 'App',
		data() {
			return {
				curPage: 1,
				pages: 5,
				total: 15
			}
		}/*,
		components: {
			jjPagination
		}*/
	}
</script>
<style>
	.sss{
		float: right
	}
</style>