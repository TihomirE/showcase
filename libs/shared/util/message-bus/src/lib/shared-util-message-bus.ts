import { EventEmitter } from 'events';
import { _MessageType } from './enums/_MessageType';
import { IMessage } from './interfaces/IMessage';
import { IMessageBus } from './interfaces/IMessageBus';

export class MessageBusEmitter implements IMessageBus {

  private emitter: EventEmitter = new EventEmitter();

  sendMessage(messagetype: _MessageType, message: IMessage): void {
    this.emitter.emit(messagetype.toString(), message);
  }

  subscribe(messagetype: _MessageType, func: (message: IMessage) => unknown) {
    this.emitter.on(messagetype.toString(), func);
  }
}
