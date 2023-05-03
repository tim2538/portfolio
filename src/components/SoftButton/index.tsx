import { Button, Theme, alpha, useTheme } from '@mui/material';
import React from 'react';

export default function SoftButton(props: React.ComponentProps<typeof Button>) {
  const theme = useTheme<Theme>();
  const { color = 'primary', sx, children, ...other } = props;
  let selectedColor = theme.palette.primary;
  if (color !== 'inherit') selectedColor = theme.palette[color];

  return (
    <Button
      {...other}
      variant="contained"
      color="inherit"
      sx={{
        ...sx,
        color: selectedColor.dark,
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
        bgcolor: (theme) => alpha(selectedColor.main, 0.2),
        '&:hover, &.Mui-focusVisible': {
          bgcolor: (theme) => alpha(selectedColor.main, 0.4)
        }
      }}
    >
      {children}
    </Button>
  );
}
