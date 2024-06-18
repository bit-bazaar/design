import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
/**
 * use a custom components that extend the default MUI components
 */
import { Divider } from '@bit-bazaar/design.data-display.divider';
import { Toolbar } from '@bit-bazaar/design.layout.toolbar';
import { AppBar as AppBarBase } from '@bit-bazaar/design.surfaces.app-bar';
import { Box } from '@bit-bazaar/design.layout.box';
import { Typography } from '@bit-bazaar/design.typography.typography';
import { Button } from '@bit-bazaar/design.actions.button';
import { IconButton } from '@bit-bazaar/design.actions.icon-button';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@bit-bazaar/design.data-display.list';
import styles from './app-bar.module.scss';

export interface AppBarProps {
  window?: () => Window;
  children: React.ReactNode;
}

const drawerWidth = 240;
const navItems = [
  ['Home', '/'],
  ['About', '/about'],
];

export function AppBar(props: AppBarProps) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
        MUI Demo App
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton to={item[1]}>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarBase component="nav" elevation={1}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            ☰
          </IconButton>
          <Typography
            fontSize="1.5rem"
            fontWeight={700}
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            💎
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item[0]}
                sx={{ color: '#fff', fontWeight: 700 }}
                to={item[1]}
              >
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBarBase>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        className={styles.main}
        component="main"
        sx={{ p: 3, width: '100%' }}
      >
        <Toolbar />
        <>{props.children}</>
      </Box>
    </Box>
  );
}
