import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';



import { FormGroup, FormControl } from '@angular/forms';

import { Compra } from '../../entidades/compra';

//import { content } from 'html2canvas/dist/types/css/property-descriptors/content';
import { Venta } from '../../entidades/venta';
import { VentaCompraService } from '../../services/ventacompra.service';
import { PagoService } from '../../services/pago.service';


@Component({
    selector: 'verventawebpago',
    templateUrl: './verventawebpago.html'
    
})
export class VerVentaPagoWebComponent implements OnInit {
    verventaweb: FormGroup | undefined;
    
    v = JSON.parse(localStorage['pagoventaweb']) as Venta;
   
    constructor(public http: Http, private _router: Router) {

    }

    ngOnInit() {


        this.verventaweb = new FormGroup
            (
            {

                formaentregaweb: new FormControl(),
                fechaventa: new FormControl(),
                venfecha: new FormControl(),
                metodoventaweb: new FormControl(),          
                estdoventaweb: new FormControl(),
                impuestoventaweb: new FormControl(),
                subtotalventaweb: new FormControl(),
                totalventaweb: new FormControl(),
            }
            );
        this.verventaweb.patchValue
            (

            {
                formaentregaweb: this.v.FormaEntregaV,
                venfecha: this.v.VencimientoV,
                fechaventa: this.v.FechaV,
                metodoventaweb: this.v.MetodoPagoV,
                estdoventaweb: this.v.EstadoV,
                impuestoventaweb: '$' + this.v.ImpuestosV,
                subtotalventaweb: '$' + this.v.SubtotalV,
                totalventaweb: '$' + this.v.TotalV,



            }
            )
    }
    pagarefectivo()
    {
        this._router.navigate(['/pagarefectivo']);
    }
    pagartarjeta() {
        this._router.navigate(['/pagartarjeta']);
    }
  
   
}