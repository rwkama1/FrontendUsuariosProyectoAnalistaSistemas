import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


import { Producto } from '../../entidades/producto';
import { VentaCompraService } from '../../services/ventacompra.service';
import { Compra } from '../../entidades/compra';
import { Http } from '@angular/http';
import { FacturaCompraService } from '../../services/facturacompra.service';

@Component({
    selector: 'listarFC',
    templateUrl: './listarfc.html'
})
export class ListarFacturaCompraComponent implements OnInit {

   lfacturacompra
   

    constructor(public http: Http, private _router: Router, private fcompraservice: FacturaCompraService)
    {
        
    }
  
    ngOnInit()
    {
        this.fcompraservice.listarFC().subscribe(
            data => this.lfacturacompra = data
        )
           
    }
   
   
}
