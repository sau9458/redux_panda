import React from 'react';
import { Form, Input, Icon, Select,Button } from 'antd';
import _ from 'lodash';
const FormItem = Form.Item;
const { Option } = Select;
const startYear= new Date().getFullYear();
const endYear = startYear-50;
let year=[];
year = _.range(startYear,endYear);

let uuid = 0;
class Addemp extends React.Component {
  constructor(props) {
    super(props);
    this.state={
       data:year,
    }
  }
  handleChange=(value)=> {
    console.log(`selected ${value}`);
  }
  remove = (k) => {
    const { form } = this.props;
    const keys = form.getFieldValue('keys');
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }
  add = () => {
    const { form } = this.props;
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    uuid++;
    form.setFieldsValue({
      keys: nextKeys,
    });
  }
  render() {
    const Yearlist = this.state.data.map((data,id)=>
    <Option key={data} value={data}>{data}</Option>
    );
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => {
      return (
        <div id="addEmployer" key={index}>
        <div id="close">
        <Icon
          className="dynamic-delete-button"
          type="cross-circle-o"
          onClick={() => this.remove(k)}
        />
        </div>
        <br/>
        <FormItem>
          {getFieldDecorator(`names[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              whitespace: true,
              message: "Please input employer's name.",
            }],
          })(
            <Input placeholder="Name of my employer*" style={{ width: '95%', marginRight: 8 }} />
          )}
        </FormItem>
        <br/>
        <br/>
        <div id="addEmployerCityDetails">
        <FormItem layout="inline">
          {getFieldDecorator(`cityname[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              whitespace: true,
              message: "Please input city's name.",
            }],
          })(
            <Input placeholder="City name"  />
          )}
        </FormItem>
        </div>
        <div id="addEmployerStartdate">
        <FormItem layout="inline" className="setHeight">
          {getFieldDecorator(`startdate[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              message: "Please select a year.",
            }],
          })(
            <Select placeholder="From" onChange={this.handleChange}>
          {Yearlist}
            </Select>
          )}
        </FormItem>
        </div>
        <div id="addEmployerEnddate">
        <FormItem >
          {getFieldDecorator(`enddate[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              message: "Please select a year",
            }],
          })(
            <Select placeholder="Till" >
          {Yearlist}
            </Select>
          )}
        </FormItem>
        </div>
      </div>

      );
    });
    return (
      <div>
        {formItems}

        <FormItem {...formItemLayoutWithOutLabel}>
        <br />
          <p id="addEmployertext" onClick={this.add}>
             Add Additional employer here
          </p>
        </FormItem>
      </div>
    );
  }
}

const WrappedAddemp = Form.create()(Addemp);
export default WrappedAddemp;
