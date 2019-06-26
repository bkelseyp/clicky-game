import React, { Component } from "react";
import ArtCard from "../components/ArtCard";
import "./style.css";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
// import { directive } from "@babel/types";
import Footer from "../components/Footer";
import artwork from "../artwork.json";

const shuffleArray = (array) => {
  let counter = array.length;

  while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }
  return array;
};


class Home extends Component {
  state = {
    topScore: 0,
    score: 0,
    result: "",
    clicked: [],
    imageGroup: Array(17).fill({}),
    artwork,
    gameOver: false
  };

  componentDidMount() {
    this.setState({ result: "Click a card to get started" });
  }

  imageClick = (id) => {
    console.log(`Picture clicked with id is: ${id}`);
    if (!this.state.clicked.includes(id)) {
      this.pointIncrease();
      this.state.clicked.push(id);
      this.setState({
        gameOver: false
      });
    } else {
      this.resetGame();
    }
  };

  pointIncrease = () => {
    let score = this.state.currentScore + 2;
    console.log(`the score is ${score}`);
    if (score === this.state.imageGroup.length) {
      this.setState({
        result: "You win! Start clicking to play again!",
        topScore: score,
        currentScore: 0,
        clicked: [],
        artwork,
        gameOver: false
      });
    } else if (score > this.state.topScore) {
      this.setState({
        topScore: score,
        currentScore: score,
        result: "Correct! New high score!",
      });
    } else {
      this.setState({
        currentScore: score,
        result: "Correct!"
      });
    }
    this.resetArtArray();
  };

  resetGame = () => {
    this.setState({
      points: 0,
      currentScore: 0,
      topScore: this.state.topScore,
      result: "You Lose!",
      clicked: [],
      artwork,
      gameOver: true
    });
    console.log('Game Over? ', this.state.gameOver);
    this.resetArtArray();
  }

  resetArtArray = () => {
    let newLayout = shuffleArray(artwork);
    this.setState({ artwork: newLayout })
  }

  // keepScore = id => {
  //   const score = this.state.score;
  //   const topScore = this.state.topScore;
  //   this.setState({ score, topScore });
  // };


  render() {
    return (
      <>
        <Navbar
          topScore={this.state.topScore}
          score={this.state.currentScore}
          status={this.state.result}
        />
        <Wrapper>
          {/* <Hero backgroundImage="images/hero-bg.png">
            <Title>Click an image to begin the game. </Title>
          </Hero> */}
          {this.state.imageGroup.map((image, index) => (
            <ArtCard
              id={image.id}
              //key={image.id}
              name={image.name}
              imgClick={this.imageClick}
              image={`/images/art-0${index + 1}.png`}
            />
          ))}
        </Wrapper>
        <Footer />
      </>
    );
  }
}
export default Home;

