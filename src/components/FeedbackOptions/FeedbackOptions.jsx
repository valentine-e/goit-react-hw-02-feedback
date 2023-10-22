import { Button, ButtonBox } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonBox>
      {options.map(option => {
        return (
          <Button
            key={option}
            onClick={() => onLeaveFeedback(option)}
            type="button"
          >
            {option}
          </Button>
        );
      })}
    </ButtonBox>
  );
};

export default FeedbackOptions;
