import React, { Component } from 'react';
import { connect } from 'react-redux';
import {store} from "../Reducers/PlayersReducers";
import Chart from "./chart";
import {Form, Icon, Input, Button,Select, Row, Col} from 'antd';
const {Option}=Select;

const children = [];
for (let i = 0; i < 11  ; i++) {
  children.push(<Option key={i}>{i}</Option>);
}

class Servey extends Component{
  state={
    Service:0,
    Product:0,
    Website:0,
    Company:0,
    Place:0
  }
  componentDidMount(){
    this.handleChange1=this.handleChange1.bind(this);
    this.handleChange2=this.handleChange2.bind(this)
    this.handleChange3=this.handleChange3.bind(this)
    this.handleChange4=this.handleChange4.bind(this)
    this.handleChange5=this.handleChange5.bind(this)

    this.setState({
      Service:0,
      Product:0,
      Website:0,
      Company:0,
      Place:0
    })
  }
  handleChange1(e){
    this.setState({
      Service:e
    })

  }
  handleChange2(e){
    this.setState({
      Website:e
    })
  }
  handleChange3(e){
    this.setState({
      Product:e
    })
  }
  handleChange4(e){
    this.setState({
      Company:e
    })
  }
  handleChange5(e){
    this.setState({
      Place:e
    })
  }

  render(){
    return(
      <div>

      <Form>

        <Col span={12}>
      <Form.Item label="Service" labelCol={{ span: 3 }} wrapperCol={{ span: 2 }}>
            <Select
              defaultValue={0}
              onChange={this.handleChange1}>
              {children}
            </Select>
      </Form.Item>


      <Form.Item label="Website" labelCol={{ span: 3 }} wrapperCol={{ span: 2 }}>
            <Select
            defaultValue={0}
              placeholder="choose ur answer"
              onChange={this.handleChange2}>
              {children}
            </Select>
      </Form.Item>

      <Form.Item label="product" labelCol={{ span: 3 }} wrapperCol={{ span: 2 }}>
            <Select
            defaultValue={0}
              placeholder="choose ur answer"
              onChange={this.handleChange3}>
              {children}
            </Select>
      </Form.Item>
      <Form.Item label="company" labelCol={{ span: 3 }} wrapperCol={{ span: 2 }}>
            <Select
            defaultValue={0}
              placeholder="choose ur answer"
              onChange={this.handleChange4}>
              {children}
            </Select>
      </Form.Item>
      <Form.Item label="place" labelCol={{ span: 3 }} wrapperCol={{ span: 2 }}>
            <Select
            defaultValue={0}
              placeholder="choose ur answer"
              onChange={this.handleChange5}>
              {children}
            </Select>
      </Form.Item>
      </Col>
      </Form>
      <Col span={12}>
     <Chart values={{Service:this.state.Service,Product:this.state.Product,Website:this.state.Website,Place:this.state.Place,Company:this.state.Company}}/>
</Col>
      </div>
    )
  }
}

export default Servey
