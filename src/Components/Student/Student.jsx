import React from "react";

class Student extends React.Component {
  state = {
    students: [],
    drawnStudent: [],
  };

  componentDidMount = () => {
    const drawnHouses = [];

    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          students: [...data]
            .sort(() => 0.5 - Math.random())
            .filter((student) => {
              if (drawnHouses.includes(student.house)) {
                return "a";
              }
              drawnHouses.push(student.house);
              console.log(drawnHouses);
            }),
        })
      );
  };

  render() {
    const { students, studentsByHouse } = this.state;
    return (
      <div>
        {students.map((student) => (
          <p>
            {student.name} -- <b>{student.house}</b>
          </p>
        ))}
      </div>
    );
  }
}

export default Student;
