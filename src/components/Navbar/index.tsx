import { DarkModeOutlined, LightModeRounded } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Toolbar,
  Tooltip,
  Typography,
  alpha,
  useScrollTrigger
} from '@mui/material';
import { useContext, useState } from 'react';
import { Link as RRLink, useLocation } from 'react-router-dom';
import { ColorModeContext } from '../..';
import { MENUS } from '../../common/constants/menus';
import { HamburgerV2 } from '../Hamburger';

export default function Navbar() {
  const { pathname } = useLocation();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 64
  });
  const { mode, toggleColorMode } = useContext(ColorModeContext);

  const [open, setOpen] = useState<boolean>(false);

  function handleMenu() {
    setOpen(!open);
  }

  return (
    <>
      <AppBar
        color="transparent"
        sx={(theme) => ({
          borderBottomLeftRadius: { xs: open ? 16 : 0, sm: 0 },
          borderBottomRightRadius: { xs: open ? 16 : 0, sm: 0 },
          backgroundColor: {
            xs:
              open || trigger
                ? alpha(theme.palette.background.paper, 0.5)
                : 'transparent',
            sm: trigger
              ? alpha(theme.palette.background.paper, 0.5)
              : 'transparent'
          },
          boxShadow: {
            xs: open || trigger ? '0px 3px 10px rgba(0, 0, 0, 0.15)' : 'none',
            sm: trigger ? '0px 3px 10px rgba(0, 0, 0, 0.15)' : 'none'
          },
          backdropFilter: 'blur(8px)',
          transition:
            'border-radius 0.15s ease-in-out, background-color 0.5s ease-out, box-shadow 0.5s ease-out'
        })}
      >
        <Container>
          <Toolbar disableGutters sx={{ my: 1 }}>
            <Typography
              component={RRLink}
              to="/"
              variant="h5"
              color="inherit"
              sx={{ textDecoration: 'none' }}
            >
              {pathname === '/' ? 'WELCOME' : 'tim2538'}
            </Typography>
            <Box flexGrow={1} />
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {MENUS.map(({ name, to }) => (
                <Button
                  key={name}
                  component={RRLink}
                  to={to}
                  color={pathname === to ? 'primary' : 'inherit'}
                  disableRipple
                  sx={{
                    borderRadius: 2,
                    ml: 0.5,
                    '&:hover, &.Mui-focusVisible': {
                      bgcolor: 'transparent',
                      color: 'primary.main'
                    }
                  }}
                >
                  {name}
                </Button>
              ))}
            </Box>
            <Tooltip
              title={
                mode === 'light' ? 'Turn off the light' : 'Turn on the light'
              }
            >
              <IconButton
                onClick={() => toggleColorMode()}
                sx={{ color: 'inherit', ml: 0.5 }}
              >
                {mode === 'light' ? <DarkModeOutlined /> : <LightModeRounded />}
              </IconButton>
            </Tooltip>
            <IconButton
              onClick={handleMenu}
              sx={{ display: { xs: 'flex', sm: 'none' }, ml: 0.5 }}
            >
              <HamburgerV2 open={open} />
            </IconButton>
          </Toolbar>
          <Collapse sx={{ display: { xs: 'block', sm: 'none' } }} in={open}>
            <Divider />
            <Toolbar sx={{ display: 'block' }}>
              <MenuList>
                {MENUS.map(({ name, to }) => {
                  return (
                    <MenuItem
                      key={name}
                      component={RRLink}
                      to={to}
                      onClick={handleMenu}
                      disableRipple
                      sx={{
                        mx: -2,
                        px: 1.5,
                        borderRadius: 2,
                        fontWeight: 500,
                        justifyContent: 'center',
                        color:
                          pathname === to ? 'primary.main' : 'text.primary',
                        '&:hover, &.Mui-focusVisible': {
                          bgcolor: 'transparent',
                          color: 'primary.main'
                        }
                      }}
                    >
                      {name}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Toolbar>
          </Collapse>
        </Container>
      </AppBar>
      <Box
        onClick={handleMenu}
        sx={(theme) => ({
          width: '100%',
          height: '100vh',
          position: 'fixed',
          zIndex: theme.zIndex.appBar - 1,
          display: { xs: open ? 'block' : 'none', sm: 'none' },
          backgroundColor: 'background.paper',
          opacity: 0.5
        })}
      />
    </>
  );
}
