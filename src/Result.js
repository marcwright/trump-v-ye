import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    let choice = this.props.choice

    let result = choice === this.props.userClick ?
      <h1>{choice} wins!</h1> :
      <h1>You lose, it was {choice}</h1>

    let hideResultDiv = this.props.showDiv ? "resultDiv" : "hideResultDiv"

    return (
      <div className={hideResultDiv}>
        {result}
        <img src={this.props.gifUrl} />
      </div>
    )
  }
}

export default Result