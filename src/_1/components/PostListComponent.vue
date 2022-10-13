<!-- TODO 7) 뷰-라우터(세팅3) 보여줄 곳을 <router-view /> /postList)로 표시하기 -->
<template>
	<div v-for="post in postList" :key="post">
		<h5>{{ post.title }}</h5>
		<p>{{ post.content }}</p>
		<p>{{ post.date }}</p>
	</div>
</template>

<script>
export default {
	name: 'PostListComponent',
	props: {
		postList: Array,
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
