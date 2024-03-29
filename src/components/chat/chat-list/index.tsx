import { FC, useState, memo, ChangeEvent, ReactNode } from 'react';

import { Chat } from 'core/entities/chat.entity';
import { ChatListItemContainer, CheckboxContainer, ListBody, ListContainer, ListHeader, NameContainer } from './styled';
import ChatListItem from '../chat-list-item';
import PlusSvg from 'components/svg/plus-svg';
import ChatSvg from 'components/svg/chat-svg';
import { AvatarVariants } from 'components/ui/avatar';
import { Tooltip, ListCheckbox, RoundButton, FloatingMenu } from 'components/ui';
import { useAppDispatch } from 'shared/hooks/app-dispatch.hook';
import { sidebarActions } from 'shared/store/reducers/sidebar.slice';

interface ChatListProps {
  name: string;
  chatItems: Chat[];
  menuElement?: ReactNode;
  isOpen?: boolean;
  tooltipAddText?: string;
  avatarVariant?: AvatarVariants;
  isOpenHandler?: (value: boolean) => void;
  chatItemClickHandler?: (id: string) => void;
}

const ChatList: FC<ChatListProps> = memo((props: ChatListProps) => {
  const {
    name,
    chatItems,
    menuElement,
    tooltipAddText,
    isOpenHandler,
    isOpen: isOpenProp,
    chatItemClickHandler,
    avatarVariant = AvatarVariants.round,
  } = props;

  const [isOpen, setIsOpen] = useState(isOpenProp ?? false);
  const [isMenuHidden, setMenuHidden] = useState(true);
  const dispatch = useAppDispatch();
  const { setIsBlocked } = sidebarActions;

  const onOpenHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIsOpen(event.target.checked);
    if (isOpenHandler) {
      isOpenHandler(event.target.checked);
    }
  };

  const chatItemClickHandlerHandler = (id: string) => {
    if (chatItemClickHandler) {
      chatItemClickHandler(id);
    }
  };

  const menuHiddenHandler = (value: boolean) => {
    setMenuHidden(value);
    dispatch(setIsBlocked(!value));
  };

  return (
    <ListContainer>
      <ListHeader>
        <CheckboxContainer>
          <ListCheckbox onChecked={onOpenHandler} initialValue={isOpen} />
        </CheckboxContainer>

        <NameContainer>{name}</NameContainer>
        <FloatingMenu element={menuElement} isHidden={isMenuHidden} setHidden={menuHiddenHandler} marginLeft="50px">
          <Tooltip text={tooltipAddText || 'Добавить'}>
            <RoundButton size="24px" padding="8px" onClick={() => menuHiddenHandler(!isMenuHidden)}>
              <PlusSvg />
            </RoundButton>
          </Tooltip>
        </FloatingMenu>
      </ListHeader>
      <ListBody isEmpty={!chatItems.length}>
        {isOpen ? (
          <>
            {chatItems.length ? (
              chatItems.map((chat: Chat) => (
                <ChatListItemContainer key={chat.id} onClick={() => chatItemClickHandlerHandler(chat.id)}>
                  <ChatListItem chatId={chat.id} avatarVariant={avatarVariant} />
                </ChatListItemContainer>
              ))
            ) : (
              <>
                <ChatSvg />
                <label>Здесь пока ничего нет.</label>
                <a>Найти чат</a>
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </ListBody>
    </ListContainer>
  );
});

ChatList.displayName = 'ChatList';

export default ChatList;
