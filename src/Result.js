import React from 'react';

const Result = props => {
  let result = props.choice === props.userClick ?
    <h1>{props.choice} wins!</h1> :
    <h1>You lose, it was {props.choice}</h1>

  let hideResultDiv = props.showDiv ? "resultDiv" : "hideResultDiv"

  return (
    <div className={hideResultDiv}>
      {result}
      <img src={props.gifUrl} alt="" />
    </div>
  )
}

export default Result