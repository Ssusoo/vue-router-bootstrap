<!--
	1th, 뷰 라우터
		TODO 1) 라우트를 여러 개 만들 고 싶을 때(src/router/router.jsd에서 '설명')
		TODO 2) 페이지 이동 링크를 만들고 싶을 때(실무에서)
			-> to="" 안에 마음대로 경로설정이 가능함.
			<template v-slot:body-cell-taName="props">
					<q-td :props="props">
						<router-link :to="`/ta/info/${props.row.taSerialNo}`" class="text-black">
							{{ props.value }}
						</router-link>
					</q-td>
			</template>
-->
<template>
	<div>

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