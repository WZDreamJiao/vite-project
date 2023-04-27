export const routes = [
    {
        path: "/",
        // redirect: {},
    },
    {
        name:"JSplumbTest",
        path: "/jsplumbTest",
        component: () => import('../pages/jsplumbTest/index.vue'),
        meta: {
            icon:"House",
            content:"JSplumb测试"
        }
    }
]