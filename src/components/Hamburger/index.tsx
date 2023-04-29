import { Box } from '@mui/material';

interface HamburgerProps {
  open: boolean;
}

export default function Hamburger({ open }: HamburgerProps) {
  return (
    <Box
      sx={{
        width: 24,
        height: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          width: 18,
          height: 2,
          position: 'relative'
        }}
      >
        <Box
          sx={{
            width: 18,
            height: 2,
            bgcolor: 'text.primary',
            borderRadius: 2,
            position: 'absolute',
            top: -5,
            transform: open ? 'translateY(250%) rotate(45deg)' : 'none',
            transition: 'transform 0.4s'
          }}
        />
        <Box
          sx={{
            width: open ? 0 : 18,
            height: 2,
            bgcolor: 'text.primary',
            borderRadius: 2,
            position: 'absolute',
            transition: 'width 0.4s'
          }}
        />
        <Box
          sx={{
            width: 18,
            height: 2,
            bgcolor: 'text.primary',
            borderRadius: 2,
            position: 'absolute',
            top: 5,
            transform: open ? 'translateY(-250%) rotate(-45deg)' : 'none',
            transition: 'transform 0.4s'
          }}
        />
      </Box>
    </Box>
  );
}