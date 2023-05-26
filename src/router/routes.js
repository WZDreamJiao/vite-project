const JsplumbTest = () => import('../pages/jsplumbTest/index.vue');
const LeaderLineTest = () => import('../pages/leaderLine/index.vue');
const CrossComponentSlots = () => import('../pages/crossComponentSlots/index.vue');


export const routes = [
    {
        name: "TestMenu",
        path: "/TestMenu",
        meta: {
            icon: "House",
            title: "Test菜单"
        },
        children: [
            {
                name: "JSPlumb",
                path: "JSPlumb",
                component: JsplumbTest,
                meta: {
                    title: "JSPlumb测试"
                }
            },
            {
                name: "LeaderLine",
                path: "LeaderLine",
                component: LeaderLineTest,
                meta: {
                    title: "LeaderLine测试"
                }
            },
            {
                name: "CrossSlots",
                path: "CrossSlots",
                component: CrossComponentSlots,
                meta: {
                    title: "插槽测试"
                }
            }
        ]
    },

]
