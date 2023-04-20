import Header from "../../components/header/header";
import React, {Fragment} from "react";
import ErrorBoundary from "../../components/error-boundary/error-boundary";
import BrokenPart from "../../components/error-boundary/broken-part";

const BrokenPage = () => {


    return(
        <Fragment>
            <ErrorBoundary fallback={<p>Something went wrong!</p>}>
                <BrokenPart broken={false}/>
                <BrokenPart broken={true}/>
                <BrokenPart broken={false}/>
            </ErrorBoundary>
        </Fragment>
    )

}

export default BrokenPage;