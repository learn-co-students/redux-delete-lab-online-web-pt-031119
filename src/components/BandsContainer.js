import React, { Component } from 'react';
import BandInput from './BandInput';
import Bands from './Bands';
import Band from './Band'
import { connect } from 'react-redux'

class BandsContainer extends Component {


  render() {

      const renderBands = () => {return this.props.bands.map((band, id) => <Band key={band.id} deleteBand={this.props.deleteBand} band={band} addBand={this.props.addBand} />)}

      const { addBand, deleteBand } = this.props

    return (
      <div>
        <BandInput addBand={addBand} deleteBand={deleteBand} />


        {renderBands()}

      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({ type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
