<template>
	<div :class="'jj-pagination ' + mainClass">
		<span class="jj-pagination-item" @click="gotoFirst" v-if="!canPrevClick">首页</span>
		<span :class="[{'jj-pagination-disabled': canPrevClick},'jj-pagination-item']" @click="prev">{{prevText}}</span>
		<span v-for="(val, index) in arr" :class="[{'jj-pagination-current': val == current}, 'jj-pagination-item']"  @click="handleClick(val)">{{val}}</span>
		<span :class="[{'jj-pagination-disabled': canNextClick},'jj-pagination-item']" @click="next">{{nextText}}</span>
		<span class="jj-pagination-item" @click="gotoLast" v-if="!canNextClick">末页</span>
	</div>
</template>
<script>
	export default {
		name: 'jjPagination',
		data() { 
			return {
				arr: [],
				current: 1//默认第一页
			}
		},
		props:['pages','curPage','total','prevText','nextText', 'mainClass'],
		methods: {
			compare() {
				var pages = this.pages,
					total = this.total,
					current = this.current,
					that = this,
					arr = [];
				if(total <= pages) {
					for(var i = 1; i <= total; i++) {
						arr.push(i);
					}
				}else {
					var gap = Math.floor(pages/2),//看能否补足pages宽度
						left = current - gap,
						right = current + gap;
					if(left > 1 && right < total) {
						for(;left <= right;left++) {
							arr.push(left);
						}
						arr.unshift('...');
						arr.push('...');
					}else if(left <= 1) {
						for(var i = 1; i <= pages; i++) {
							arr.push(i);
						}
						arr.push('...');
					}else if(right >= total) {
						var i = total - pages + 1;
						arr.push('...');
						for(; i <= total; i++) {
							arr.push(i);
						}
					}
				}
				this.$nextTick(function() {
					that.arr = arr;
				})
			},
			handleClick(val) {
				if(!isNaN(val)) {//如果不是...
					this.current = val;
				}
			},
			next() {
				if(!this.canNextClick) {
					this.current++
				}
			},
			prev() {
				if(!this.canPrevClick) {
					this.current--
				}
			},
			gotoFirst() {
				this.current = 1;
			},
			gotoLast() {
				this.current = this.total;
			}
		},
		created() {
			this.current = this.curPage;
			this.compare();
		},
		watch: {
			current() {
				this.compare();
				this.$emit('callback' ,this.current);
			}
		},
		computed: {
			canPrevClick() {
				return this.current == 1 ? true : false; 
			},
			canNextClick() {
				return this.current == this.total ? true : false;
			}
		}
	}
</script>
<style scoped>
	.jj-pagination{
			display: inline-block;
			-webkit-user-select: none;
			user-select: none;
		}
		.jj-pagination::after{
			content: "";
			display: block;
			clear: both;
			height: 0;
			visibility: hidden;
		}
		.jj-pagination-item{
			float: left;
			padding: 6px 12px;
			border-width: 1px 0 1px 1px;
			border-style: solid;
			border-color: #eaeff2;
			color: #2283c5;
			background-color: #fafafa;
			cursor: pointer;
		}
		.jj-pagination-item:last-child{
			border-right: 1px solid #eaeff2;
		}
		.jj-pagination-current{
			background-color: #6faed9;
			border-color: #6faed9;
			color: #fff;
		}
		.jj-pagination-disabled{
			cursor: not-allowed;
			background-color: #eee;
			color: #fff;
		}
</style>