import React from 'react';
import {connect} from 'react-redux';
import style from 'antd/dist/antd.css';
import {Form, Col,Select, notification, Input, Switch, Button,Icon } from 'antd';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import {addSignalmentDetail} from '../action/action';
class SignalmentForm extends React.Component {
  constructor(props) {
    super(props);   
    this.state = {
      Distance:props.signalmentDetail.Distance,
      Pension:props.signalmentDetail.Pension,
      Qualification:props.signalmentDetail.Qualification,
      Working_Shift:props.signalmentDetail.Working_Shift,
      facilities:props.signalmentDetail.facilities,
      driving_license:props.signalmentDetail.driving_license,
      own_car:props.signalmentDetail.own_car,
      Location: props.signalmentDetail.Location
    };
  }
  onChange = (defauUnChecked)=> {
    this.state.driving_license = defauUnChecked;
  }
  onChangecar = (check)=> {
   this.state.own_car =  check;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
          let driving_license=this.state.driving_license?this.state.driving_license:false;
         let own_car=this.state.own_car?this.state.own_car:false;

        this.props.funAddSignalmentDetail(values,driving_license,own_car);
        notification.open({
          message: 'Successfully Updated',
          description: 'Your information has been successfully updated.',
          duration:1
        });
      }
    });
  }
  render() {
    const FormItem = Form.Item;
    const Option = Select.Option;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
            <Link to="/homepage"><Icon className="leftArrow" type="left" /></Link>
      <div id="container">
      <div id="content">
      <h1>Signalment</h1>
      <Form  onSubmit={this.handleSubmit} >
        <FormItem >
          {getFieldDecorator('facilities', {
            rules: [{ required: true, message: 'Please select your facilities!' }],
            initialValue:this.state.facilities
          })(
            <Select  placeholder="Facilities"
            onChange={this.handleSelectChange}>
            <Option value="Value#1">Value#1</Option>
            <Option value="Value#2">Value#2</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('Qualification', {
            rules: [{ required: true,message: 'Please select your Qualifications!' }],
            initialValue:this.state.Qualification
          })(
            <Select
              placeholder="Additional Qulifications"
              onChange={this.handleSelectChange}
            >
              <Option value="Value#1">Value#1</Option>
              <Option value="Value#2">Value#2</Option>
            </Select>
          )}
        </FormItem>
        <div id="signalment-Input-Location">
        <FormItem>
          {getFieldDecorator('Location', {
            rules: [{ required: true, message: 'Please input your Location!' }],
            initialValue:this.state.Location
          })(
            <Input placeholder="Location" />
          )}
          </FormItem>
          </div>
          <div id="signalment-Input-Distance">
          <FormItem>
          {getFieldDecorator('Distance', {
            rules: [{ required: true, message: 'Please input your Distance!' }],
            initialValue:this.state.Distance
          })(
            <Input placeholder="Distance of work               km" />
          )}
        </FormItem>
        </div>
        <FormItem >
          {getFieldDecorator('Working_Shift', {
            rules: [{ required: true, message: 'Please select your Working Shift!' }],
            initialValue:this.state.Working_Shift
          })(
            <Select
              placeholder="Working Shifts"
              onChange={this.handleSelectChange}
            >
              <Option value="Value#1">Value#1</Option>
              <Option value="Value#2">Value#2</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('Pension', {
            rules: [{ required: true, message: 'Please select your Remission of Pension Charges!' }],
            initialValue:this.state.Pension
          })(
            <Select
              placeholder="Remission of Pension Charges"
              onChange={this.handleSelectChange}
            >
              <Option value="Value#1">Value#1</Option>
              <Option value="Value#2">Value#2</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
        <h4 id="signalment-h4">Driver License</h4>
          <Switch  id="signalment-Switch" name="driving_license" defaultChecked={this.state.driving_license} onChange={this.onChange} />
        </FormItem>
        <FormItem>
        <h4 id="signalment-h4">Own Car</h4>
          <Switch id="signalment-Switch" name="own_car"  defaultChecked={this.state.own_car} onChange={this.onChangecar} />
        </FormItem>
        <FormItem>
          <Button htmlType="submit" id="register-form-button" className="login-form-button">
            Save
          </Button>
        </FormItem>
      </Form>
      </div>
      </div>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
    return {
        signalmentDetail:state.signalmentDetail
    };
};

const mapDispatchToProps = (dispatch) => {
  return{ 
    funAddSignalmentDetail:(values,driving_license,own_car)=>{
    dispatch(addSignalmentDetail(values,driving_license,own_car))
  },
}
};
const WrappedSignalmentForm = Form.create()(SignalmentForm);

const connectList=connect(mapStateToProps,mapDispatchToProps)(WrappedSignalmentForm);
export default connectList;
