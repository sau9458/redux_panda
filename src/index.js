import React from 'react';
import ReactDOM from 'react-dom';
import style from 'antd/dist/antd.css';
import styles from './index.css';
import styl from './HomePage.css';
import routes from './App';
import {store} from './store/store';
import {Provider} from 'react-redux';

const route = (
<Provider store={store}>
{routes}
</Provider>
);
ReactDOM.render(route, document.getElementById('root'));
