import React, { Component } from 'react';

class Band extends Component {

  handleOnClick(event) {
    this.props.deleteBand(this.props.band.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.band.name}</li>
        <button onClick={event => this.handleOnClick(event)}>DELETE</button>
      </div>
    );
  }
};

export default Band
