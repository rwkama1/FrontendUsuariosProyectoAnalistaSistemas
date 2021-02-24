import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { FacturaCompra } from '../entidades/facturacompra';
import { LineaFacturaCompra } from '../entidades/lineafacturacompra';
import { Http, RequestOptions, Headers, Response } from '@angular/http';


@Injectable()
export class FacturaCompraService {
    url = 'http://www.acarlosbackendd.somee.com/api/';
    headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    options = new RequestOptions({ headers: this.headers });
    constructor(private _http: Http) { }

  
   
    cerrarIngresoFactura(): Observable<FacturaCompra>  {
        return this._http.post(this.url+'FacturaCompra',this.options)
            .map((res: Response) => <FacturaCompra>res.json());
    }
    ingresarNumeroFactura(numero: string, fecha: string, prov: string): Observable<FacturaCompra> {
        return this._http.get(this.url + 'FacturaCompra?numero=' + numero + '&fecha=' + fecha + '&prov=' + prov)
            .map((res: Response) => <FacturaCompra>res.json());
    }
    registrarLineaFatura(id: number, cantidad: number): Observable<LineaFacturaCompra> {
        return this._http.post(this.url +'FacturaCompra?id=' + id + '&cantidad=' + cantidad,this.options)
           .map((res: Response) => <LineaFacturaCompra>res.json());
    }  
    listarFC(): Observable<FacturaCompra[]> {
        return this._http.get(this.url + 'FacturaCompra')
            .map((res: Response) => <FacturaCompra[]>res.json());
    }

}