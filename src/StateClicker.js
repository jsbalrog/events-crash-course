import React, { Component } from 'react';

class StateClicker extends Component {
  state = {
    randNum: 1,
    win: false,
  };

  handleClick = (e) => {
    let rand = Math.floor(Math.random() * Math.floor(11));
    this.setState({ randNum: rand});
    if(rand === 7) {
      this.setState({ win: true });
    }
  };

  render() {
    let button = <button onClick={this.handleClick}>Click Me!</button>;
    let winMsg = <div>YOU WIN!</div>
    return (

      <div>
        <h3>Number is {this.state.randNum}</h3>
        {this.state.win ? winMsg : button}
      </div>
    );
  }
}

export default StateClicker;
