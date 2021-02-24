import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import { Observable } from 'rxjs/Observable';
import { Mensaje } from '../entidades/mensaje';
import { Http, RequestOptions, Headers, Response } from '@angular/http';



@Injectable()
export class MensajeService {
    url = 'http://www.acarlosbackendd.somee.com/api/';
    headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    options = new RequestOptions({ headers: this.headers });
    constructor(private _http: Http) { }

    getMensajesClientes(): Observable<Mensaje[]> {
        return this._http.get(this.url + 'Mensaje')
            .map((res: Response) => <Mensaje[]>res.json());

    }

    getMensaje(id: number): Observable<Mensaje> {
        return this._http.get(this.url + 'Mensaje?id=' + id)
            .map((res: Response) => <Mensaje>res.json());
    }
   respnderMensaje(msj: Mensaje) {
       return this._http.put(this.url +'Mensaje', msj,this.options)
           .map((res: Response) => <Mensaje>res.json());
   
   }
}