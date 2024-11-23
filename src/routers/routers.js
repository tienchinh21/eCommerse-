import { lazy } from "react";

const routers = [
    {
        path: "/",
        components: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path: "/shop",
        components: lazy(() => import('@pages/OurShop/OurShop'))
    }
]

export default routers;