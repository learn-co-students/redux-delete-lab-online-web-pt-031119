import React from 'react'

const Band = props => {
  debugger
    return(      
      <li>
        {console.log(props)}
        <span>{props.band.name}</span><button onClick={() => props.delete(props.band.id)}>DELETE</button>
        {/* <p>{props.band.id}</p> */}
      </li>

      )
};

export default Band;
