import React from 'react';

const Band = props => { 

  return ( 
    <div>
    <ul>
      <li>{props.band.bandName}</li>
      <button onClick={() => props.delete(props.band.id)}>Delete</button>
      </ul>
    </div>
  )

};

export default Band;
