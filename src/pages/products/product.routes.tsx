import ProductPage from "./product";
import ProductsPage from "./products";
import {NonIndexRouteObject, Routes, useRoutes} from "react-router";

const ProductRoutes: NonIndexRouteObject[] = [
    {
        path: 'product',
        element: <ProductsPage/>,
        children: [
            {
                path: ':id',
                element: <ProductPage/>
            }
        ]
    }
]

export {ProductRoutes};