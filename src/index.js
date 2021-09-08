import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';

import './styles/index.scss'

ReactDOM.render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>,
    document.getElementById('root')
);

