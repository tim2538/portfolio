import { Facebook, GitHub, Instagram } from '@mui/icons-material';
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

  const socials = {
    Facebook: {
      icon: <Facebook />,
      to: 'https://web.facebook.com/TimTimphoto'
    },
    Instagram: {
      icon: <Instagram />,
      to: 'https://www.instagram.com/postcard.traveller'
    },
    GitHub: { icon: <GitHub />, to: 'https://www.github.com/tim2538' }
  };

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
            {(Object.keys(socials) as (keyof typeof socials)[]).map(
              (social) => (
                <IconButton
                  key={social}
                  size="small"
                  disableRipple
                  sx={{
                    '&:hover, &.Mui-focusVisible': {
                      bgcolor: 'transparent'
                    }
                  }}
                  onClick={() => window.open(socials[social].to, '_blank')}
                >
                  {socials[social].icon}
                </IconButton>
              )
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
}
