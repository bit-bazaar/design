import { Card, CardHeader, CardMedia, CardContent, CardActions } from './card';
import { Avatar } from '@bit-bazaar/design.data-display.avatar';
import { IconButton } from '@bit-bazaar/design.actions.icon-button';
import { Typography } from '@bit-bazaar/design.typography.typography';

export default function RecipeReviewCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        action={<IconButton aria-label="settings">...</IconButton>}
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        // @ts-ignore
        height="194"
        image="https://mui.com/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">💖</IconButton>
        <IconButton aria-label="share">🌟</IconButton>
      </CardActions>
    </Card>
  );
}
