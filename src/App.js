import React from "react";
import "./App.css";
import Student from "./Components/Student/Student";
import ScreenBtn from "./Components/ScreenBtn/ScreenBtn";
import { moreStudents } from "./helper/moreStudents";

class App extends React.Component {
  state = {
    start: false,
    students: [],
    houses: [],
  };

  componentDidMount = () => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          students: [...data, ...moreStudents].sort(() => 0.5 - Math.random()),
          houses: [...data].map(({ house }) => house),
        })
      );
  };

  startGame = () => {
    const { start } = this.state;
    this.setState({
      start: !start,
    });
  };

  render() {
    const { start, students, houses } = this.state;
    console.log(this.state.students.map((val) => val.name));
    return (
      <div>
        <div className="Sticker"></div>
        <div className="Sticker"></div>
        <div className="Sticker"></div>
        <div className="Sticker"></div>
        <div className="backgroundContainer">
          <div className="fogAnimation"></div>
          <div className="Container">
            {start ? (
              <Student
                students={students}
                houses={houses}
                startGame={this.startGame}
              />
            ) : (
              <>
                <h1 className="screenTitle">Triwizard Tournament</h1>
                <p className="screenText">click on the wand to start</p>
                <ScreenBtn startGame={this.startGame} />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
