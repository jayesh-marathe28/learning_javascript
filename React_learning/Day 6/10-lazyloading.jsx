import { lazy, Suspense } from "react";

const about  = lazy (() => import ("./about"));

function app(){
    return (
        <Suspense fallback= {<p>Loading...</p>}>
            <about />
        </Suspense>
    );
};


export default app;