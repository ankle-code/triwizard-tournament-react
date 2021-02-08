import React from "react";
import Card from "../Card/Card";

class Student extends React.Component {
  state = {
    drawnStudents: [],
  };

  componentDidMount = () => {
    const { students } = this.props;
    let drawnHouses = [];
    let countOfDrawn = 0;

    const studentsAlreadyDrawn = students.filter(({ house }) => {
      let isDrawn = false;
      if (!drawnHouses.includes(house) && countOfDrawn < 3) {
        drawnHouses.push(house);
        countOfDrawn = countOfDrawn + 1;
        isDrawn = true;
      }
      return isDrawn;
    });

    this.setState({
      drawnStudents: studentsAlreadyDrawn,
    });
  };

  render() {
    const { drawnStudents } = this.state;
    return (
      <div className="cardContainer">
        {drawnStudents.map((student) => (
          <Card
            name={student.name}
            house={student.house}
            image={student.image}
            age={student.yearOfBirth !== "" && 1994 - student.yearOfBirth}
          />
        ))}
      </div>
    );
  }
}

export default Student;
