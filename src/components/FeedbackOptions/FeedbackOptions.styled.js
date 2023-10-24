import styled from 'styled-components';

const getButtonColor = props => {
  switch (props.children) {
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

export const ButtonBox = styled.div`
justify-content: space-around;
  display: flex;
  gap: 30px;
`;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  text-transform: uppercase;
  color: cornsilk;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  width: 100px;
  transition: all 0.4s;
  border: 1px solid ${getButtonColor};

  background-color: ${getButtonColor};

  &:hover {
    background-color: cornsilk;
    border: 1px solid ${getButtonColor};
    color: ${getButtonColor};
  }
`;
