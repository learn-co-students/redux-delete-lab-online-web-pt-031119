import React from 'react'

import Band from './Band'

const Bands = ({bands, deleteBand}) => {
    return(
        <ul className="bands-list">
            {bands.map(band => <Band key={band.id} {...band} deleteBand={deleteBand} />)}
        </ul>
    )
}

export default Bands