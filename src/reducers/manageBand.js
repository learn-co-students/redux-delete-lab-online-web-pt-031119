import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {

    case 'ADD_BAND':
    console.log("add", action)


    const band = {
      name: action.name,
      id: uuid()

    }

    return {bands: state.bands.concat(band)}

      // return {
      //   ...state, bands: [
      //     ...state.bands, action.band
      //   ]
      // }



    case 'DELETE_BAND':
      console.log("delete", action)
        return {bands: state.bands.filter(band => band.id !== action.id)}


    default:
      return state;
  }
};
