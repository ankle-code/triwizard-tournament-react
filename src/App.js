import React from "react";
import "./App.css";
import Student from "./Components/Student/Student";
import Screen from "./Components/Screen/Screen";

class App extends React.Component {
  state = {
    start: false,
  };

  startGame = () => {
    this.setState({
      start: true,
    });
  };

  render() {
    const { start } = this.state;
    return (
      <div>{start ? <Student /> : <Screen startGame={this.startGame} />}</div>
    );
  }
}

export default App;
