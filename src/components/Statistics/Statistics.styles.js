import styled from 'styled-components';

const getInfoColor = props => {
  switch (props.children[0]) {
    case 'Good: ':
      return 'darkseagreen';
    case 'Neutral: ':
      return 'darkgray';
    case 'Bad: ':
      return 'coral';
    default:
      return null;
  }
};

const getInfoWidth = props => {
  switch (props.children[0]) {
    case 'Good: ':
      return '30%';
    case 'Neutral: ':
      return '30%';
    case 'Bad: ':
      return '30%';
    default:
      return '100%';
  }
};

export const StatisticsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const StatisticsTitle = styled.span`
  font-weight: 400;
  text-align: center;
  color: ${getInfoColor};
  width: ${getInfoWidth};
`;
