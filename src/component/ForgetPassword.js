import React from 'react';
import { Col,Form,Icon, Input, Button, notification} from 'antd';
import {Link} from 'react-router-dom';
const FormItem = Form.Item;
class ForgetPassword extends React.Component {
 handleSubmit = (e) => {
   e.preventDefault();
   this.props.form.validateFields((err, values) => {
     if (!err) {
       console.log('Received values of form: ', values);
       notification.open({
         message: 'Password Successfully reset',
         description: 'Your password has been successfully reset.',
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
     <Form onSubmit={this.handleSubmit} className="login-form">

     <FormItem >
 E-mail Address*
    {getFieldDecorator('email', {
      rules: [{
        type: 'email', message: 'The input is not valid E-mail!',
      }, {
        required: true, message: 'Please input your E-mail!',
      }],
    })(
      <Input type="text" className="input-email" />
    )}
  </FormItem>

       <FormItem>
         <div><Button  id="login-form-button" htmlType="submit" className="login-form-button">
           Reset Password
         </Button></div>
       </FormItem>
     </Form>
     </div>
     </div>
     </div>
   );
 }
}
const WrappedForgetPassword = Form.create()(ForgetPassword);

export default WrappedForgetPassword;
