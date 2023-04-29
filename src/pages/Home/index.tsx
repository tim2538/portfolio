import { CardMedia, Container, Typography, useTheme } from '@mui/material';
import AnimatedBox from '../../components/AnimatedBox';

export default function Home() {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <CardMedia
      sx={{ height: '100vh' }}
      image={require(`../../assets/WebCover_${mode}.jpeg`)}
    >
      <Container>
        <AnimatedBox
          direction="left"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: { xs: 'center', sm: 'start' },
            pt: 24
          }}
        >
          <Typography sx={{ fontSize: { xs: 32, sm: 48 }, lineHeight: 1.2 }}>
            Chawakorn
            <br />
            Tanksinmankhong
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 10, sm: 16 },
              textTransform: 'uppercase',
              letterSpacing: { xs: 10, sm: 16 },
              mt: 1,
              ml: { xs: 1.5, sm: 0.25 }
            }}
          >
            Photographer
          </Typography>
        </AnimatedBox>
      </Container>
    </CardMedia>
  );
}
