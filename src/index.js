import React from 'react';
import { render } from 'react-dom';
import './css/styles.scss';

import Example1 from './example1/Example1';
import Example1CM from './example1_cm/Example1CM';
import SinglePage from './SinglePage/SinglePage';


const App = () => {
    return (
        <div>
            <Example1 />
            <Example1CM />
            <SinglePage />
        </div>
    )
}

render(<App />, document.getElementById('root'));
