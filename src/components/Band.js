import React from 'react';

const Band = (props) => {


    return(
      <div>
        Band Component
        <form onSubmit={(event) => this.onHandleSubmit(event)}>
          <div>
            <li>{props.band.name}</li>
            {console.log("props in Band", props)}
            <button onClick={()=> props.deleteBand(props.band.id)}>DELETE</button>
          </div>
        </form>

      </div>
    );

};

export default Band;
