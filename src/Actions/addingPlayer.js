export
const ADD="ADD";
const REMOVE="REMOVE";


const addingPlayer=(player)=>({
  type:ADD,
  player:player
})

const removePlayer=(player)=>({
  type:REMOVE,
  playerName:player
})
const testAction=()=>({
  type:"TEST",
  test:"w"
})
export {removePlayer,addingPlayer,testAction}
