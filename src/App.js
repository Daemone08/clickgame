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

  };

  // STATEFUL METHODS ( change to arrow functions)

  checkPic = id => {
    console.log("id: " + id)
    if (this.state.picArray.includes(id)) {
      this.resetGame()
      return
    }
    this.toArray(id)
  }

  toArray = id => {
    this.setState(
      { picArray: [id, ...this.state.picArray],
        score: this.state.score + 1
      })
    // shufflePics()
  }

  resetGame() {

  }

  // Method for checking against array, adjusting score, mapping click pic to array, adjusting score  and refreshing images
  onClick() {

  }

  render() {
    return (
      // container
      <div className="container">
        <div className="row">
          <div className="col">
            score: {this.state.score}
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
