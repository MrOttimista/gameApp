import React, { Component } from 'react';
import { Button, Radio, Icon,Input ,Layout,Menu,Breadcrumb,Form } from 'antd';
import {addingPlayer, removePlayer,testAction} from "../Actions/addingPlayer";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import {store} from "../Reducers/PlayersReducers";


const FormItem = Form.Item;



class AddPlayer extends Component{
  state={
    name:"",
    counter:0,
    age:0
    }


  componentDidMount(){
    this.setState({
      name:"",
      age:0,
      counter:0,
    },

)
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange1=this.handleChange1.bind(this);
    this.handleChange2=this.handleChange2.bind(this);

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
    this.props.addingPlayer(player)
    this.setState({
      name:""
    });
    this.setState({
      age:0
    });
  }

  render(){
    return(
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <h1> Add Player </h1>
        <FormItem>

           <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" onChange={this.handleChange1}/>
       </FormItem>
       <FormItem>

          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" onChange={this.handleChange2} />
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
const mapDispatchToProps ={addingPlayer}

connect(mapStateToprops,mapDispatchToProps)(AddPlayer);
export default AddPlayer
