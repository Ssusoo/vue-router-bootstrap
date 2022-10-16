<!-- 2th, 뷰-라우터 상세페이지
	TODO 1) 상세페이지 컴포넌트 만들기(_2/components/PostDetailComponent)
	TODO 2) router.js에서 /deteail URL 추가하기
	TODO 3) /detail/:id 콜론 문법 사용하기
		/detail/2로 접속해도 보여주고, /detail/10000로 해도 상세페이지를 보여준다.
	TODO 4) $route 문법
		현재 URL 정보는 $route에 담겨있다.
		Q : /detail/1라는 정보를 $route를 통해 알고 싶다면?
			-> $route.params.id
			{{ $route.params.id }} == /detail/:id
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

	<router-view
			:postList="postLists"
	/>


</template>

<script>
import PostListData from '@/assets/jsons/postList'

export default {
	name: 'VueRouterDetail',
	data() {
		return {
			postLists : PostListData,
		}
	}
}
</script>

<style>
.detail {
	text-align: center;
}
</style>