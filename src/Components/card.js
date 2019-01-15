import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Button, Radio, Icon,Input,Card } from 'antd';
import {addingPlayer} from "../Actions/addingPlayer";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import {store} from "../Reducers/PlayersReducers";
import {addingPlayerAction, removePlayer} from "../Actions/addingPlayer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const { Meta } = Card;

class PlayerCard extends Component{


  render(){
    return(
      <Card
    hoverable
    style={{width:300 , marginLeft:270,color:"blue"}}
    cover={<img alt="example" src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/3/34/92f1345a31e8f70f9569c2d7fc8ee7d3.png/revision/latest?cb=20170618014458" />}
  >
    <Meta
      title={this.props.player? this.props.player.name: "no"}
      description={this.props.player? this.props.player.age: "no"}
    />
  </Card>
    )
  }
}


export default PlayerCard
