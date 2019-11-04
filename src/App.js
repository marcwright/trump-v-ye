import React from 'react';
import './App.css';
import axios from 'axios';
import kanyeQuotes from './kanyeQuotes';

class App extends React.Component {
  state = {
    randomQuote: '',
    choice: null
  }

  randomQuote() {
    let randomNum = Math.floor(Math.random() * 10)
    return randomNum < 5 ? true : false
  }

  async getTrumpQuote() {
    let trumpQuoteUrl = 'https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/random/quote'
    let response = await axios({ url: trumpQuoteUrl, method: 'GET' })
    this.setState({
      randomQuote: response.data.value,
      choice: 'trump'
    })
  }

  componentDidMount() {
    if (this.randomQuote()) {
      return this.getTrumpQuote()
    } else {
      return this.setState({
        randomQuote: kanyeQuotes[Math.floor(Math.random() * 63)],
        choice: 'kanye'
      })
    }

  }

  render() {
    console.log(this.state)
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
