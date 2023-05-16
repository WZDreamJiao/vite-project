const JsplumbTest = () => import('../pages/jsplumbTest/index.vue');
const LeaderLineTest = () => import('../pages/leaderLine/index.vue');

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
            },
            {
                name:"TestTwo",
                path: "testTwo",
                component: LeaderLineTest,
                meta: {
                    title:"leaderLine测试"
                }
            }
        ]
    },

]
