import { lazy } from "react";

const routers = [
    {
        path: "/",
        components: lazy(() => import('@components/HomePage/HomePage'))
    }
]

export default routers;