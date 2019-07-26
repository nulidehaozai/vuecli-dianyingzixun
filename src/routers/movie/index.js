export default {
    path: "/movie",
    component: () => import("@/views/Movie"),
    children: [
        {
            path: "city",
            component: () => import("@/components/City")
        },
        {
            path: "nowPlaying",
            component: () => import("@/components/NowPlaying")
        },
        {
            path: "comingSoon",
            component: () => import("@/components/ComingSoon")
        },
        {
            path: "search",
            component: () => import("@/components/Search")
        },
        {
            path: "detail/:movieId",
            components: {
                detail: () => import("@/views/Movie/detail")
            },
            props:{
                detail :true
            }
        },
        {
            path: "/movie",
            redirect: "/movie/nowPlaying"
        }
    ]
}