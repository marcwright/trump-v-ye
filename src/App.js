import React from 'react';
import './App.css';
import axios from 'axios';
import kanyeQuotes from './kanyeQuotes';
import Quote from './Quote';
import Buttons from './Buttons';
import Result from './Result';

export default class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      randomQuote: '',
      choice: null,
      userClick: '',
      showDiv: false
    }
    this.myRef = React.createRef();
    this.startGame = this.startGame.bind(this)
  }

  startGame() {
    let randomNum = Math.floor(Math.random() * 10)
    let startGameBoolean = randomNum < 5 ? true : false

    if (startGameBoolean) {
      this.setState({ showDiv: false })
      this.getTrumpQuote()
    } else {
      this.setState({
        randomQuote: kanyeQuotes[Math.floor(Math.random() * 63)],
        choice: 'kanye',
        showDiv: false
      })
    }
  }

  handleClick(e) {
    console.log(e.target.value)
    this.setState({
      userClick: e.target.value,
      showDiv: true
    })

    setTimeout(this.startGame, 2000)
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
    this.startGame()
  }

  resultComp() {
    if (this.state.userClick) {
      return <Result
        choice={this.state.choice}
        userClick={this.state.userClick}
        ref={this.myRef}
      />
    } else {
      return
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Quote quote={this.state.randomQuote} />
        <Buttons onClick={(e) => this.handleClick(e)} />
        {/* {this.resultComp()} */}
        <Result
          choice={this.state.choice}
          userClick={this.state.userClick}
          showDiv={this.state.showDiv}
        />
      </div>
    );
  }
}
