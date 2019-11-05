import React from 'react';

const Result = props => {
  let result = props.answer === props.userChoice ?
    <h1>{props.answer} wins!</h1> :
    <h1>You lose, it was {props.answer}</h1>

  let hideResultDiv = props.showDiv ? "resultDiv" : "hideResultDiv"

  return (
    <div className={hideResultDiv}>
      <div className={"resultFlash"}>{result}</div>
      <img src={props.gifUrl} alt="" style={{ height: "300px", width: "300px" }} className='resultImg' />
    </div>
  )
}

export default Result