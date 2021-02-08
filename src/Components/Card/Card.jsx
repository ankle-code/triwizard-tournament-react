import React from "react";
import "../Card/style.css";

class Card extends React.Component {
  render() {
    const { name, house, image, age } = this.props;
    return (
      <div className="Card">
        <img src={image} className="Card__Image" alt={`foto do ${name}`} />
        <h1 className="Card__Title">{name}</h1>
        <p className="Card__Text">
          House: <b>{house}</b>
        </p>
        <p className="Car__Text">{age && `${age} Years`}</p>
      </div>
    );
  }
}

export default Card;
