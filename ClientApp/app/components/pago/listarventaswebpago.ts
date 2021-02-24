import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


import { Producto } from '../../entidades/producto';
import { VentaCompraService } from '../../services/ventacompra.service';
import { Compra } from '../../entidades/compra';
import { Venta } from '../../entidades/venta';
import { PagoService } from '../../services/pago.service';
import { Http } from '@angular/http';

@Component({
    selector: 'listarvwebpago',
    templateUrl: './listarventaswebpago.html'
})
export class ListarVentasWebPago implements OnInit {

   ventaList
    venta 
    get criterio() { return ((<HTMLInputElement>document.getElementById("buscar")).value) };

    constructor(public http: Http, private _router: Router, private pagoservice: PagoService, private ventaa: VentaCompraService)
    {
        
    }
  
    ngOnInit()
    {
        this.pagoservice.ListarVentasWeb().subscribe(
            data => this.ventaList = data
        )
           
    }
    seleccionarVenta(IDV: any) {
        this.pagoservice.SeleccionarVenta(IDV).subscribe(data => {
            this.venta = data;
            if (data) {
                localStorage.setItem('pagoventaweb', JSON.stringify(this.venta));
                this._router.navigate(['/verventawebpago']);
            }

        });
    }
    buscarVenta() {
        this.ventaa.ListarVentasCriterio(this.criterio).subscribe(
            data => this.ventaList = data
        )
    }
   
}
