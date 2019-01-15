import React, { Component } from 'react';
import { connect } from 'react-redux';
import {store} from "../Reducers/PlayersReducers";
import Radar from 'react-d3-radar';


class Chart extends Component{


  render(){
    return(
      <Radar
  width={330}
    height={300}
    padding={50}
    domainMax={10}
    highlighted={null}
    onHover={(point) => {

    }}
    data={{
      variables: [
        {key: 'Service', label: 'Service'},
        {key: 'Product', label: 'Product'},
        {key: 'Place', label: 'Place'},
        {key: 'Company', label: 'Company'},
        {key: 'Website', label: 'Website'}
      ],
      sets: [
        {
          key: 'me',
          label: 'My Scores',
          values: this.props.values,
        }
      ],
    }}
  />


    )
  }
}
export default Chart
