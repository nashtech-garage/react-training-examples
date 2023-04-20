import {Fragment, Suspense} from "react";
import {useParams} from "react-router";
import App from "../../App";
import Loading from "../../components/loading/loading";



const ProductPage = () => {
    const {id} = useParams();



    return (
        <Fragment>
            <Suspense fallback={<Loading/>}>
                <h1>Single Product Page with id {id}</h1>
            </Suspense>
        </Fragment>
    )
}

export default ProductPage;