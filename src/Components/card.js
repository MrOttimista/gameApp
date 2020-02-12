import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Button, Radio, Icon,Input,Card ,Row} from 'antd';
import {addingPlayer} from "../Actions/addingPlayer";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import {store} from "../Reducers/PlayersReducers";
import {addingPlayerAction, removePlayer} from "../Actions/addingPlayer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const { Meta } = Card;
let x="https://avatars.dicebear.com/v2/male/"+Math.floor(Math.random() * 5)+".svg"

class PlayerCard extends Component{


  render(){
    return(
      <Row>
      <Card
    hoverable
    style={{width:300,color:"blue"}}
    cover={<img alt="example" src={x} />}
  >
    <Meta
      title={this.props.player? this.props.player.name: "no"}
      description={this.props.player? this.props.player.age: "no"}
    />
  </Card>
  </Row>
    )
  }
}


export default PlayerCard
