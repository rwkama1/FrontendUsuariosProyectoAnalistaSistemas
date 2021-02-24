import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


import { Producto } from '../../entidades/producto';
import { VentaCompraService } from '../../services/ventacompra.service';
import { Compra } from '../../entidades/compra';
import { Venta } from '../../entidades/venta';
import { PagoService } from '../../services/pago.service';
import { Http } from '@angular/http';

@Component({
    selector: 'listarvpersonalespago',
    templateUrl: './listarventaspersonalespago.html'
})
export class ListarVentasPersonalesPago implements OnInit {

   ventaList
    venta 
   

    constructor(public http: Http, private _router: Router, private pagoservice: PagoService)
    {
        
    }
  
    ngOnInit()
    {
        this.pagoservice.ListarVentasPersonales().subscribe(
            data => this.ventaList = data
        )
           
    }
    seleccionarVenta(IDV: any) {
        this.pagoservice.SeleccionarVenta(IDV).subscribe(data => {
            this.venta = data;
            if (data) {
                localStorage.setItem('pagoventa', JSON.stringify(this.venta));
                this._router.navigate(['/verventapagopersonal']);
            }

        });
    }
   
}
