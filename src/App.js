import React from 'react';
import './App.css';
import axios from 'axios';
import kanyeQuotes from './kanyeQuotes';
import Quote from './Quote';
import Buttons from './Buttons';
import Result from './Result';
import { trumpGiphyUrl, kanyeGiphyUrl, trumpQuoteUrl } from './urls'

export default class App extends React.Component {
  state = {
    randomQuote: '',
    answer: null,
    userChoice: '',
    showDiv: false,
    trumpGifsArray: [],
    kanyeGifsArray: [],
    gifUrl: '',
    eraseDelay: 4000
  }

  componentDidMount() {
    this.getGiphys()
    this.startGame()
  }

  startGame = () => {
    this.setState({
      showDiv: false,
      gifUrl: '',
      randomQuote: ''
    })

    Math.random() <= 0.5 ?
      this.getTrumpQuote() :
      this.setState({
        randomQuote: kanyeQuotes[Math.floor(Math.random() * 63)],
        answer: 'kanye'
      })
  }

  async getGiphys() {
    let trumpGif = await axios.get(trumpGiphyUrl)
    let kanyeGif = await axios.get(kanyeGiphyUrl)

    this.setState({
      trumpGifsArray: trumpGif.data.data,
      kanyeGifsArray: kanyeGif.data.data
    })
  }

  handleClick = (e) => {
    let updateStateObject = {
      userChoice: e.target.alt,
      showDiv: true,
      randomQuote: ''
    }
    let randomNum = Math.floor(Math.random() * 25)

    updateStateObject.gifUrl = (e.target.alt === 'trump') ?
      this.state.trumpGifsArray[randomNum].images.downsized.url :
      this.state.kanyeGifsArray[randomNum].images.downsized.url

    this.setState(updateStateObject)

    setTimeout(this.startGame, 3000)
  }

  async getTrumpQuote() {
    let trumpQuote = await axios.get(trumpQuoteUrl)

    this.setState({
      randomQuote: trumpQuote.data.value,
      answer: 'trump'
    })
  }

  render() {
    return (
      <div className="App">
        <Quote quote={this.state.randomQuote} />
        <Buttons
          onClick={(e) => this.handleClick(e)}
          showDiv={this.state.showDiv}
        />
        <Result
          answer={this.state.answer}
          userChoice={this.state.userChoice}
          showDiv={this.state.showDiv}
          gifUrl={this.state.gifUrl}
        />
      </div>
    );
  }
}
