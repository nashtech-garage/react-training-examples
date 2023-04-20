import React, {Fragment, lazy, Suspense, useEffect, useState} from "react";
import {Outlet, useParams, useRoutes} from "react-router";
import Loading from "../../components/loading/loading";
import ProductList from "./product-list";
import './product.css'


// const ProductList = lazy<any>(()=> import('./product-list'));

const ProductsPage = () => {
    const params = useParams();

    return (
        <Fragment>

            <div className='container-fluid'>
                <h1> This is Product Page</h1>

                <div className='row'>
                    <div className='col-3 sideMenu'>
                        <Suspense fallback={<Loading/>}>

                            <ProductList/>
                        </Suspense>
                    </div>

                    <div className='col-9 content'>
                        <Outlet></Outlet>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default ProductsPage