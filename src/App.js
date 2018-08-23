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
    guess: "click to test your memory!"

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
        guess: "correctly!"
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
        guess: "incorrectly!"
      })
    }
    else {
      this.setState(
        { picArray: [],
          score: 0,
          guess: "incorrectly"
        })
    }
  }

  render() {
    return (
      // container
      <div className="container">
        <div className="row">
          <div className="col-4">
            score: {this.state.score}
          </div>
          <div className="col-4">
            You guessed: {this.state.guess}
          </div>
          <div className="col-4">
            High Score: {this.state.highScore}
          </div>
        </div>
        <div className="row">
          <div className="col">
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
          <div className="col">
              test
          </div>
        </div>
      </div>
    );
  }
}

export default App;
