import { Facebook, Instagram } from '@mui/icons-material';
import {
  Box,
  Container,
  Divider,
  IconButton,
  Typography,
  useTheme
} from '@mui/material';
import { COPYRIGHT } from '../../common/constants';

export default function Footer() {
  const theme = useTheme();
  const bgcolor = theme.palette.background.paper;

  return (
    <>
      <Divider />
      <Box
        sx={{
          bgcolor,
          boxShadow: `0 50vh 0 50vh ${bgcolor}`
        }}
      >
        <Container sx={{ py: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="caption" sx={{ lineHeight: 1.4, mr: 4 }}>
              {COPYRIGHT}
            </Typography>
            <Box flexGrow={1} />
            <IconButton
              size="small"
              disableRipple
              sx={{
                '&:hover, &.Mui-focusVisible': {
                  bgcolor: 'transparent'
                }
              }}
              onClick={() =>
                window.open('https://web.facebook.com/TimTimphoto', '_blank')
              }
            >
              <Facebook />
            </IconButton>
            <IconButton
              size="small"
              disableRipple
              sx={{
                '&:hover, &.Mui-focusVisible': {
                  bgcolor: 'transparent'
                }
              }}
              onClick={() =>
                window.open(
                  'https://www.instagram.com/postcard.traveller',
                  '_blank'
                )
              }
            >
              <Instagram />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </>
  );
}
