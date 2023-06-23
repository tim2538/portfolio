import { KeyboardArrowRightRounded } from '@mui/icons-material';
import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Theme,
  Typography,
  useMediaQuery
} from '@mui/material';
import { Link as RRLink } from 'react-router-dom';
import { COPYRIGHT } from '../../common/constants';
import { ALBUMS } from '../../common/constants/albums';
import AnimatedBox from '../../components/AnimatedBox';
import Title from '../../components/Title';
import useScreenWidth from '../../hooks/useScreenWidth';

interface Item {
  id: number;
  name: string;
  path: string;
  filename: string;
  width: number;
  height: number;
}

export default function Album() {
  const width = useScreenWidth();
  const isSmUpScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up('sm')
  );
  const isMdUpScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up('md')
  );
  const isLgUpScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up('lg')
  );

  const maxWidthHeight = (function () {
    if (isLgUpScreen) return 500;
    if (isMdUpScreen) return 400;
    if (isSmUpScreen) return 500;
    return Math.min(width / 1.2, 400);
  })();

  function GridLayout(items: Item[]) {
    return (
      <Grid
        container
        rowSpacing={{ xs: 20, md: 16 }}
        columnSpacing={{ xs: 0, md: 4 }}
        sx={{ mb: 3 }}
      >
        {items.map((item, index) => {
          const isHorizontalImage = item.width >= item.height;
          const width = isHorizontalImage
            ? maxWidthHeight
            : (item.width / item.height) * maxWidthHeight;
          const height = isHorizontalImage
            ? (item.height / item.width) * maxWidthHeight
            : maxWidthHeight;

          return (
            <Grid
              item
              key={index}
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <AnimatedBox
                direction={
                  isSmUpScreen ? (index % 2 === 0 ? 'left' : 'right') : 'bottom'
                }
                sx={{
                  textAlign: 'center'
                }}
              >
                <CardMedia
                  component={RRLink}
                  to={item.path}
                  image={require(`../../assets/album/main/${item.filename}`)}
                  title={item.name}
                  sx={{
                    mx: 'auto',
                    borderRadius: 1,
                    boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.3)',
                    bgcolor: (theme) =>
                      theme.palette.mode === 'light' ? '#dddddd' : '#222222',
                    width,
                    height,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: '0 10px 40px 0 rgba(0, 0, 0, 0.3)',
                      transform: 'scale(1.1)'
                    }
                  }}
                />
                <Box mt={5} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    component={RRLink}
                    to={item.path}
                    variant="h5"
                    fontWeight={300}
                    color="inherit"
                    sx={{ textDecoration: 'none' }}
                  >
                    {item.name.toUpperCase()}
                  </Typography>
                  <Button
                    disableRipple
                    component={RRLink}
                    to={item.path}
                    size="small"
                    endIcon={<KeyboardArrowRightRounded />}
                    sx={{
                      '&:hover, &.Mui-focusVisible': {
                        bgcolor: 'transparent',
                        color: 'primary.dark'
                      }
                    }}
                  >
                    SEE MORE
                  </Button>
                </Box>
              </AnimatedBox>
            </Grid>
          );
        })}
      </Grid>
    );
  }

  return (
    <Container>
      <AnimatedBox>
        <Title text="Album" subTitle={COPYRIGHT} />
      </AnimatedBox>
      <Box sx={{ my: { xs: 16, md: 8 } }}>{GridLayout(ALBUMS)}</Box>
    </Container>
  );
}
