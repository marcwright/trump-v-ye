import React from 'react';
// import ReactTypingEffect from 'react-typing-effect';
import Typed from 'typed.js';

class Quote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: props.quote,
      text: ''
    }
  }


  // componentWillUnmount() {
  //   typed.destroy()
  // }

  // componentDidUpdate(props) {

  //   const { quote } = this.props;
  //   if (this.state.quote !== quote) {
  //     const options = {
  //       strings: [this.props.quote],
  //       typeSpeed: 25,
  //       backSpeed: 50,
  //       startDelay: 1000,
  //       fadeOut: true
  //     };
  //     // const typed = new Typed(this.el, options)
  //     // let typed = null
  //     // typed = new Typed(this.el, options)
  //     // typed.reset()
  //     return this.buildTyped(options)
  //   }
  // }

  // buildTyped(options) {
  //   // typed = {}

  //   // console.log(this.state.quote)
  //   // const options = {
  //   //   strings: [this.props.quote],
  //   //   typeSpeed: 25,
  //   //   backSpeed: 50,
  //   //   startDelay: 1000,
  //   //   fadeOut: true
  //   // };
  //   this.typed = new Typed(this.el, options)

  //   typed.reset()

  //   // this.forceUpdate();

  // }

  render() {
    return (
      <div className='quoteDiv'>
        {/* <span
          style={{ whiteSpace: 'pre' }}
          ref={(el) => { this.el = el; }}
        /> */}
        <h3>
          {this.props.quote}
          {/* <ReactTypingEffect
            text={this.props.quote}
            speed={25}
          // eraseDelay={this.props.eraseDelay}
          /> */}
        </h3>
      </div >
    )
  }
}

export default Quote