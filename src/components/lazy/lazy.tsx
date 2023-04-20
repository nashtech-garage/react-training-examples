import { Suspense, lazy } from 'react';

const OtherComponent = lazy<any>(()=> import('./other-component'));
const AnotherComponent = lazy<any>(() => import('./another-component'));

const LazyComponent = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <section>
                    <OtherComponent />
                    <AnotherComponent />
                </section>
            </Suspense>
        </div>
    );
}

export default LazyComponent;
