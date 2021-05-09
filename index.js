import { hot } from 'react-hot-loader/root';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Loader from 'uielements/loader/loader.component';
import App from 'src/routes';
import 'semantic-ui-css/semantic.min.css'


const Index = () => (
    <Suspense fallback={<Loader />}>
        <App />
    </Suspense>
);

const HMRIndex = hot(Index);

ReactDOM.render(<HMRIndex />, document.getElementById('root'));
