<!--
	1th, 뷰 라우터
		TODO Grammar 설명
			뷰-라우터 설치 및 라우트 라우터 설명(VueRouterBasicGrammar)
			뷰 라우터 기본법(라우트 path 설정 및 template 태그에 페이지 이동 링크 설정 / router)
		TODO 1) 라우트를 여러 개 만들 고 싶을 때(./router/router.js에서 '설명')
		TODO 2) 페이지 이동 링크를 만들고 싶을 때(./router/router.js에서 '설명')
		TODO 3) 글 목록 컴포넌트 페이지 만들기(./component/PostListComponent.vue)
		TODO 4) Json 파일 만들기 (./assets/PostList.js)
		TODO 5) 뷰-라우터(세팅1) 파일 만들기(./router/router.js)
		TODO 6) 뷰-라우터(세팅2) main.js에서 뷰-라우터 import 세팅하기(./main.js)
		TODO 7) 뷰-라우터(세팅3) 보여줄 곳을 <router-view />)로 표시하기
			=> PostListComponent를 예전처럼 세팅하는 게 아니라
			=> <router-view />로만 해서 보여줄 수 있음.
			=> 기존에 PostListComponent는 제거하기
-->
<template>
	<!-- nav bar -->
	<nav class="navbar navbar-expand-lg bg-blue">
		<div class="container-fluid">
			<a class="navbar-brand" href="/">Navbar</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="/roomList">Room</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/postList">Post</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Dropdown
						</a>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">Action</a></li>
							<li><a class="dropdown-item" href="#">Another action</a></li>
							<li><hr class="dropdown-divider"></li>
							<li><a class="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled">Disabled</a>
					</li>
				</ul>
				<form class="d-flex" role="search">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</div>
	</nav>

	<!-- TODO 7) 뷰-라우터(세팅3) 보여줄 곳을 <router-view)로 표시하기 -->
	<!-- TODO props에 데이터만 넘겨주기-->
	<router-view
		:postList="postLists"
		:roomList="roomLists"
	/>
</template>

<script>
import PostListData from '@/assets/jsons/postList'
import RoomListData from '@/assets/jsons/roomList'

export default {
	name: 'VueRouterGrammar',
	components: {
	},
	data() {
		return {
			postLists: PostListData,
			roomLists: RoomListData,
		}
	},
}
</script>

<style>
body {
	margin: 0px;
}
div {
	text-align: center;
}
.main-title {
	margin-top: 20px;
	text-align: center;
}
.room-img {
	width: 100%;
	height: 100%;
	margin-top: 10px;
}
</style>