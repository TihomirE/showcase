// TODO use _MessageType or not??
// import { _MessageType } from '../enums/_MessageType';
import { IMessage } from './IMessage';

export interface IMessageBus {
    sendMessage(identifier: string, message: IMessage): void;
    subscribe(identifier: string, func: (message: IMessage) => unknown): void;
}