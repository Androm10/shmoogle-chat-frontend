import { FC } from 'react';

import chatImage from 'assets/new_chat_room.png';
import { StyledWelcomePage } from './styled';

export const WelcomePage: FC = () => {
  return (
    <StyledWelcomePage>
      <div>
        <img src={chatImage} width="160" height="160" />
      </div>
      <label>Выберите чат.</label>
    </StyledWelcomePage>
  );
};
