import { Button } from './button.js';

export const DefaultButton = () => {
  return <Button>Click me</Button>;
};

export const ContainedButton = () => {
  return <Button variant="contained">Click me</Button>;
};

export const OutlineddButton = () => {
  return <Button variant="outlined">Click me</Button>;
};
