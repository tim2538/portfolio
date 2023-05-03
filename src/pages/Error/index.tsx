import { HomeRounded, KeyboardArrowLeftRounded } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  alpha
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import AnimatedBox from '../../components/AnimatedBox';

export default function Error() {
  const navigate = useNavigate();
  const params = useParams();
  const errorId = Number.parseInt(params.errorId ?? '');

  let errorCode = 500;
  let text = 'Error :(';
  let message = 'We are sorry. This is unexpected.';

  if (errorId === 403) {
    errorCode = 403;
    text = 'Forbidden';
    message = 'You do not have permission to view this page';
  }
  if (errorId === 404) {
    errorCode = 404;
    text = 'Opps!';
    message = 'This page could not be found';
  }

  return (
    <Container sx={{ textAlign: 'center', py: { xs: 12, sm: 10, md: 8 } }}>
      <Typography
        sx={{
          position: 'fixed',
          top: { xs: -160, sm: -180, md: -200 },
          right: 0,
          fontSize: { xs: 625, sm: 725, md: 800 },
          fontWeight: 'bold',
          letterSpacing: -25,
          zIndex: -10,
          opacity: 0.05
        }}
      >
        {errorCode}
      </Typography>
      <AnimatedBox>
        <Typography
          color="primary"
          sx={{
            fontSize: { xs: 120, sm: 200, md: 280 },
            fontWeight: 'bold',
            letterSpacing: { xs: -3, sm: -5 }
          }}
        >
          {errorCode}
        </Typography>
      </AnimatedBox>
      <Box sx={{ mt: { xs: -2, sm: -5, md: -9 }, mb: 10 }}>
        <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
          {text}
        </Typography>
        <Typography color="text.secondary">{message}</Typography>
      </Box>
      <Stack
        spacing={1}
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        sx={{ mt: 3 }}
      >
        <Button
          variant="contained"
          size="large"
          color="inherit"
          disableElevation
          startIcon={
            <KeyboardArrowLeftRounded sx={{ color: 'primary.dark' }} />
          }
          onClick={() => navigate(-1)}
          sx={{
            minWidth: 150,
            color: 'primary.dark',
            position: 'relative',
            '::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'background.paper',
              borderRadius: '48px',
              zIndex: -1
            },
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2),
            '&:hover, &.Mui-focusVisible': {
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.4)
            }
          }}
        >
          Go Back
        </Button>
        <Button
          variant="contained"
          size="large"
          disableElevation
          startIcon={<HomeRounded />}
          onClick={() => navigate('/')}
          sx={{ minWidth: 150 }}
        >
          Home
        </Button>
      </Stack>
    </Container>
  );
}
