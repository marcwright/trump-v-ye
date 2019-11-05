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
      kanyeGifsArray: [],
      gifUrl: '',
      eraseDelay: 4000
    }
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

    this.setState({
      trumpGifsArray: trumpGif.data.data,
      kanyeGifsArray: kanyeGif.data.data
    })
  }

  handleClick(e) {
    console.log(e.target.alt)
    let updateStateObject = {
      userClick: e.target.alt,
      showDiv: true,
      eraseDelay: 0,
      randomQuote: ''
    }
    let randomNum = Math.floor(Math.random() * 25)


    if (e.target.alt === 'trump') {
      updateStateObject.gifUrl = this.state.trumpGifsArray[randomNum].images.downsized.url
    } else {
      updateStateObject.gifUrl = this.state.kanyeGifsArray[randomNum].images.downsized.url
    }
    this.setState(updateStateObject)

    setTimeout(this.startGame, 3000)
  }

  async getTrumpQuote() {
    let response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/random/quote')
    this.setState({
      randomQuote: response.data.value,
      choice: 'trump'
    })
  }

  render() {
    // console.log(this.state.trumpGifsArray)
    return (
      <div className="App">
        <Quote
          quote={this.state.randomQuote}
          eraseDelay={this.state.eraseDelay}
        />
        <Buttons onClick={(e) => this.handleClick(e)} />
        <Result
          choice={this.state.choice}
          userClick={this.state.userClick}
          showDiv={this.state.showDiv}
          gifUrl={this.state.gifUrl}
        />
      </div>
    );
  }
}
