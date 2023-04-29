import { Container } from '@mui/material';
import AnimatedBox from '../../components/AnimatedBox';
import Title from '../../components/Title';

export default function About() {
  return (
    <Container>
      <AnimatedBox>
        <Title text="About" />
      </AnimatedBox>
    </Container>
  );
}
