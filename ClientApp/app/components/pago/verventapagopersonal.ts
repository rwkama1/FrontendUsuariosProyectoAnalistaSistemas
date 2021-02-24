import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';



import { FormGroup, FormControl } from '@angular/forms';

import { Compra } from '../../entidades/compra';

//import { content } from 'html2canvas/dist/types/css/property-descriptors/content';
import { Venta } from '../../entidades/venta';



@Component({
    selector: 'verventapagopersonal',
    templateUrl: './verventapagopersonal.html'
    
})
export class VerVentaPagoPersonalComponent implements OnInit {
    verventapersonal: FormGroup | undefined;
  
    v = JSON.parse(localStorage['pagoventa']) as Venta;
  
    constructor(public http: Http, private _router: Router) {

    }

    ngOnInit() {


        this.verventapersonal = new FormGroup
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
        this.verventapersonal.patchValue
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


  
   
}