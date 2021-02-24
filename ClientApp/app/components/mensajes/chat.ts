import { Component, OnInit, NgZone } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Vendedor } from '../../entidades/vendedor';

@Component({
    selector: 'chat',
    templateUrl: './chat.html',

})
export class ChatComponent implements OnInit {
    espacio = "                                                          ";
    hubConnection: HubConnection;
  
  
    get  message() :any 
    {
        return ((<HTMLInputElement>document.getElementById("message")).value);
    }
    set message(value: any)
        {
        ((<HTMLInputElement>document.getElementById("message")).value) = value;
        }
    
  //  get message() {  };
  //set message
    nick 
    vendedor = JSON.parse(localStorage['vendedor']) as Vendedor; 
    messages: string[] = [];

    ngOnInit() {
        

        this.hubConnection = new HubConnectionBuilder()
            .withUrl("http://signalrr-001-site1.atempurl.com/chat")
            .build();

        this.hubConnection
            .start()
            .then(() => console.log('Connection started!'))
            .catch(err => console.log('Error while establishing connection :('));

        this.hubConnection.on('ReceiveMessage', (nick: string, receivedMessage: string) => {
            const text = ` ${nick} dice:   ${receivedMessage}`;
            this.messages.push(text);
        });
    }
    public sendMessage(): void {
        this.hubConnection
            .invoke('SendMessage', this.vendedor.NombreUsu, this.message)
            .catch(err => console.error(err));

        this.message = " ";
    }
   
 
}