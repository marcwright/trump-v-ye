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
      showDiv: false,
      trumpGifsArray: [],
      kanyeGifsArray: []
    }
    this.startGame = this.startGame.bind(this)
  }

  componentDidMount() {
    this.startGame()
    this.getGiphys()
  }

  startGame() {
    this.setState({ showDiv: false })
    if (Math.random() < 0.5) {
      this.getTrumpQuote()
    } else {
      this.setState({
        randomQuote: kanyeQuotes[Math.floor(Math.random() * 63)],
        choice: 'kanye'
      })
    }
  }

  async getGiphys() {
    let trumpGif = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=2041494ca782403cb6055682a7943c75&q=trump&limit=25&offset=0&rating=G&lang=en`)
    let kanyeGif = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=2041494ca782403cb6055682a7943c75&q=kanye&limit=25&offset=0&rating=G&lang=en`)
    console.log(trumpGif)

    this.setState({
      trumpGifsArray: trumpGif.data,
      kanyeGifsArray: kanyeGif.data
    })
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
    console.log(this.state.kanyeGifsArray.data)
    return (
      <div className="App">
        <Quote quote={this.state.randomQuote} />
        <Buttons onClick={(e) => this.handleClick(e)} />
        <Result
          choice={this.state.choice}
          userClick={this.state.userClick}
          showDiv={this.state.showDiv}
        />
      </div>
    );
  }
}
