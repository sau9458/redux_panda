import React from 'react';
import {Col, Icon} from 'antd';

const error =()=> (
  <div id="container">
      <div id="content">
        <div id="errorMessage">
          <Icon id="icon" type="frown-o" /><h1 style={{color:'red'}}>Error 404 Not Found!</h1>
        </div>
      </div>
  </div>
);

export default error;
