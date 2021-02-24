import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


import { Producto } from '../../entidades/producto';

import { ProdService } from '../../services/prod.service';
import { OrdenTallerService } from '../../services/ordetntallerservice';
import { Http } from '@angular/http';

@Component({
    selector: 'listarproductosot',
    templateUrl: './listarproductosot.html'
})
export class ListarProductosOrdenTaller implements OnInit {

    public prodList: Producto[] | undefined;
    producto = {} as Producto;
    get criterio() { return ((<HTMLInputElement>document.getElementById("buscar")).value) };

    constructor(public http: Http, private _router: Router, private _prodservice: ProdService,private  _otservice: OrdenTallerService) {

    }

    ngOnInit() {
        this._prodservice.listarProductos().subscribe(
            data => this.prodList = data
        )

    }
    seleccionarProduct(IdProduct: any) {
        this._otservice.IngresarProducto(IdProduct).subscribe(data => {
            this.producto = data;
            if (data) {
                localStorage.setItem('prodot', JSON.stringify(this.producto));
                this._router.navigate(['/verproductoot']);
            }

        });
    }
    buscarProducto() {
        this._prodservice.buscarProductosporCriterio(this.criterio).subscribe(
            data => this.prodList = data
        )
    }
}
