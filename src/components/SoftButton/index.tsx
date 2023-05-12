import { Button, Theme, alpha, useTheme } from '@mui/material';
import React from 'react';

interface StyledButtonProps {
  borderRadius: number | string;
}

export default function SoftButton(props: React.ComponentProps<typeof Button>) {
  const theme = useTheme<Theme>();
  const { color = 'primary', sx, children, ...other } = props;

  // Set color of Button
  let selectedColor = theme.palette.primary;
  if (color !== 'inherit') selectedColor = theme.palette[color];
  // Set border-radius of Button
  let { borderRadius } = theme.components?.MuiButton?.styleOverrides
    ?.root as StyledButtonProps;
  if ((sx as StyledButtonProps)?.borderRadius)
    borderRadius = (sx as StyledButtonProps).borderRadius;
  if (typeof borderRadius === 'number')
    borderRadius = `${
      theme.shape.borderRadius * Math.min(borderRadius, 999)
    }px`;

  return (
    <Button
      {...other}
      variant="contained"
      color="inherit"
      sx={{
        ...sx,
        color:
          theme.palette.mode === 'light'
            ? selectedColor.dark
            : selectedColor.light,
        position: 'relative',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'background.paper',
          borderRadius,
          zIndex: -1
        },
        bgcolor: alpha(selectedColor.main, 0.2),
        '&:hover, &.Mui-focusVisible': {
          bgcolor: alpha(selectedColor.main, 0.4)
        }
      }}
    >
      {children}
    </Button>
  );
}
