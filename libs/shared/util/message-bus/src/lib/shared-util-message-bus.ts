import { EventEmitter } from 'events';
// import { _MessageType } from './enums/_MessageType';
import { IMessage } from './interfaces/IMessage';

export class MessageBusEmitter {

  public static emitter: EventEmitter = new EventEmitter();

  static sendMessage(identifier: string, message: IMessage): void {
    this.emitter.emit(identifier, message);
  }

  static subscribe(identifier: string, func: (message: IMessage) => unknown) {
    this.emitter.on(identifier, func);
  }
}
