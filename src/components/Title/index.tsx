import { Box, Typography } from '@mui/material';

interface TitleProps {
  text: string;
  subTitle?: string;
}

export default function Title({ text = 'Title', subTitle }: TitleProps) {
  return (
    <Box textAlign="center" sx={{ pt: { xs: 16, sm: 20 }, pb: 2 }}>
      <Typography sx={{ fontSize: { xs: 32, sm: 40, md: 48 } }}>
        {text}
      </Typography>
      {subTitle && (
        <Typography
          color="text.secondary"
          sx={{ lineHeight: 1.4, fontSize: { xs: 8, sm: 10, md: 12 } }}
        >
          {subTitle}
        </Typography>
      )}
    </Box>
  );
}
