import Band from './Band'
import React from 'react'

const Bands = (props) =>{
  const renderBands = props.bands.map(band => <div><Band band={band.name} key={band.id}/><button onClick={() => props.delete(band.id)}>DELETE ME!</button></div>)

  return(
    <div>
      {renderBands}
    </div>
  )

}

export default Bands