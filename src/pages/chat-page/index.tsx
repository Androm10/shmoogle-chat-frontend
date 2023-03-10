import { ChangeEvent, FC, useEffect, useId } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { routes } from 'core/constants/routes';
import { useAppSelector } from 'shared/hooks/app-selector.hook';
import ChatRoom from 'components/chat/chat-room';
import OptionRadio from 'components/ui/option-radiobutton';
import ChatHeader from 'components/chat/chat-header';
import {
  ChatPageBody,
  ChatPageFlexContainer,
  StyledChatPage,
  ChatPageBodyOptions,
  ChatPageBodyContent,
} from './styled';
import ChatFiles from 'components/chat/chat-files';
import { ChatPageOption, chatRoomActions } from 'shared/store/reducers/chat-room.slice';
import { useAppDispatch } from 'shared/hooks/app-dispatch.hook';

function renderSwitch(option: ChatPageOption, chatId: string) {
  switch (option) {
    case ChatPageOption.chat:
      return <ChatRoom chatId={chatId}></ChatRoom>;
    case ChatPageOption.files:
      return <ChatFiles chatId={chatId}></ChatFiles>;
    case ChatPageOption.tasks:
      return <></>;
    default:
      return <></>;
  }
}

export const ChatPage: FC = () => {
  const radioName = useId();
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { chats } = useAppSelector((state) => state.userReducer);
  const { messageId, currentOption } = useAppSelector((state) => state.chatRoomReducer);
  const { setCurrentOption } = chatRoomActions;

  const onOptionChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (+value in ChatPageOption) {
      dispatch(setCurrentOption(+value));
    }
  };

  if (!id) {
    return <Navigate to={routes.welcome} />;
  }
  const chat = chats.find((item) => item.id === id);

  if (!chat) {
    return <Navigate to={routes.welcome} />;
  }

  if (!chat.isGroup) {
    return <Navigate to={`${routes.dm}${id}`} />;
  }

  useEffect(() => {
    if (messageId) {
      dispatch(setCurrentOption(ChatPageOption.chat));
    }
  }, [messageId]);

  return (
    <StyledChatPage>
      <ChatHeader chat={chat} />
      <ChatPageBody>
        <ChatPageBodyOptions>
          <ChatPageFlexContainer>
            <OptionRadio
              name={radioName}
              value={ChatPageOption.chat}
              checked={currentOption === ChatPageOption.chat}
              onChange={onOptionChangeHandler}
            >
              ??????
            </OptionRadio>
            <OptionRadio
              name={radioName}
              value={ChatPageOption.files}
              checked={currentOption === ChatPageOption.files}
              onChange={onOptionChangeHandler}
            >
              ??????????
            </OptionRadio>
            <OptionRadio
              name={radioName}
              value={ChatPageOption.tasks}
              checked={currentOption === ChatPageOption.tasks}
              onChange={onOptionChangeHandler}
            >
              ????????????
            </OptionRadio>
          </ChatPageFlexContainer>
        </ChatPageBodyOptions>

        <ChatPageBodyContent>{renderSwitch(currentOption, chat.id)}</ChatPageBodyContent>
      </ChatPageBody>
    </StyledChatPage>
  );
};
