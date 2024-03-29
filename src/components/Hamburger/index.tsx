import { Box } from '@mui/material';

interface HamburgerProps {
  open: boolean;
}

export function Hamburger({ open }: HamburgerProps) {
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

export function HamburgerV2({ open }: HamburgerProps) {
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
            width: 9,
            height: 2,
            bgcolor: 'text.primary',
            borderRadius: 2,
            position: 'absolute',
            top: -5,
            transform: open
              ? 'translateX(15%) translateY(100%) rotate(-135deg)'
              : 'none',
            transition: 'transform 0.4s'
          }}
        />
        <Box
          sx={{
            width: 18,
            height: 2,
            bgcolor: 'text.primary',
            borderRadius: 2,
            position: 'absolute',
            transform: open ? 'rotate(-45deg)' : 'none',
            transition: 'transform 0.4s'
          }}
        />
        <Box
          sx={{
            width: 9,
            height: 2,
            bgcolor: 'text.primary',
            borderRadius: 2,
            position: 'absolute',
            top: 5,
            right: 0,
            transform: open
              ? 'translateX(-15%) translateY(-100%) rotate(-135deg)'
              : 'none',
            transition: 'transform 0.4s'
          }}
        />
      </Box>
    </Box>
  );
}

export function HamburgerV3({ open }: HamburgerProps) {
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
          position: 'relative',
          transform: open ? 'rotate(-45deg)' : 'none',
          transition: 'transform 0.4s'
        }}
      >
        <Box
          sx={{
            width: 9,
            height: 2,
            bgcolor: 'text.primary',
            borderRadius: 2,
            position: 'absolute',
            top: -8,
            transform: open ? 'rotate(-90deg) translateX(1px)' : 'none',
            transition: 'transform 0.4s cubic-bezier(0.54, -0.81, 0.57, 0.57)',
            transformOrigin: 'right'
          }}
        />
        <Box
          sx={{
            width: 18,
            height: 2,
            bgcolor: 'text.primary',
            borderRadius: 2,
            position: 'absolute'
          }}
        />
        <Box
          sx={{
            width: 9,
            height: 2,
            bgcolor: 'text.primary',
            borderRadius: 2,
            position: 'absolute',
            top: 8,
            right: 0,
            transform: open ? 'rotate(-90deg) translateX(-1px)' : 'none',
            transition: 'transform 0.4s cubic-bezier(0.54, -0.81, 0.57, 0.57)',
            transformOrigin: 'left'
          }}
        />
      </Box>
    </Box>
  );
}
