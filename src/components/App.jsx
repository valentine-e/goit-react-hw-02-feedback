import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import { PageBox } from './App.styled';

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
    const {
      handleFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    return (
      <PageBox>
        <Section title="Please,leave your feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback yet" />
          )}
        </Section>
      </PageBox>
    );
  }
}

export default App;
