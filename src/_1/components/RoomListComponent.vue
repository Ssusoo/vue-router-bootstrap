<!--
	1th, 뷰-라우터(직빵 꾸미기 복습으로 <router-view> /roomList)
-->

<template>
	<div v-for="room in roomList" :key="room">
		<h5>상품 번호 : {{ room.id }}번</h5>
		<img :src="room.image" class="room-img">
		<h4>{{ room.title }}</h4>
		<p>{{ room.content }}</p>
		<p>{{ room.price }}원</p>
	</div>
</template>

<script>
export default {
	name: 'RoomListComponent',
	props: {
		roomList: Array,
	},
}
</script>

<style>

</style>