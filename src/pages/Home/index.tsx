import { CodeOutlined, PhotoCameraOutlined } from '@mui/icons-material';
import {
  Box,
  CardMedia,
  Container,
  Divider,
  Typography,
  useTheme
} from '@mui/material';
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
            pt: 20
          }}
        >
          <Typography sx={{ fontSize: { xs: 32, sm: 48 }, lineHeight: 1.2 }}>
            Chawakorn
            <br />
            Tanksinmankhong
          </Typography>
          <Divider
            sx={{ width: 24, mt: 1, mb: 1.5, mx: { xs: 'auto', sm: 0 } }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-start' },
              alignItems: 'center'
            }}
          >
            <PhotoCameraOutlined
              sx={{ width: { xs: 12, sm: 16 }, height: { xs: 12, sm: 16 } }}
            />
            <Typography
              sx={{
                fontSize: { xs: 10, sm: 16 },
                textTransform: 'uppercase',
                letterSpacing: { xs: 10, sm: 16 },
                ml: { xs: 1.25, sm: 1.5 }
              }}
            >
              Photo&Dev
            </Typography>
            <CodeOutlined
              sx={{ width: { xs: 12, sm: 16 }, height: { xs: 12, sm: 16 } }}
            />
          </Box>
        </AnimatedBox>
      </Container>
    </CardMedia>
  );
}
