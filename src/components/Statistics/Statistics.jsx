import React from 'react';
import { StatisticsBox, StatisticsTitle } from './Statistics.styles';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsBox>
      <StatisticsTitle>Good: {good}</StatisticsTitle>
      <StatisticsTitle>Neutral: {neutral}</StatisticsTitle>
      <StatisticsTitle>Bad: {bad}</StatisticsTitle>
      <StatisticsTitle>Total: {total}</StatisticsTitle>
      <StatisticsTitle>Positive feedback: {positivePercentage}</StatisticsTitle>
    </StatisticsBox>
  );
};

export default Statistics;
