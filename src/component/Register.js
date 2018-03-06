import React from 'react';
import { Form,Col, Input, Button, notification,Icon } from 'antd';
import {Link} from 'react-router-dom';

const FormItem = Form.Item;
class RegisterForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        notification.open({
          message: 'Successfully Registered',
          description: 'You are successfully registered on our website.',
        });
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
            <Link to="/"><Icon className="leftArrow" type="left" /></Link>
      <div id="container">
        <div id="content">
          <h1>Finish Registration</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <div className="fix">
            <FormItem className="RegisterFormMargin">
              E-Mail Address*
              {getFieldDecorator('email', {
                rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
              }, {
              required: true, message: 'Please input your E-mail!',
              }],
              })(
                <Input type="email" />
              )}
            </FormItem>
            </div>
              <div className="fixField">
            <FormItem >

              Password*
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input  type="password" />
              )}

            </FormItem>
            </div>
            <div className="fixField">
            <FormItem className="RegisterFormMargin">
              First Name
              {getFieldDecorator('firstname', {
                rules: [{ required: true, message: 'First Name is required!' }],
              })(<Input  type="text"/>)}
            </FormItem>
            </div>
            <div className="fixField">
            <FormItem >
              Last Name
              {getFieldDecorator('lastname', {
                rules: [{ required: true, message: 'Last Name is required!' }],
              })(<Input  type="text"/>)}
            </FormItem>
            </div>
            <div className="fixField">
            <FormItem >
              Mobile Phone Number
              {getFieldDecorator('number', {
                rules: [{ required: true, message: 'Mobile Number is required!' }],
              })(<Input  type="number"/>)}
            </FormItem>
            </div>
            <p style={{'marginTop':'20px'}}><b>Important Note:</b> We will never publish your phone number - we justuse it,
              when we recieve specific booking requests for you. By clicking the save
              button, you accept our general terms and our data protection regulations.</p>
              <div id="register-Container" >
              <FormItem>
                <Button htmlType="submit" id="register-form-button" className="login-form-button">
                  Save now and start for free
                </Button>
              </FormItem>
              </div>

          </Form>
        </div>
        <br/>
      </div>
      </div>
    );
  }
}

const WrappedRegisterForm = Form.create()(RegisterForm);
export default WrappedRegisterForm;
