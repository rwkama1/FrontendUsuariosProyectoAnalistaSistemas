import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



import { Cliente } from '../entidades/cliente';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers, Response } from '@angular/http';


@Injectable()
export class ClienteService {
  
    url ='http://www.acarlosbackendd.somee.com/api/';
    headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    options = new RequestOptions({ headers: this.headers });
    constructor(private _http: Http) { }

   
    listarcliente(): Observable<Cliente[]> {
        return this._http.get(this.url + 'Cliente')
            .map((res: Response) => <Cliente[]>res.json());

    }
    agregarCliente(cli: Cliente) {
        return this._http.post(this.url + 'Cliente', cli, this.options)
            .map((res: Response) => res.json());
    }
    getCliente(cedula: number): Observable<Cliente> {
        return this._http.get(this.url + 'Cliente?cedula=' + cedula)
            .map((res: Response) => <Cliente>res.json())

    }
    
}