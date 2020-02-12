import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {addingPlayer} from "./Actions/addingPlayer";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import {store} from "./Reducers/PlayersReducers"

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      state1:"Do",
      counter:0
    }
      this.handleChange=this.handleChange.bind(this);
      this.increment=this.increment.bind(this);
      this.decrement=this.decrement.bind(this);
  }
  handleChange(){
  this.setState({
    state1:"Do not"
  })
}
  increment(){
    this.setState({
      counter:this.state.counter+1
    })
  }
  decrement(){
    this.setState({
      counter:this.state.counter-1
    })
  }

  render() {

    return (
      <div className="App">
      <h1>Player Card</h1>
      <Button type="primary" onClick={this.decrement}>
            <Icon type="left" />Backward
          </Button>{this.state.counter}

          <Button type="primary" onClick={this.increment}>
            Forward<Icon type="right" />
          </Button>
          <h2>{this.props.Player[this.state.counter&& this.state.counter]}</h2>
      </div>
    );
  }
}
function mapStateToprops(state){
    return{
      Player:state
    }
}
const mapDispatchToProps = {
  addingPlayer,
};

const PlayerApp=connect(mapStateToprops,mapDispatchToProps)(App);
export default PlayerApp
