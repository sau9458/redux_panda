import React from 'react';
import { Form,Col, Input, Button, notification } from 'antd';
import {Link} from 'react-router-dom';
import {store} from '../store/store';
import {addUserDetail} from '../action/action'

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
 handleSubmit = (e) => {
   e.preventDefault();
   this.props.form.validateFields((err, values) => {
     if (!err) {
       this.props.history.push('/homepage');
       store.dispatch(addUserDetail(values));
       notification.open({
         message: 'Successfully Logged In',
         description: 'You are successfully Logged in.',
       });
     }
   });
 }
 render() {
   const { getFieldDecorator } = this.props.form;
   return (
   <div id="container">
     <div id="content">
     <h1>Login</h1>

     <Form onSubmit={this.handleSubmit} className="login-form">
     <FormItem >
     E-Mail Address*
       {getFieldDecorator('email', {
         rules: [{
           type: 'email', message: 'The input is not valid E-mail!',
         }, {
           required: true, message: 'Please input your E-mail!',
         }],
       })(
         <Input type="text" />
       )}
     </FormItem>
       <FormItem>
       Password*
         {getFieldDecorator('password', {
           rules: [{ required: true, message: 'Please input your Password!' }],
         })(
           <Input  type="password" />
         )}
       </FormItem>
       <FormItem>
       <Button htmlType="submit" id="login-form-button" className="login-form-button">
         Login
       </Button>
         <div id="links">
         <Link to="/forgetpassword">Forgot password? Reset it!</Link><br />
         <Link  to="/register">No Account yet? Register now!</Link>
         </div>
       </FormItem>
     </Form>
     </div>
     </div>
   );
 }
 }

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
