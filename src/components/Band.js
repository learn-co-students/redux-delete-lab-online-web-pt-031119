import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li className="band">
        <span>{this.props.name}</span>
        <button 
          onClick={() => this.props.deleteBand(this.props.id)}>
            DELETE
        </button>
      </li>
    );
  }
};

export default Band;
