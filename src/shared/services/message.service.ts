import { Message } from '../../core/entities/message.entity';
import { User } from '../../core/entities/user.entity';
import { CreateMessageDto, IMessageService, UpdateMessageDto } from '../../core/interfaces/message-service.interface';
import { getAvailableId } from '../utils/get-available-id';
import { UserService } from './user.service';

export class MessageService implements IMessageService {
  userService = UserService.Instance;

  messages: Message[] = [
    {
      id: 1,
      chatId: 1,
      user: this.userService.users[1],
      text: 'text',
      creationDate: new Date().toString(),
      responses: [],
      isModified: false,
    },
    {
      id: 2,
      chatId: 1,
      user: this.userService.users[1],
      text: "Sooo, let's check how that works? :->",
      creationDate: new Date().toString(),
      responses: [],
      isModified: false,
    },
    {
      id: 3,
      chatId: 1,
      user: this.userService.users[2],
      text: 'I think it will brake',
      creationDate: new Date().toString(),
      responses: [],
      isModified: false,
    },
    {
      id: 4,
      chatId: 1,
      user: this.userService.users[3],
      text: 'I am response!',
      creationDate: new Date().toString(),
      responses: [],
      responseToId: 2,
      isModified: false,
    },
  ];

  private static instance: MessageService;

  public static get Instance() {
    if (!this.instance) {
      this.instance = new this();
      this.instance.init();
      return this.instance;
    }

    return this.instance;
  }

  private init() {
    this.messages
      .filter((message) => message.responseToId)
      .forEach((message) => {
        const msg = this.messages[message.responseToId! - 1];
        msg.responses.push(message);
      });
  }

  async getAll(chatId?: number) {
    if (!chatId) {
      return this.messages;
    }

    return this.messages.filter((message) => message.chatId === chatId);
  }

  async get(id: number) {
    return this.messages.find((message) => message.id === id) || null;
  }

  async getLastMessage(id: number) {
    const messages = await this.getAll(id);

    return messages[messages.length - 1];
  }

  async create(instance: CreateMessageDto) {
    const messageId = getAvailableId(this.messages);
    const { chatId, user, text, file, responseToId } = instance;
    const message = new Message(messageId, chatId, user, text, new Date().toString(), [], file, responseToId, false);
    this.messages.push(message);

    if (responseToId) {
      const responseTargetMessage = await this.get(responseToId);
      responseTargetMessage?.responses.push(message);
    }
    return message;
  }

  async update(id: number, data: UpdateMessageDto) {
    const message = await this.get(id);

    if (!message) {
      throw new Error('no such message!');
    }

    const { text, file } = data;
    message.text = text ?? message.text;
    message.file = file ?? message.file;
    message.isModified = true;

    return message;
  }

  async delete(id: number) {
    const index = this.messages.findIndex((message) => message.id === id);

    if (index === -1) {
      throw new Error('no such message');
    }

    this.messages.splice(index, 1);
    return true;
  }
}
