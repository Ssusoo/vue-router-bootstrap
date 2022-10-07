<template>
	<div v-for="(list, i) in lists" :key="i">
		<h5>{{ list.title }}</h5>
		<p>{{ list.content }}</p>
	</div>
</template>

<script>
export default {
	name: 'PostListComponent',
	props: {
		lists: Object,
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
