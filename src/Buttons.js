import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onClick} value='trump'>Trump</button>
        <button onClick={this.props.onClick} value='kanye'>Kanye</button>
      </div>
    )
  }
}

export default Buttons