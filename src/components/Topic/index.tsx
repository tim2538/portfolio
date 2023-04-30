import { Box, Typography } from '@mui/material';

interface TopicProps {
  text: string;
}

export default function Topic({ text }: TopicProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'baseline', mt: 4, mb: 2 }}>
      <Box
        sx={{
          bgcolor: 'primary.main',
          width: 8,
          height: 8,
          borderRadius: '2px',
          mr: 1
        }}
      />
      <Typography variant="h5" sx={{ lineHeight: 1.2, fontWeight: 600 }}>
        {text}
      </Typography>
    </Box>
  );
}
