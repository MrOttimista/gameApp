import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PlayerApp from './Components/main';
import MainApp from './Components/MainApp';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./Reducers/PlayersReducers";

ReactDOM.render(<Provider store={store}><MainApp /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
