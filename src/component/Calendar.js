import React from 'react';
import {Collapse} from 'antd';
import _ from'lodash';
import List from '../redux/onScreen';

const Panel = Collapse.Panel;
let datepanel=[];
datepanel=_.range(14,21);
const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
  </p>
);

class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.state={
       data:datepanel,
    }
  }

    render(){
      const list=this.state.data.map((data,id)=>
      <Collapse bordered={false} key={data} >
            <Panel header={data}  >{text}</Panel>
        </Collapse>
);
      return(
<div id="containerHome">
  <div id="content">
  <List/>
      <div id="text-calendar">
      On 8 November 2016, the Government of India announced the demonetisation
       of all ₹500 (US$7.80) and ₹1,000 (US$16) banknotes of the Mahatma Gandhi

      </div>
      <h1 id="feb">February</h1>
    {list}

     </div >
  </div>
      );
    }
}
export default Calendar;
