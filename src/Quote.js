import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

class Quote extends React.Component {
  constructor(props) {
    super()
    this.state = {
      quote: props.quote,
      text: ''
    }
  }

  render() {
    return (
      <div>
        <h3>
          <ReactTypingEffect
            text={this.props.quote}
            speed={25}
          // eraseDelay={this.props.eraseDelay}
          />
        </h3>
      </div >
    )
  }
}

export default Quote