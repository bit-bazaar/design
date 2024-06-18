import { Link } from '@bit-bazaar/design.navigation.link';
import Paper from '@mui/material/Paper';
/**
 * import the custom typography component that extends the MUI Typography component
 */
import { Typography } from '@bit-bazaar/design.typography.typography';
// import { Button } from '@bit-bazaar/design.actions.button';

export const AboutPage = () => {
  return (
    <>
      <Typography variant="h1">About</Typography>
      <Paper
        sx={{
          p: 2,
          my: 2,
        }}
      >
        {/* use a cusotm typography variant */}
        <Typography fontSize={20} variant="handwriting">
          This paragraph is styled using a custom typography variant called
          "handwriting"
        </Typography>
      </Paper>
      <Link to="/">
        Route back home using the routing system defined in the custom theme
      </Link>
    </>
  );
};
