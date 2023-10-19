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
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

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
    const { handleFeedback, countTotalFeedback } = this;

    return (
      <div>
        <h3>Please,leave your feedback</h3>
        <div>
          <button
            type="button"
            onClick={() => {
              handleFeedback('good');
            }}
          >
            Good
          </button>
          <button
            type="button"
            onClick={() => {
              handleFeedback('neutral');
            }}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={() => {
              handleFeedback('bad');
            }}
          >
            Bad
          </button>
        </div>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <p>There is no feedback yet!</p>
        )}
      </div>
    );
  }
}

export default App;
