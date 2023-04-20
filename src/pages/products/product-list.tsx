import {useEffect, useState} from "react";
import products from "./products";
import Products from "./products";




const fakeAPI = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ name: 'P1' }, {  name: 'P1' }, { name: 'P1' }]);
        }, 5000);
    });
};

const wrapPromise = (promise: Promise<any>) => {
    let status = 'pending';
    let result: any;
    let suspender = promise
        .then((res) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            (status = 'success'), (result = res);
        })
        .catch((err) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            (status = 'error'), (result = err);
        });
    return {
        read() {
            if (status === 'pending') throw suspender;
            else if (status === 'error') throw result;
            else return result;
        },
    };
};

export const fetchData = () => {
    const userPromise = fakeAPI();
    return {
        products: wrapPromise(userPromise),
    };
};

const resource = fetchData();

const ProductList = () => {
    const products: any = resource.products.read();

    return (
        <ul>{ products.map((product: any) => (<li>{product.name}</li>))} </ul>
    )
}

export default ProductList