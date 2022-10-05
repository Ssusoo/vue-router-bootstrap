<!--
	1th, 뷰 라우터
		TODO 뷰 라우터를 왜 사용할까?
			일단, 페이지를 여러 개를 보여주고 싶을 때 '뷰-라우터'를 사용한다.
			예를 들면, DetailComponent.vue를 만들고,
			localhost:8080/detail로 접속하면
			"DetailComponent.vue를 보여주세요"라는 코드를 짤 수 있다.

		TODO v-router 설치
			1) brew install npm
			2) npm install vue-router@4(vue 3버전이랑 호환되는 게 라우터4인듯)
			3) npm run serve(뷰 페이지 미리보기)
			4) main.js에서 라우터 세팅하기
				4-1) 다량의 라우터를 main.js에 세팅하기 보다
					src/router/router.js 하나 만들어서 라우터 세팅하면서 관리하기

		TODO $router vs %route
			1) $router.push(...)
				push() : 페이지 이동 실행, 히스토리 엔트리 추가 후 뒤로가기 버튼이 누르면 앞의 URL로 이동
				replace() :
			2) $route
-->
<template>
	<div>

	</div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
	name: 'VueRouterGrammar',
	data() {
		return {

		}
	},
}
</script>