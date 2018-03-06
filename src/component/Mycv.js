import React from 'react';
import { Form,Col, Button,Select,notification,Icon} from 'antd';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import WrappedAddemp from './Addemp'


const FormItem = Form.Item;
const { Option } = Select;
const startYear= new Date().getFullYear();
const endYear = startYear-50;
let year=[];
year = _.range(startYear,endYear);

class MyCVForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
       data:year,
    }
  }
  handleChange=(value)=> {
    console.log(`selected ${value}`);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        notification.open({
          message: 'Successfully Updated',
          description: 'Your information has been successfully updated.',
        });
      }
    });
  }



  render() {
    const { getFieldDecorator } = this.props.form;
    const Yearlist=this.state.data.map((data,id)=>
    <Option key={data} value={data}>{data}</Option>
    );

    return (
      <div>

      <Link to="/homepage"><Icon className="leftArrow" type="left" /></Link>
      <div id="container">
        <div id="content">
          <h1>My CV</h1>
          <Form onSubmit={this.handleSubmit} layout="inline" className="login-form">
            <p>When did you finish your professional education and when did you start to work as a freelancer?</p>
            <div id="mycv-Container" style={{width:'100%'}}>

                <div id="professionalSince">
                <FormItem layout="inline">
                {getFieldDecorator('Select1', {
                    rules: [{ required: true, message:'Year is required'}],
                })(
                    <Select placeholder="Professional Since"  onChange={this.handleChange}>
                  {Yearlist}
                    </Select>
                  )}
                  </FormItem>
                  </div>
                  <div id="freelancerSince">
                  <FormItem layout="inline">
                  {getFieldDecorator('Select2', {
                      rules: [{ required: true, message:'Year is required'}],
                  })(

                  <Select placeholder="Freelancer Since"  onChange={this.handleChange}>
                {Yearlist}
                  </Select>
                  )}
                    </FormItem>
                    </div>

                <br/>
                <br/>
                  <p>Where you have been emploed before? Please add your employment history here.</p>


                   <WrappedAddemp />


              <FormItem>
                <Button htmlType="submit" id="register-form-button" className="login-form-button">
                  Save
                </Button>
              </FormItem>
            </div>
          </Form>
        </div>
      </div>
      </div>

    );
  }
}

const WrappedMyCVForm = Form.create()(MyCVForm);
export default WrappedMyCVForm;
