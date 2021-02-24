import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Compra } from '../entidades/compra';
import { Observable } from 'rxjs/Observable';
import { Venta } from '../entidades/venta';
import { LineaVenta } from '../entidades/lineaventa';
import { Http, RequestOptions, Headers, Response } from '@angular/http';



@Injectable()
export class VentaCompraService {
    url = 'http://www.acarlosbackendd.somee.com/api/';
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });
    constructor(private _http: Http) { }

   //venta web
    listarSolicitudCompras(): Observable<Compra[]> {
        return this._http.get(this.url + 'VentaWeb')
            .map((res: Response) => <Compra[]>res.json());
    }
    listarProductosMVentas(): Observable<LineaVenta[]> {
        return this._http.get(this.url + 'VentaPersonal/ListarProductosmasVendidos')
            .map((res: Response) => <LineaVenta[]>res.json());
    }
    getCompra(id: number): Observable<Compra> {
        return this._http.get(this.url + 'Compra?id=' + id)
            .map((res: Response) => <Compra>res.json());

    }
    seleccionarCompra(id: number): Observable<Compra> {
        return this._http.get(this.url + 'VentaWeb?id=' + id)
            .map((res: Response) => <Compra>res.json());
    }
    aceptarSolicitud(idcompra:number): Observable<Venta> {
        return this._http.get(this.url + 'VentaWeb/AceptarCompra?idcompra=' + idcompra)
            .map((res: Response) => <Venta>res.json());
    }
    rechazarSolicitud(idcompra: number): Observable<Compra> {
        return this._http.get(this.url + 'VentaWeb/RechazarCompra?idcompra=' + idcompra)
            .map((res: Response) => <Compra>res.json());
         
    }
    buscarVentasWebMetodoPago(criterio: string): Observable<Venta[]> {
        return this._http.get(this.url + 'VentaWeb?criterio=' + criterio)
            .map((res: Response) => <Venta[]>res.json());
    }
    ListarVentasCriterio(criterio: string): Observable<Venta[]> {
        return this._http.get(this.url + 'VentaPersonal/ListarVentasCriterio?criterio=' + criterio)
            .map((res: Response) => <Venta[]>res.json());
    }
    //venta personal
    iniciarVenta() {
        return this._http.head(this.url + 'VentaPersonal');
    }
    registrarLineaVenta(id: number, cantidad: number): Observable<LineaVenta> {
        return this._http.post(this.url + 'VentaPersonal?id=' + id + '&cantidad=' + cantidad, this.options)
            .map((res: Response) => <LineaVenta>res.json());
    }
    cerrarVenta(formaentrega: string, metodopago: string, cedula: number): Observable<Venta> {
        return this._http.post(this.url + 'VentaPersonal?formaentrega=' + formaentrega + '&metodopago=' + metodopago + '&cliente=' + cedula, this.options)
            .map((res: Response) => <Venta>res.json());

    }
    ListarVentasCobradasTodas(): Observable<Venta[]> {
        return this._http.get(this.url + 'VentaWeb/ListarVentasCobradasTodas')
            .map((res: Response) => <Venta[]>res.json());
    }
    BuscarVentasCobradastodas(criterio: string): Observable<Venta[]> {
        return this._http.get(this.url + 'VentaWeb/BuscarVentasCobradastodas?criterio=' + criterio)
            .map((res: Response) => <Venta[]>res.json());
    }
}