export const routes = [
    {
        name:"First",
        path:"/first",
        meta: {
            icon:"House",
            title:"Test菜单"
        },
        children:[
            {
                name:"TestOne",
                path: "testOne",
                component: () => import('../pages/jsplumbTest/index.vue'),
                meta: {
                    title:"JSPlumb测试"
                }
            }
        ]
    },

]
