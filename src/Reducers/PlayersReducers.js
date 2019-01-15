
import { createStore } from 'redux';

 function Player(state=[{name:"Adel",age:12},{name:"Mohamed",age:18}],action){
  switch(action.type){
    case "ADD":
      console.log(action.player)
      return state=[...state,action.player]
    case "REMOVE":
      let x=state;
      x.splice(x.indexOf(action.player),1);
      return x
    case "TEST":
        console.log("Test");
        return state
    default:
      return state
  }
}

 let store=createStore(Player);
 export default store;
