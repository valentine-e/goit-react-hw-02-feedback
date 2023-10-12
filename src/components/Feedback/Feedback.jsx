import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good, bad, neutral } = this.state;
    const totalFeedback = good + neutral + bad;

    return (
      <div>
        <h3>Please,leave your feedback</h3>
        <div>
          <button type="button" onClick={this.handleGoodFeedback}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutralFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBadFeedback}>
            Bad
          </button>
        </div>

        <div>
          <h4>Statistics</h4>
          <span>Good:{good}</span>
          <span>Neutral:{neutral}</span>
          <span>Bad:{bad}</span>
          <span>Total:{totalFeedback}</span>
        </div>
      </div>
    );
  }
}

export default Feedback;
