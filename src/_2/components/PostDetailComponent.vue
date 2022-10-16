<!-- TODO 1) 상세페이지 컴포넌트 만들기(_2/components/PostDetailComponent) -->
<template>
	<div class="detail">
		<!-- TODO 4) $route 문법 -->
		<h4>일련번호 : {{ postList[$route.params.id].number }}번</h4>
		<p>{{ postList[$route.params.id].title }}</p>
		<p>{{ postList[$route.params.id].content }}</p>
		<p>{{ postList[$route.params.id].date }}</p>
	</div>
</template>

<script>
export default {
	name: 'PostDetailComponent',
	props: {
		postList: Array,
	},
}
</script>

<style>

</style>