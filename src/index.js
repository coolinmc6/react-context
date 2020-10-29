import React from 'react';
import { render } from 'react-dom';
import './css/styles.scss';

import Example1 from './example1/Example1';


const App = () => {
    return (
        <div>
            <Example1 />
        </div>
    )
}

render(<App />, document.getElementById('root'));
