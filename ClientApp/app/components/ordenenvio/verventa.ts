import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { Compra } from '../../entidades/compra';


import { Venta } from '../../entidades/venta';
import { VentaCompraService } from '../../services/ventacompra.service';


@Component({
    selector: 'verventacobrada',
    templateUrl: './verventacobrada.html'
    
})
export class VerVentaCobradaComponent implements OnInit {
    verventa: FormGroup | undefined;
  
    v = JSON.parse(localStorage['ventacobrada']) as Venta;
    constructor(public http: Http, private _router: Router, private _fact: VentaCompraService) {
        
    }

    ngOnInit() {

        
        this.verventa = new FormGroup
            (
            {
               
                fechaventa: new FormControl(),
                venfecha: new FormControl(),
                metodoventaweb: new FormControl(),
                estdoventaweb: new FormControl(),
                impuestoventaweb: new FormControl(),
                subtotalventaweb: new FormControl(),
                clienteweb: new FormControl(),
                totalventaweb: new FormControl(),
                
            }
            );
        this.verventa.patchValue
            (

            {
                  
                    venfecha: this.v.VencimientoV,
                    fechaventa: this.v.FechaV,
                    metodoventaweb: this.v.MetodoPagoV,
                    estdoventaweb: this.v.EstadoV,
                    clienteweb: this.v.ClienteV,
                    impuestoventaweb: '$' + this.v.ImpuestosV,
                    subtotalventaweb: '$' + this.v.SubtotalV,
                    totalventaweb: '$' + this.v.TotalV,
              


            }
            )
    }
    addoe()
    {
        this._router.navigate(['/agregarordenenvio']);
}
    volver()
    {
        this._router.navigate(['/listarventascobradas']);
    }
}