import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


import { Producto } from '../../entidades/producto';
import { VentaCompraService } from '../../services/ventacompra.service';
import { Compra } from '../../entidades/compra';
import { Http } from '@angular/http';

@Component({
    selector: 'listarcompraspen',
    templateUrl: './listarcompraspen.html'
})
export class ListarComprasPendientesComponent implements OnInit {

    public compraList: Compra[] | undefined;
    compra = {} as Compra;
   

    constructor(public http: Http, private _router: Router, private compraservice: VentaCompraService)
    {
        
    }
  
    ngOnInit()
    {
        this.compraservice.listarSolicitudCompras().subscribe(
            data => this.compraList = data
        )
           
    }
    seleccionarCompra(IdC: any) {
        this.compraservice.seleccionarCompra(IdC).subscribe(data => {
            this.compra = data;
            if (data) {
                localStorage.setItem('comprapendiente', JSON.stringify(this.compra));
                this._router.navigate(['/vercomprapen']);
            }

        });
    }
   
}
