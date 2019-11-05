import React from 'react';

const Buttons = props => {
  let hideResultDiv = !props.showDiv ? "resultDiv" : "hideResultDiv"

  return (
    <div className={hideResultDiv}>
      <img src="trump.png" alt="trump" onClick={props.onClick} className='button' />
      <img src="ye.png" alt="kanye" onClick={props.onClick} className='button' />
    </div>
  )
}

export default Buttons