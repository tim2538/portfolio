import { Container } from '@mui/material';
import { COPYRIGHT } from '../../common/constants';
import AnimatedBox from '../../components/AnimatedBox';
import Title from '../../components/Title';

export default function Book() {
  return (
    <Container>
      <AnimatedBox>
        <Title text="Book" subTitle={COPYRIGHT} />
      </AnimatedBox>
    </Container>
  );
}
