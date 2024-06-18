import { List, ListItem, ListItemText } from './list.js';

export const BasicList = () => {
  return (
    <List>
      <ListItem>
        <ListItemText>Item #1</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Item #2</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Item #3</ListItemText>
      </ListItem>
    </List>
  );
};
