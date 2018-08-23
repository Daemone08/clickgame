import React, { Component } from 'react';
import Wrapper from './components/Wrapper'
import Image from './components/Image'
import pics from "./pics.json";

class App extends Component {

  // DEFINE STATEFUL VARIABLES AND METHODS HERE
  // DEFINE STATEFUL VARIABLES AND METHODS HERE
  // DEFINE STATEFUL VARIABLES AND METHODS HERE
  // DEFINE STATEFUL VARIABLES AND METHODS HERE

  // STATEFUL VARIABLES
  state = {
    // use json
    pics,

    // create an array to map click images
    picArray: [],

    // create a score counter
    score: 0,

    // create a high score counter
    highScore: 0,

    // create a guess display
    guess: "Click to test your memory!"

  };

  // STATEFUL METHODS ( change to arrow functions)
  shufflePics = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({
      pics: array
    })
    console.log(this.state.pics)
  }

  checkPic = id => {
    if (this.state.picArray.includes(id)) {
      return this.resetGame()
    }
    this.toArray(id)
  }

  toArray = id => {
    this.setState(
      { picArray: [id, ...this.state.picArray],
        score: this.state.score + 1,
        guess: "Correct!"
      })
    this.shufflePics(this.state.pics)
  }

  resetGame = () => {
    this.shufflePics(this.state.pics)
    if (this.state.score > this.state.highScore) {
    this.setState(
      { picArray: [],
        score: 0,
        highScore: this.state.score,
        guess: "Incorrect!"
      })
    }
    else {
      this.setState(
        { picArray: [],
          score: 0,
          guess: "Incorrect..."
        })
    }
  }

  render() {
    return (
      // container
      <div className="container">
        <div className="row">
          <div className="col-xs-4">
            <h2>Score: {this.state.score}</h2>
          </div>
          <div className="col-xs-4">
            <h3>{this.state.guess}</h3>
          </div>
          <div className="col-xs-4">
            <h2>High Score: {this.state.highScore}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <Wrapper>
              {this.state.pics.map(pic => (
                <Image
                  id={pic.id}
                  key={pic.id}
                  src={pic.image}
                  onClick={() => this.checkPic(pic.id)}
                />
              ))}
            </Wrapper>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
              <h2>Try to score 16!!!</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
