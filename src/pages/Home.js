import React, { Component } from "react";
import Hero from "../components/Hero";
import ArtCard from "../components/ArtCard";
import Title from "../components/Title";
import "./style.css";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import { directive } from "@babel/types";


class Home extends Component {
  state = {
    topScore: 1,
    score: 0,
    imageGroup: Array(17).fill({}),
  };

  keepScore = id => {
    const score = this.state.score;
    const topScore = this.state.topScore;
    this.setState({ score, topScore });
  };


  render() {
    return (
      <>
        <Wrapper>
          <Hero backgroundImage="images/hero-bg.png">
            <Title>Click an image to begin the game. </Title>
          </Hero>
          {this.state.imageGroup.map((image, index) => (
            <ArtCard
              id={image.id}
              key={image.id}
              name={image.name}
              image={`/images/art-0${index+1}.png`}
            />
          ))} 
        </Wrapper>
      </>
    );
  }
}
export default Home;



// class App extends Component {
//   // Setting this.state.scores to the friends json array
//   state = {
//     scores
//   };

//   addScore = id => {
//     // Filter this.state.friends for friends with an id not equal to the id being removed
//     const friends = this.state.friends.filter(friend => friend.id !== id);
//     // Set this.state.friends equal to the new friends array
//     this.setState({ friends });
//   };

//   // Map over this.state.friends and render a FriendCard component for each friend object
//   render() {
//     return (
//       <Wrapper>
//         <Title>Friends List</Title>
//         {this.state.friends.map(friend => (
//           <FriendCard
//             removeFriend={this.removeFriend}
//             id={friend.id}
//             key={friend.id}
//             name={friend.name}
//             image={friend.image}
//             occupation={friend.occupation}
//             location={friend.location}
//           />
//         ))}
//       </Wrapper>
//     );
//   }
// }

// export default App;