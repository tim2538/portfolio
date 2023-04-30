import { Container } from '@mui/material';
import { COPYRIGHT } from '../../common/constants';
import AnimatedBox from '../../components/AnimatedBox';
import Title from '../../components/Title';

export default function Design() {
  return (
    <Container>
      <AnimatedBox>
        <Title text="Design" subTitle={COPYRIGHT} />
      </AnimatedBox>
    </Container>
  );
}
