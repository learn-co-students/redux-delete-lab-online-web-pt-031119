import React, { Component } from 'react';
import BandInput from './BandInput';
import Bands from './Bands';
import Band from './Band'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => {return this.props.bands.map(band => <Band key={band.id} deleteBand={this.props.deleteBand} band={band} addBand={this.props.addBand} />)}



  render() {
      const { addBand } = this.props

    return (
      <div>
        <BandInput addBand={addBand} />


        {this.renderBands()}

      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: name => dispatch({ type: "DELETE_BAND", name})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
