<!--
	1th, 뷰 라우터
		TODO Grammar 설명
			뷰-라우터 설치 및 라우트 라우터 설명(VueRouterBasicGrammar)
			뷰 라우터 기본법(라우트 path 설정 및 template 태그에 페이지 이동 링크 설정 / router)
		TODO 1) 라우트를 여러 개 만들 고 싶을 때(src/router/router.js에서 '설명')
		TODO 2) 페이지 이동 링크를 만들고 싶을 때(src/router/router.js에서 '설명')
		TODO 3) 글 목록 컴포넌트 페이지 만들기(src/component/
-->
<template>
	<!-- nav bar -->
	<nav class="navbar navbar-expand-lg bg-blue">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Navbar</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="#">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Link</a>
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

	<div class="main-title">
		<h5>Vue Bootstrap</h5>
		<p>Vue로 만듦</p>
	</div>
</template>

<script>
export default {
	name: 'VueRouterGrammar',
	data() {
		return {

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
</style>