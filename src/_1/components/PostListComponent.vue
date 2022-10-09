<template>
	<div>
		<h5>{{ postList.title }}</h5>
		<p>{{ postList.content }}</p>
		<p>{{ postList.date }}</p>
	</div>
</template>

<script>
export default {
	name: 'PostListComponent',
	props: {
		postList: Object,
	},
}
</script>

<style>

</style>

<!-- TODO 컴포넌트 만들기 -->
	<!--<template>-->
	<!--	<div>-->

	<!--	</div>-->
	<!--</template>-->

	<!--<script>-->
	<!--export default {-->
	<!--	name: 'PostListComponent',-->
	<!--	props: {-->

	<!--	},-->
	<!--}-->
	<!--</script>-->

	<!--<style>-->

	<!--</style>-->
