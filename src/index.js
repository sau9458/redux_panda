import ReactDOM from 'react-dom';
import React from 'react';
import style from 'antd/dist/antd.css';
import styles from './index.css';
import {store} from './redux/userDetailReducer';
import {Provider} from 'react-redux';
import styl from './HomePage.css';
import RoutesApp from './App';

const jsx=(
    <Provider store={store}>
        <RoutesApp />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'));
