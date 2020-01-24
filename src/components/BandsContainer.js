import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands';
import { connect } from 'react-redux'

class BandsContainer extends Component {

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <div>
          <Bands bands={this.props.bands} delete={this.props.deleteBand}/>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = ({ bands }) => ({ bands })

const mapStateToProps = (state) => {
  return{
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: (name,id) => dispatch({ type: "ADD_BAND", name: name, id: id }),
  deleteBand: (id) => dispatch({type: 'DELETE_BAND', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
