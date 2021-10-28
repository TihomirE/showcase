import { _MessageType } from '../enums/_MessageType';
import { IMessage } from './IMessage';

export interface IMessageBus {
    sendMessage(messagetypes: _MessageType, message: IMessage): void;
    subscribe(messagetype: _MessageType, func: (message: IMessage) => unknown): void;
}