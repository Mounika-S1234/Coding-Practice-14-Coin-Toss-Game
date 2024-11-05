// Write your code here
import React, { Component } from 'react';
import './index.css';

class CoinToss extends Component {
  state = {
    result: 'heads',
    total: 0,
    heads: 0,
    tails: 0,
  };

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2);
    if (tossResult === 0) {
      this.setState(prevState => ({
        result: 'heads',
        heads: prevState.heads + 1,
        total: prevState.total + 1,
      }));
    } else {
      this.setState(prevState => ({
        result: 'tails',
        tails: prevState.tails + 1,
        total: prevState.total + 1,
      }));
    }
  };

  render() {
    const { result, total, heads, tails } = this.state;
    const imageUrl =
      result === 'heads'
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png';

    return (
      <div className="coin-toss-container">
        <h1 className="heading">Coin Toss Game</h1>
        <p className="description">Heads (or) Tails</p>
        <img src={imageUrl} alt="toss result" className="toss-result-image" />
        <button type="button" className="toss-button" onClick={this.tossCoin}>
          Toss Coin
        </button>
        <div className="result-container">
          <p className="result">Total: {total}</p>
          <p className="result">Heads: {heads}</p>
          <p className="result">Tails: {tails}</p>
        </div>
      </div>
    );
  }
}

export default CoinToss;
