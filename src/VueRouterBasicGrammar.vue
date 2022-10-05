<!--
	1th, 뷰-라우터 기본편
		TODO 뷰 라우터를 왜 사용할까?
				일단, 페이지를 여러 개를 보여주고 싶을 때 '뷰-라우터'를 사용한다.
				예를 들면, DetailComponent.vue를 만들고,
				localhost:8080/detail로 접속하면
				"DetailComponent.vue를 보여주세요"라는 코드를 짤 수 있다.

		TODO v-router 설치
			1) yarn add vue-router@4(vue 3버전이랑 호환되는 게 라우터4인듯)
			3) npm run serve(뷰 페이지 미리보기)
			4) main.js에서 라우터 세팅하기
				4-1) 다량의 라우터를 main.js에 세팅하기 보다
					src/router/router.js 하나 만들어서 라우터 세팅하면서 관리하기

		TODO $router vs $route
			1) $router(라우터 : 라우터 기능 관리)
			2) $route(라우트 : 경로)
				라우팅은 경로를 찾아가는 과정이고 라우팅의 결과가 라우트(경로)다.


		TODO $router의 메소드와 $route의 프로퍼티
			1) $router.push() : 메소드
				push() : 페이지 이동 실행, 히스토리 엔트리 추가 후 뒤로가기 버튼이 누르면 앞의 URL로 이동
				replace() : 페이지 이동 실행, 히스토리에 새 엔트리 추가하지 않음.
				go() : 히스토리 단계에서 n 단계로 이동
				back() : 히스토리에서 한 단계로 돌아감.
			2) $route : 프로퍼티
				path : 현재 라우트의 경로를 나타내는 문자열
				params : 정의된 URL 패턴과 일치하는 파라티머의 키-값 쌍을 담고 있는 객체
				query : 쿼리 문자열의 키-쌍 값을 담고 있는 객체
				name : 이름을 가진 라우트인 경우 라우트의 이름

-->