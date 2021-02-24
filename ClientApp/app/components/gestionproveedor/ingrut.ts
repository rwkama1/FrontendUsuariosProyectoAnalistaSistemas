import { Component, Inject, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Proveedor } from '../../entidades/proveedores';
import { ProveedorService } from '../../services/proveedor.service';
import { Http } from '@angular/http';



@Component({
    selector: 'ingrut',
    templateUrl: './ingrut.html'
})
export class IngrutComponent implements OnInit {

   ingrutForm

    proveedor = {} as Proveedor;
    get ingrut() { return ((<HTMLInputElement>document.getElementById("rut")).value) };

    constructor(public http: Http, private _router: Router, private _provService: ProveedorService
    ) {
    }
    ngOnInit() {


    }


    buscarprov() {
        this.buscarProveedor(this.ingrut);
    }

    buscarProveedor(rut: string) {

        this._provService.getProveedor(rut).subscribe(dataprov => {
            this.proveedor = dataprov;
            if (dataprov) {
                localStorage.setItem('proveedor', JSON.stringify(this.proveedor));
                this._router.navigate(['/modprov']);
            }
            if (dataprov == null) {
                localStorage.setItem('rut', rut);
                this._router.navigate(['/addprov']);
            }
        });

    }

}