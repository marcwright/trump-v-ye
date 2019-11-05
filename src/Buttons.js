import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.props.onClick} value='trump'>Trump</button>
        <button onClick={this.props.onClick} value='kanye'>Kanye</button> */}
        <img src="trump.png" alt="trump" onClick={this.props.onClick} className='button' />
        <img src="ye.png" alt="kanye" onClick={this.props.onClick} />
      </div>
    )
  }
}

export default Buttons