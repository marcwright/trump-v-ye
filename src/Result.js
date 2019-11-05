import React from 'react';

const Result = props => {
  let result = props.answer === props.userChoice ?
    <h1>{props.answer} wins!</h1> :
    <h1>You lose, it was {props.answer}</h1>

  let hideResultDiv = props.showDiv ? "resultDiv" : "hideResultDiv"

  return (
    <div className={hideResultDiv}>
      {result}
      <img src={props.gifUrl} alt="" />
    </div>
  )
}

export default Result