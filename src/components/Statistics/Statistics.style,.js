import styled from 'styled-components';

const getTitleColor = props => {
  switch (props.stat) {
    case 'good':
      return 'darkseagreen';
    case 'neutral':
      return 'darkgray';
    case 'bad':
      return 'coral';
    default:
      return null;
  }
};

const getStatWidth = props => {
  switch (props.stat) {
    case 'good':
      return '30%';
    case 'neutral':
      return '30%';
    case 'bad':
      return '30%';
    default:
      return '100%';
  }
};

export const StatsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

export const StatInfo = styled.span`
  width: ${getStatWidth};
  color: ${getTitleColor};
  text-align: center;
`;
