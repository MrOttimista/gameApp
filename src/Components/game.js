import React, { Component } from 'react';
import { Button } from 'antd';

const board=[[],[],[],[],[],[]];
const list=[[],[],[],[],[],[]];

class Game extends Component{
  constructor(props) {
    super(props);
    this.state = {board:[]};
  }

componentDidMount(){
  for (let i = 0; i < list.length  ; i++) {
    for(let j=0;j<10;j++){
      let z=Math.floor(Math.random() * 5);
      z!=3? board[i].push(1):board[i].push(0);
  }}

  for(let i=0;i<board.length;i++){
    for(let j=0;j<10;j++){
      let c=0;
      if(board[i][j+1]==0){c+=1}
      if(board[i][j-1]==0){c+=1}
      if(i>0){
        board[i-1][j]==0? c=c+1:c=c;
        j>0? board[i-1][j-1]==0?c=c+1:c=c:c=c;
        j<10? board[i-1][j+1]==0?c=c+1:c=c:c=c
      }
      if(i<board.length-1){
        board[i+1][j]==0? c=c+1:c=c;
        j>0? board[i+1][j-1]==0?c=c+1:c=c:c=c;
        j<9? board[i+1][j+1]==0?c=c+1:c=c:c=c
      }

      if (board[i][j]==0){list[i][j]="x"}
      else{list[i][j]=c}
  }

  }
  for (let i = 0; i < list.length  ; i++) {
    for(let j=0;j<10;j++){
      board[i][j]=(<Button onClick={this.handleClick1} style={{width:"60px",height:"50px",color:"white"}} key="{list[i][j]}" value={list[i][j]}>{list[i][j]}</Button>)
  }
  this.setState({board})
}
this.handleClick1=this.handleClick1.bind(this);
}

handleClick1(e){ // will be edited'
  console.log(e.nativeEvent.ctrlKey)
  if(e.nativeEvent.ctrlKey==false){
  if(e.target.value=="x"){
    e.target.style.backgroundColor="red";
    setTimeout(function() {
     let r = window.alert("You Lost!");
     if (r == true) {
        window.location.reload();
      } else {
        window.location.reload();
  }
}(1*1000));
  }
  else{
    e.target.style.backgroundColor="Black"
  }
}
else{
    e.target.style.backgroundColor="green";
    if(e.target.value!=="x"){
      e.target.style.backgroundColor="red";
      setTimeout(function() {
       let r = window.alert("You Lost!");
       if (r == true) {
          window.location.reload();
        } else {
          window.location.reload();
    }
  }(1*1000));
    }
}
}


render(){
  return(
    <div>
    <div style={{width:"600px",margin:"100px 100px 600px 100px", border:"10px"}}>
      <div>
      {board}
      </div>
      <h3>press (Ctrl + mouse click) to flag</h3>
    </div>
    </div>
  )
}
}

export default Game;
