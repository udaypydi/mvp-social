import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Loader from 'uielements/loader/loader.component';
import App from 'src/routes';

const Index = () => (
    <Suspense fallback={<Loader />}>
        <App />
    </Suspense>
);

ReactDOM.render(<Index />, document.getElementById('root'));
