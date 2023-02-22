// TODO: add json config file for api data
export const SERVER_URL = 'http://localhost:3000/v1/';
export const SERVER_SOCKET_URL = 'http://localhost:8080/chat';

export enum ClientEvents {
    NEW_MESSAGE = 'NEW_MESSAGE',
    INVITED_TO_CHAT = 'INVITED_TO_CHAT',
    HISTORY_CHANGED = 'HISTORY_CHANGED',
    NEW_CHATS = 'NEW_CHATS',
    ERROR = 'ERROR',
  }
  
  export enum ServerEvents {
    GET_AND_SUBSCRIBE_CHATS = 'GET_AND_SUBSCRIBE_CHATS',
    SEND_MESSAGE = 'SEND_MESSAGE',
    LEAVE_CHAT = 'LEAVE_CHAT',
    INVITE_TO_CHAT = 'INVITE_TO_CHAT',
    CREATE_CHAT = 'CREATE_CHAT',
    CHANGE_HISTORY = 'CHANGE_HISTORY',
  }