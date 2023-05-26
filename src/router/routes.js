const Jsplumb = () => import('../pages/jsPlumb/index.vue');
const LeaderLineTest = () => import('../pages/leaderLine/index.vue');
const CrossComponentSlots = () => import('../pages/crossComponentSlots/index.vue');
const Codemirror = () => import('../pages/codemirror/index.vue');


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
                component: Jsplumb,
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
            },
            {
                name: "Codemirror",
                path: "Codemirror",
                component: Codemirror,
                meta: {
                    title: "Codemirror测试"
                }
            }
        ]
    },

]
