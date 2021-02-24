import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Producto } from '../entidades/producto';
import { OrdenTaller } from '../entidades/ordentaller';
import { Venta } from '../entidades/venta';
import { OrdenEnvio } from '../entidades/ordenenvio';
import { Http, RequestOptions, Headers, Response } from '@angular/http';



@Injectable()
export class OrdenEnvioService {

    url = 'http://www.acarlosbackendd.somee.com/api/';
    headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    options = new RequestOptions({ headers: this.headers });
    constructor(private _http: Http) { }

   
    ListarVentasCobradas(): Observable<Venta[]> {
        return this._http.get(this.url + 'ListarVentasCobradas')
            .map((res: Response) => <Venta[]>res.json());
       

    }
    BuscarVentasCobradas(criterio:string): Observable<Venta[]> {
        return this._http.get(this.url + 'BuscarVentasCobradas?criterio=' + criterio)
            .map((res: Response) => <Venta[]>res.json());

    }
    SeleccionarVentaCobrada(idventa: number): Observable<Venta> {
        return this._http.get(this.url + 'SeleccionarVentaCobrada?idventa=' + idventa)
            .map((res: Response) => <Venta> res.json());

    }
    AgregarOrdenEnvio(cadete: number, cliente: number, idventa: number, destino: string,localidad:string): Observable<OrdenEnvio> {
        return this._http.get(this.url + 'AgregarOrdenEnvio?cadete=' + cadete + "&cliente=" + cliente + "&idventa=" + idventa + "&destino=" + destino + "&localidad=" + localidad)
            .map((res: Response) => <OrdenEnvio>res.json());       
    }
    ListarOrdenEnvioPendientes(): Observable<OrdenEnvio[]> {
        return this._http.get(this.url + 'ListarOrdenEnvioPendientes')
            .map((res: Response) => <OrdenEnvio[]>res.json());   

    }
    SeleccionarOrdenEnvio(id: number): Observable<OrdenEnvio> {
        return this._http.get(this.url + 'SeleccionarOrdenEnvio?id=' + id)
            .map((res: Response) => <OrdenEnvio>res.json());   
    }
   
   
    CambiarEstado(ot: OrdenEnvio): Observable<OrdenEnvio> {
        return this._http.post(this.url + 'OrdenEnvio', ot, this.options)
            .map((res: Response) => <OrdenEnvio>res.json()); 


    }
}
