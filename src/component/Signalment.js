import React from 'react';
import {connect} from 'react-redux';
import style from 'antd/dist/antd.css';
import {Form, Col,Select, notification, Input, Switch, Button,Icon } from 'antd';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import {store} from '../store/store';
import {addSignalmentDetail} from '../action/action'
let driving_license,own_car;
class SignalmentForm extends React.Component {
  constructor(props) {
    super(props);   
    this.state = {
      Distance:props.signalmentDetail[props.signalmentDetail.length-1] && props.signalmentDetail[props.signalmentDetail.length-1].Distance,
      Pension:props.signalmentDetail[props.signalmentDetail.length-1] && props.signalmentDetail[props.signalmentDetail.length-1].Pension,
      Qualification:props.signalmentDetail[props.signalmentDetail.length-1] && props.signalmentDetail[props.signalmentDetail.length-1].Qualification,
      Working_Shift:props.signalmentDetail[props.signalmentDetail.length-1] && props.signalmentDetail[props.signalmentDetail.length-1].Working_Shift,
      facilities:props.signalmentDetail[props.signalmentDetail.length-1] && props.signalmentDetail[props.signalmentDetail.length-1].facilities,
      driving_license:props.signalmentDetail[props.signalmentDetail.length-1] && props.signalmentDetail[props.signalmentDetail.length-1].driving_license,
      own_car:props.signalmentDetail[props.signalmentDetail.length-1] && props.signalmentDetail[props.signalmentDetail.length-1].own_car,
      Location: props.signalmentDetail[props.signalmentDetail.length-1] && props.signalmentDetail[props.signalmentDetail.length-1].Location
    };
  }
  onChange = (defauUnChecked)=> {
    driving_license = defauUnChecked;
  }
  onChangecar = (check)=> {
    own_car =  check;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
         store.dispatch(addSignalmentDetail(values,driving_license,own_car));
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
const WrappedSignalmentForm = Form.create()(SignalmentForm);
// export default WrappedSingnalmentForm;
const connectList=connect(mapStateToProps)(WrappedSignalmentForm);
export default connectList;
