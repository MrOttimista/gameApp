import React, { Component } from 'react';
import { Button, Radio, Icon,Input ,Layout,Menu,Breadcrumb,Form } from 'antd';
import {addingPlayer, removePlayer,testAction} from "../Actions/addingPlayer";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import {store} from "../Reducers/PlayersReducers";
import { bindActionCreators } from 'redux';
const axios = require('axios');
const FormItem = Form.Item;



class AddPlayer1 extends Component{
  state={
    name:"",
    age:0
    }


  componentDidMount(){
    this.setState({
      name:"",
      age:""
    })

    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange1=this.handleChange1.bind(this);
    this.handleChange2=this.handleChange2.bind(this);
    // axios.get('https://jsonplaceholder.typicode.com/photos/2')
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
  }


  handleChange1(e){
    this.setState({
      name:e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      age:e.target.value
    })
  }
  handleSubmit(){
    let player={name:this.state.name,age:this.state.age};
    console.log(player);
    this.props.addingPlayer(player)
    this.setState({
      name:"",
    });
    this.setState({
      age:"",
    });

  }

  render(){
    return(
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <h1> Add Player </h1>
        <FormItem style={{width:200}}>

           <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" onChange={this.handleChange1} value={this.state.name}/>
       </FormItem>
       <FormItem style={{width:200}}>

          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="Age" onChange={this.handleChange2} value={this.state.age} />
      </FormItem>
      <FormItem>
          <Button
            type="primary"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </FormItem>
      </Form>
    )
  }
}


function mapStateToprops(state){
    return{
      Player:state
    }
}
const mapDispatchToProps =dispatch=> ({
  addingPlayer:(player)=>dispatch(addingPlayer(player)),
  removePlayer:(player)=>dispatch(removePlayer(player)),
  test:()=>dispatch(testAction())
})
const AddPlayer=connect(mapStateToprops,mapDispatchToProps)(AddPlayer1);
export default AddPlayer
