import { Box, Container, Typography } from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';
import { COPYRIGHT } from '../../common/constants';
import { ALBUMS } from '../../common/constants/albums';
import AnimatedBox from '../../components/AnimatedBox';
import Title from '../../components/Title';

export default function Masonry() {
  const { albumName: path } = useParams<{ albumName: string }>();
  const album = ALBUMS.find((album) => album.path === path);

  if (!path || !album) return <Navigate to="/error/404" replace />;

  return (
    <Container>
      <AnimatedBox>
        <Title text={album.name} subTitle={COPYRIGHT} />
      </AnimatedBox>
      <Box sx={{ textAlign: 'center', my: 10 }}>
        <Typography color="text.secondary">Coming soon...</Typography>
      </Box>
    </Container>
  );
}
