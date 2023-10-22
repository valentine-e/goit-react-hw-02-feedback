import styled from 'styled-components';

export const ButtonBox = styled.div`
  display: flex;
  gap: 30px;
  padding: 30px 0;
`;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  text-transform: uppercase;
  color: white;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  width: 100px;
  transition: all 0.4s;
  border: 1px solid
    ${props => {
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
    }};

  background-color: ${props => {
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
  }};

  &:hover {
    background-color: white;
    border: 1px solid
      ${props => {
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
      }};
    color: ${props => {
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
    }};
  }
`;
