import React from 'react';

const Band = (props) => {

  // onHandleSubmit = event => {
  //   event.preventDefault();
  //   const band = this.state
  //   this.props.addBand(band)
  //   this.setState({
  //     bandName: ''
  //   })
  // }

  // handleChange = event => {
  //   this.setState({
  //     name: event.target.value
  //   })
  // }

    return(
      <div>
        Band Component
        <form onSubmit={(event) => this.onHandleSubmit(event)}>
          <div>

            {console.log("props in Band", props)}
            <button onClick={()=> props.band.deleteBand(props.band.id)}>DELETE</button>
          </div>


        </form>

      </div>
    );

};

export default Band;
