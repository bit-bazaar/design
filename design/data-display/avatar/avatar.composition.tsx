import { Avatar, AvatarGroup } from './avatar.js';
import { stringAvatar } from './string-avatar.js';

export const ImageAvatar = () => {
  return (
    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
  );
};

export const StringAvatar = () => {
  return <Avatar alt="Remy Sharp" {...stringAvatar('Remy Sharp')} />;
};

export const GroupAvatars = () => {
  return (
    <AvatarGroup max={4}>
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
      />
      <Avatar
        alt="Travis Howard"
        src="https://mui.com/static/images/avatar/2.jpg"
      />
      <Avatar
        alt="Cindy Baker"
        src="https://mui.com/static/images/avatar/3.jpg"
      />
      <Avatar
        alt="Agnes Walker"
        src="https://mui.com/static/images/avatar/4.jpg"
      />
      <Avatar
        alt="Trevor Henderson"
        src="https://mui.com/static/images/avatar/5.jpg"
      />
    </AvatarGroup>
  );
};
