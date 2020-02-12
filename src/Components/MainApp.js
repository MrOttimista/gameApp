import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Button, Radio, Icon,Input ,Layout,Menu,Breadcrumb } from 'antd';
import {addingPlayer} from "../Actions/addingPlayer";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import {store} from "../Reducers/PlayersReducers";
import {addingPlayerAction, removePlayer} from "../Actions/addingPlayer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PlayerApp from "./main";
import PlayerCard from "./card";
import 'antd/dist/antd.css';
import servey from "./servey";
import AddPlayer from "./addPlayer";
import Game from "./game";

const { Header, Content} = Layout;
const { SubMenu } = Menu;

class MainApp extends Component {

componentDidMount(){

}

render(){
  return(
    <Router>
    <Layout className="layout">

    <Header>
       <div className="logo" />
       <Menu
         theme="dark"
         mode="horizontal"
         defaultSelectedKeys={['1']}
         style={{ lineHeight: '64px' }}
       >
         <Menu.Item key="1"><Link to="/Players">Players</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/AddPlayer">Add Player</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/Servey">Servey</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/Game">Game</Link></Menu.Item>
       </Menu>
     </Header>
<Content style={{ padding: '0 50px',height:"100%",float:"auto",width:"100%"}}>


     <Route exact path="/" />
     <Route exact path="/AddPlayer/" component={AddPlayer} />
     <Route exact path="/Players/" component={PlayerApp} />
     <Route exact path="/Servey/" component={servey}/>
     <Route exact path="/Game/" component={Game}/>

</Content>
 </Layout>
 </Router>

  )
}

}



export default MainApp
