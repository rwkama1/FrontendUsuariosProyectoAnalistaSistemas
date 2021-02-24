import { EventEmitter, Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { ChatMessage } from '../entidades/ChatMessage';



@Injectable()
export class SignalRService {
    //messageReceived = new EventEmitter<ChatMessage>();
    //connectionEstablished = new EventEmitter<Boolean>();

    //private connectionIsEstablished = false;
    // _hubConnection: HubConnection;

    //constructor() {
    //    this.createConnection();

    //    this.startConnection();
    //    this.registerOnServerEvents();
    //}

    //sendChatMessage(message: ChatMessage) {
    //    this._hubConnection.invoke('SendMessage', message);
    //}

    //public createConnection() {
    //    this._hubConnection = new HubConnectionBuilder()
    //        .withUrl("http://www.signalrcarlos.somee.com/chat")
    //        .build();
    //}

    //public startConnection(): void {
    //    this._hubConnection
    //        .start()
    //        .then(() => {
    //            this.connectionIsEstablished = true;
    //            console.log('Hub connection started');
    //            this.connectionEstablished.emit(true);
    //        })
    //        .catch(err => {
    //            console.log('Error while establishing connection, retrying...');
                
    //        });
    //}

    //public registerOnServerEvents(): void {
    //    this._hubConnection.on('ReceiveMessage', (data: any) => {
    //        this.messageReceived.emit(data);
    //    });
    //}
}
