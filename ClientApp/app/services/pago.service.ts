import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Venta } from '../entidades/venta';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers, Response } from '@angular/http';

@Injectable()
export class PagoService {
    url = 'http://www.acarlosbackendd.somee.com/api/';
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });
    constructor(private _http: Http) { }
    ListarVentasPersonales(): Observable<Venta[]> {
        return this._http.get(this.url + 'ListarVentasPersonales')
              .map((res: Response) => <Venta[]>res.json());
    }
    ListarVentasWeb(): Observable<Venta[]> {
        return this._http.get(this.url + 'ListarVentasWeb')
            .map((res: Response) => <Venta[]>res.json());
    }
    SeleccionarVenta(id: number): Observable<Venta> {
        return this._http.get(this.url + 'SeleccionarVenta?id=' + id)
            .map((res: Response) => <Venta>res.json());
    }
    PagarVentaEfectivo(montoEntregado: number): Observable<number> {
        return this._http.get(this.url + 'PagarVentaEfectivo?montoEntregado=' + montoEntregado)
            .map((res: Response) => <number>res.json());

    }
    PagarVentaTarjeta(numeroTarjeta: number, cedulaCliente: number, cantidadCuotas: number): Observable<boolean> {
        return this._http.get(this.url + 'PagarVentaTarjeta?numeroTarjeta=' + numeroTarjeta + '&cedulaCliente=' + cedulaCliente + '&cantidadCuotas=' + cantidadCuotas)
            .map((res: Response) => <boolean>res.json());
    }
}