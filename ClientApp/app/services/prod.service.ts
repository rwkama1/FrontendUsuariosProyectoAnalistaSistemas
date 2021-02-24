import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Producto } from '../entidades/producto';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers, Response } from '@angular/http';


@Injectable()
export class ProdService {
    url = 'http://www.acarlosbackendd.somee.com/api/';
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });
    constructor(private _http: Http) { }

    getProducto(id: number): Observable<Producto> {
        return this._http.get(this.url + 'Producto?id=' + id)
            .map((res: Response) => <Producto>res.json());

    }
    modificarProducto(prod: Producto) {

        return this._http.put(this.url + 'Producto?id=' + prod.IdProducto, prod, this.options)
            .map((res: Response) => res.json());
            
    }
     
    eliminarproducto(prod: Producto) {
       
        return this._http.put(this.url + 'Producto',prod, this.options)
            .map((res: Response) => res.json());

    }
    agregarProducto(prod: Producto) {
        return this._http.post(this.url + 'Producto', prod, this.options)
            .map((res: Response) => res.json());
    }
    listarProductos(): Observable<Producto[]>
    {
        return this._http.get(this.url + 'Producto')
            .map((res: Response) => <Producto[]> res.json());
    }

    getlistarProductosConStock(): Observable<Producto[]> {
        return this._http.get(this.url + 'ListarProductosConStock')
            .map((res: Response) => <Producto[]>res.json());
            
    }
    buscarProductosporCriterio(criterio: string): Observable<Producto[]> {
        return this._http.get(this.url + 'BuscarProductosporCriterio?criterio=' + criterio)
            .map((res: Response) => <Producto[]>res.json());
    }
}
