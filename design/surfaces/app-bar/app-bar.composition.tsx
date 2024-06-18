import { AppBar } from './app-bar';
import { Box } from '@bit-bazaar/design.layout.box';
import { Toolbar } from '@bit-bazaar/design.layout.toolbar';
import { Typography } from '@bit-bazaar/design.typography.typography';
import { Button } from '@bit-bazaar/design.actions.button';
import { IconButton } from '@bit-bazaar/design.actions.icon-button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            ☰
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
