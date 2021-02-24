import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Producto } from '../entidades/producto';
import { Observable } from 'rxjs/Observable';
import { Proveedor } from '../entidades/proveedores';
import { Http, RequestOptions, Headers, Response } from '@angular/http';


@Injectable()
export class ProveedorService {
    url = 'http://www.acarlosbackendd.somee.com/api/';
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });
    constructor(private _http: Http) { }

    getProveedor(rut: string): Observable<Proveedor> {
        return this._http.get(this.url + 'Proveedor?rut=' + rut)
            .map((res: Response) => <Proveedor>res.json());

    }
    
    modificarProveedor(prov: Proveedor) {
        return this._http.put(this.url + 'Proveedor?rut=' + prov.RutProv, prov, this.options)
            .map((res: Response) => res.json());
           
    }
    eliminarProveedor(prod: Proveedor) {
       
        return this._http.put(this.url + 'Proveedor',prod, this.options)
            .map((res: Response) => res.json());

    }
    agregarProveedor(prod: Proveedor) {
        return this._http.post(this.url + 'Proveedor', prod, this.options)
            .map((res: Response) => res.json());
          
    }
    listarProveedor(): Observable<Proveedor[]> {
        return this._http.get(this.url + 'Proveedor')
            .map((res: Response) => <Proveedor[]>res.json());
    }
}