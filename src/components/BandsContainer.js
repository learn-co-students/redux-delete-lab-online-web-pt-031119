import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.bands)}
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const addBand = band => {
  return {
    type: "ADD_BAND",
    name: band
  }
}

const deleteBand = id => {
  return {
    type: "DELETE_BAND",
    id: id
  }
}

export default connect(mapStateToProps, {addBand, deleteBand})(BandsContainer)
