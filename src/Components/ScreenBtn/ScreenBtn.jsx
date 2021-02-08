import React from "react";

class ScreenBtn extends React.Component {
  render() {
    const { startGame, children } = this.props;
    return (
      <div>
        <button className="wandBtn" onClick={startGame}>
          <div className="spell"></div>
        </button>
      </div>
    );
  }
}

export default ScreenBtn;
