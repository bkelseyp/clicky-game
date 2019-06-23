import React, { Component } from "react";
import ArtCard from "../components/ArtCard";
import "./style.css";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import { directive } from "@babel/types";
import Footer from "../components/Footer";


class Home extends Component {
  state = {
    topScore: 0,
    score: 0,
    result: "",
    clicked: [],
    imageGroup: Array(17).fill({}),

    gameOver: false
  };

  componentDidMount() {
    this.setState({ result: "Click a card to get started" });
  }

  imageClick = (id) => {
    console.log(`Picture clicked with id: ${id}`);
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
    let score = this.state.currentScore + 1;
    console.log(`the score is ${score}`);
    if (score === this.state.imageGroup.length) {
      this.setState({
        result: "You win! Start clicking to play again!",
        topScore: score,
        currentScore: 0,
        clicked: [],

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

      gameOver: true
    });
    console.log('Game Over? ', this.state.gameOver);
    this.resetArtArray();
  }

  // resetVegArray = () => {
  //   let newScramble = shuffleArray(vegetables);
  //   this.setState({ vegetables: newScramble })
  // }

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
              key={image.id}
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

