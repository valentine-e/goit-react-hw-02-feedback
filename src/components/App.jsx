import React from 'react';
import Statistics from './Statistics/Statistics';

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//     </div>
//   );
// };

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => {
      if (option) {
        return {
          [option]: prevState[option] + 1,
        };
      }
    });
  };

  // handleGoodFeedback = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };

  // handleNeutralFeedback = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };

  // handleBadFeedback = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positiveFeedbacks = Math.round((this.state.good * 100) / total);
    if (this.state.good) {
      return positiveFeedbacks + '%';
    } else {
      return '0';
    }
  };

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <div>
        <h3>Please,leave your feedback</h3>
        {/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}
        <div>
          <button type="button" onClick={this.handleFeedback()}>
            Good
          </button>
          <button type="button" onClick={this.handleFeedback()}>
            Neutral
          </button>
          <button type="button" onClick={this.handleFeedback()}>
            Bad
          </button>
        </div>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default App;
