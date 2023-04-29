import { Box, Typography } from '@mui/material';

interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <Box textAlign="center" sx={{ pt: { xs: 16, sm: 20 } }}>
      <Typography sx={{ fontSize: { xs: 32, sm: 40, md: 48 } }}>
        {text}
      </Typography>
    </Box>
  );
}
