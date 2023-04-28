const JsplumbTest = () => import('../pages/jsplumbTest/index.vue');

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
                component: JsplumbTest,
                meta: {
                    title:"JSPlumb测试"
                }
            }
        ]
    },

]
