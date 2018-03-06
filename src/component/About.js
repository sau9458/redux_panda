import React from 'react';
import {Form,Col, Input, Button, notification,Icon } from 'antd';
import {Link} from 'react-router-dom';

const FormItem = Form.Item;
const { TextArea } = Input;
class AboutForm extends React.Component {
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
    return (
      <div>
            <Link to="/homepage"><Icon className="leftArrow" type="left" /></Link>
      <div id="container">
        <div id="content">
          <h1>About Me</h1>
          <Form onSubmit={this.handleSubmit} layout="inline" className="login-form">
            <p>Tell everything about yourself that potential client should
            Know about you!</p>
            <div id="about-Container">
              <FormItem>
              {getFieldDecorator('about', {
                rules: [{ required: true, message: 'Please Enter your information!' }],
              })(
                <TextArea id="TextArea" placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident ,
                sunt in culpa qui officia deserunt mollit anim id est laborum." autosize />
                )}
              </FormItem>
                <br/>
                <br/>
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

const WrappedAboutForm = Form.create()(AboutForm);
export default WrappedAboutForm;
