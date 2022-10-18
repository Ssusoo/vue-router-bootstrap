<!-- 3th,  넥스트드 라우츠 문법
	TODO 개념 설명?
			/detail/0/author로 접속하면 detail 페이지내에 작가 소개란을 보여주고
			/detail/0/comment로 접속하면 detail 페이지 내에 댓글란을 보여주도록 해보자.
		특정 페이지 내에서 또 라우트를 나누는 경우인데 이걸 nested routes라고 합니다.
		UI만드는 법으로 모달창식으로 만들어도 똑같이 구현가능하긴 한데
		저렇게 다른 URL로 나눠두면 장점이 뭐겠습니까. 뒤로가기 앞으로가기 버튼이 동작함.

		1) nested routes 만들기(/router/router.js)
		2) 등록된 nested routes를 어디서 보여줄지 정하기(_2/components/PostDetailComponent)
		3) 글 제목을 누르면 detail 페이지로 이동하기(_1/components/PostListComponent)

		TODO $route와 $router
			1) $route는 현재경로
			2) $router는 페이지 이동관련 기능
-->