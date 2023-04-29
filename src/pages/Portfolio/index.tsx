import { Box } from '@mui/material';
import { COPYRIGHT } from '../../common/constants';
import Title from '../../components/Title';

export default function Portfolio() {
  return (
    <Box>
      <Title text="Portfolio" subTitle={COPYRIGHT} />
    </Box>
  );
}
