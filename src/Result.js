import React from 'react';
// import './App.css';

class Result extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    console.log(this.props);

    let result = this.props.choice === this.props.userClick ?
      <h1>{this.props.choice} wins!</h1> :
      <h1>You lose, it was {this.props.choice}</h1>

    let hideResultDiv = this.props.showDiv ? "resultDiv" : "hideResultDiv"

    return (
      <div className={hideResultDiv}>
        {result}
      </div>
    )
  }
}

export default Result