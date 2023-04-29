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
  Typography
} from '@mui/material';
import { useContext, useState } from 'react';
import { Link as RRLink, useLocation } from 'react-router-dom';
import { ColorModeContext } from '../..';
import { MENUS } from '../../common/constants/menus';
import Hamburger from '../Hamburger';

export default function Navbar() {
  const { pathname } = useLocation();
  const { mode, toggleColorMode } = useContext(ColorModeContext);

  const [open, setOpen] = useState<boolean>(false);

  function handleMenu() {
    setOpen(!open);
  }

  return (
    <AppBar
      color="transparent"
      elevation={0}
      sx={{
        py: 1,
        transition: 'border-radius 0.15s ease-in-out',
        borderBottomLeftRadius: { xs: open ? 16 : 0, md: 0 },
        borderBottomRightRadius: { xs: open ? 16 : 0, md: 0 }
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Typography
            component={RRLink}
            to="/"
            variant="h5"
            color="inherit"
            sx={{ textDecoration: 'none' }}
          >
            WELCOME
          </Typography>
          <Box flexGrow={1} />
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
          <IconButton
            onClick={handleMenu}
            sx={{ display: { xs: 'flex', sm: 'none' }, ml: 0.5 }}
          >
            <Hamburger open={open} />
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
                      color: pathname === to ? 'primary.main' : 'text.primary',
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
  );
}
