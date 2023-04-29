import { Container } from '@mui/material';
import { COPYRIGHT } from '../../common/constants';
import AnimatedBox from '../../components/AnimatedBox';
import Title from '../../components/Title';

export default function Album() {
  return (
    <Container>
      <AnimatedBox>
        <Title text="Album" subTitle={COPYRIGHT} />
      </AnimatedBox>
    </Container>
  );
}
