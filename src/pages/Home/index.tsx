import { CardMedia, useTheme } from '@mui/material';

export default function Home() {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <CardMedia
      sx={{ height: '100vh' }}
      image={require(`../../assets/WebCover_${mode}.jpeg`)}
    />
  );
}
