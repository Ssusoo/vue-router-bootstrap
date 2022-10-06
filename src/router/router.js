/*
	1th, 뷰 라우터 기본법(라우트 path 설정 및 template 태그에 페이지 이동 링크 설정)
        TODO 1) 라우트를 여러 개 만들 고 싶을 때
        const routes = [
            {
                path: '/list',
                component: List,
            },
            {
                path: '/경로',
                component: 위에서 import 해온 컴포넌트
            }
        ];
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

