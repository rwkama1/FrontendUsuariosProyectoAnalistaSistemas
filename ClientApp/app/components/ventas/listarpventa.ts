import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Producto } from '../../entidades/producto';
import { ProdService } from '../../services/prod.service';
import { VentaCompraService } from '../../services/ventacompra.service';
import { Http } from '@angular/http';



@Component({
    selector: 'listarpventa',
    templateUrl: './listarpventa.html'
})
export class ListarPVentaComponent implements OnInit {
   
    public prodList: Producto[] | undefined;
    producto = {} as Producto;
    get criterio() { return ((<HTMLInputElement>document.getElementById("buscar")).value) };

    constructor(public http: Http, private _router: Router, private _prodservice: ProdService, private ventaservice: VentaCompraService)
    {
       
    }
  
    ngOnInit()
    {
        this._prodservice.getlistarProductosConStock().subscribe(
            data => this.prodList = data
        )
           
    }
    seleccionarProduct(IdProduct:any) {
        this._prodservice.getProducto(IdProduct).subscribe(data => {
            this.producto = data;
            if (data) {
                localStorage.setItem('productov', JSON.stringify(this.producto));
                this._router.navigate(['/verproductov']);
            }

        });
    }
    buscarProducto() {
        this._prodservice.buscarProductosporCriterio(this.criterio).subscribe(
            data => this.prodList = data
        )
    }
}
