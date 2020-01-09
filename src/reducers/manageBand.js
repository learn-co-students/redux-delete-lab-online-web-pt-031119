import uuid from 'uuid'

export default function manageBand(state = {
  bands: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_BAND':

    const band = { 
      id: uuid(),
      bandName: action.bandName
    }

    console.log('adding', action.bandName, 'id#', band.id);

    return { bands: state.bands.concat(band)}

    case 'DELETE_BAND':
      return {bands: state.bands.filter(band => band.id !== action.id)}
   
    default: 
     return state;
  }
}