import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/main/main";
import BlogPage from "../pages/blog/blog";
import NotFoundPage from "../pages/404";
import ProductsPage from "../pages/products/products";
import ProductPage from "../pages/products/product";
import {ProductRoutes} from "../pages/products/product.routes";
import {SignOnPage, SignOnPage2 } from "../pages/auth/sign-on";
import React, {Profiler} from "react";
import BrokenPage from "../pages/broken-page/broken-page";
import LazyPage from "../pages/lazy/lazy-page";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Profiler id='MainPage'
                           onRender={(id,
                                      phase,
                                      actualDuration,
                                      baseDuration,
                                      startTime,
                                      commitTime
                           ) => console.log(
                               id,
                               phase,
                               actualDuration,
                               baseDuration,
                               startTime,
                               commitTime)}>
            <MainPage />
        </Profiler>,
        errorElement: <NotFoundPage/>
    },
    {
        path: 'lazy',
        element: <LazyPage/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: 'broken',
        element: <BrokenPage/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: 'auth/sign-on',
        element: <SignOnPage/>
    },
    {
        path: 'auth/sign-on-2',
        element: <SignOnPage2/>
    },
    {
        path: "blog",
        element: <BlogPage/>,
        errorElement: <NotFoundPage/>
    },
    // {
        // path: 'product',
        // element: <ProductsPage/>,
        // errorElement: <NotFoundPage/>,
        // children: [
        //     {
        //         path: ':id',
        //         element: <ProductPage/>,
        //         errorElement: <NotFoundPage/>,
        //     }
        // ]
    // }

    ...ProductRoutes
]);

export default router;