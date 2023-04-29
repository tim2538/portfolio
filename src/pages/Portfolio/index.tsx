import { Container } from '@mui/material';
import { COPYRIGHT } from '../../common/constants';
import AnimatedBox from '../../components/AnimatedBox';
import Title from '../../components/Title';

export default function Portfolio() {
  return (
    <Container>
      <AnimatedBox>
        <Title text="Portfolio" subTitle={COPYRIGHT} />
      </AnimatedBox>
    </Container>
  );
}
