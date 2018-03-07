import React from 'react';
import { Icon,Tabs} from 'antd';
import Calandar from './Calendar';
import Inquiries from './Inquiries' ;
import Inovice from './Inovice';
import Profile from './Profile';
const TabPane = Tabs.TabPane;
class HomePage extends React.Component {
  render(){
    return(
<div id="tabs">
         <Tabs  >
                  <TabPane  tab={<div className="fontOfTab"><span className="iconAlign" id="tabs-icon"><Icon type="calendar" /><br/></span>
                  <span >Calender</span></div>} key="1"><div><Calandar /></div></TabPane>

                  <TabPane  tab={<div className="fontOfTab"><div className="iconAlign" id="tabs-icon"><Icon type="mail" /></div>
                  <span >Inquiries </span></div>} key="2"><Inquiries/></TabPane>

                  <TabPane  tab={<div className="fontOfTab"><span className="iconAlign" id="tabs-icon"><Icon type="bar-chart" /><br/></span>
                  <span >Inovice</span></div>} key="3"><Inovice/></TabPane>

                  <TabPane  tab={<div className="fontOfTab"><span className="iconAlign" id="tabs-icon"><Icon type="user" /><br/></span>
                  <span >Profile</span></div>} key="4"><Profile/></TabPane>

          </Tabs>
  </div>
    );
  }
}
export default HomePage;
