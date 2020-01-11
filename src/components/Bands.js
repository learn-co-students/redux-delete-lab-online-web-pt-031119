import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
    
 showBands = () => {
   return <ul> {this.props.bands.map(band => {
        return  <Band band={band} delete={this.props.deleteBand}/>
    })} </ul>
 }

  render() {
    return(
      <div>
        {this.showBands()}
      </div>
    );
  }
};

export default Bands;
