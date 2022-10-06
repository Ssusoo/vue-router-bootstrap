/*
	1th, 뷰 라우터
        TODO 2) 페이지 이동 링크를 만들고 싶을 때(실무에서)
        -> to="" 안에 마음대로 경로설정이 가능함.
        <template v-slot:body-cell-taName="props">
            <q-td :props="props">
            <router-link :to="`/ta/info/${props.row.taSerialNo}`" class="text-black">
            {{ props.value }}
        </router-link>
        </q-td>
        </template>
*/

