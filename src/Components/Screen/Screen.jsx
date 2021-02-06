import React from "react";

class Screen extends React.Component {
  render() {
    const { startGame } = this.props;
    return (
      <div>
        <h1>Clique para começar</h1>
        <button onClick={startGame}>Clique aqui</button>
      </div>
    );
  }
}

export default Screen;
