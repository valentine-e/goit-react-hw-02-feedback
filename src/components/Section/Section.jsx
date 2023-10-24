import { SectionBox, SectionTitle } from './Section.styles';

const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionBox>
  );
};

export default Section;
