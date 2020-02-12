import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Button, Radio, Icon,Input,Col, Row  } from 'antd';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import {store} from "../Reducers/PlayersReducers";
import {addingPlayer, removePlayer,testAction} from "../Actions/addingPlayer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PlayerCard from "./card";
const axios = require('axios');


class Main extends Component {

  state={
      state1:"",
      counter:0
    }

  componentDidMount(){
    this.setState({
      state1:"",
      counter:0
    })
      this.handleRemove=this.handleRemove.bind(this);
      this.increment=this.increment.bind(this);
      this.decrement=this.decrement.bind(this);

      axios.get("https://dog.ceo/api/breeds/image/random")
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error)
      })
  }


  handleRemove(){
    this.props.removePlayer(this.props.Player[this.state.counter-1]);
    this.forceUpdate()
  }
  increment(){
    if (this.props.Player.length>this.state.counter+1){this.setState({
      counter:this.state.counter+1
    })
  }
  }
  decrement(){
    !this.state.counter==0? this.setState({
     counter:this.state.counter-1
   }): console.log("no")
  }

  render() {

    return (
      <Row className="App" style={{width:"100%"}}>

      <h1>Player Card</h1>
      <Row style={{paddingLeft:"40%",marginBottom:"3%"}} >
        <PlayerCard player={this.props.Player[this.state.counter&& this.state.counter]} />
      </Row>
            <div style={{margin:"50",opacity:1,}}>
        {!this.state.counter==0 && this.state.counter?<Button type="primary" onClick={this.decrement}  style={{zindex:2,width:170}}>
            <Icon type="left" />Backward
          </Button>: <Button type="primary" disabled><Icon type="left" />Backward</Button>}

          {this.props.Player.length>this.state.counter+1? <Button type="primary" onClick={this.increment} style={{zindex:2,width:180}}>
            Forward<Icon type="right" />
          </Button>: <Button type="primary" disabled><Icon type="left" />Forward</Button>}

          <h2>{this.props.Player[this.state.counter&& this.state.counter]? this.props.Player[this.state.counter&& this.state.counter].name:this.props.Player[this.state.counter-1 && this.state.counter-1].name}</h2>
          <Button onClick={this.handleRemove}>Remove Player </Button>
          </div>
      </Row>
    );
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
});

const PlayerApp=connect(mapStateToprops,mapDispatchToProps)(Main);
export default PlayerApp
