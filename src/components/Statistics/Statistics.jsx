import React from 'react';
import { StatsBox, StatInfo } from './Statistics.style,';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatsBox>
      <StatInfo stat="good">Good: {good}</StatInfo>
      <StatInfo stat="neutral">Neutral: {neutral}</StatInfo>
      <StatInfo stat="bad">Bad: {bad}</StatInfo>
      <StatInfo stat="total">Total: {total}</StatInfo>
      <StatInfo stat="positive">
        Positive feedback: {positivePercentage}
      </StatInfo>
    </StatsBox>
  );
};

export default Statistics;
