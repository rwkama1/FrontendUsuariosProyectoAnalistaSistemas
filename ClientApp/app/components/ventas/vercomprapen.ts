import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Producto } from '../../entidades/producto';
import { VentaCompraService } from '../../services/ventacompra.service';
import { Compra } from '../../entidades/compra';
import { Http } from '@angular/http';



@Component({
    selector: 'vercomprapen',
    templateUrl: './vercomprapen.html'
})
export class VerCompraPendienteComponent implements OnInit {

 
    vercomprapenForm: FormGroup;
 
    compra 
    venta

    
    get id() { return parseInt((<HTMLInputElement>document.getElementById("idcompra")).value) };

    constructor(public http: Http, private _router: Router, private compraservice: VentaCompraService) {
      
    this.vercomprapenForm = new FormGroup
        (
        {
            idcompra: new FormControl(),
            ingfecha: new FormControl(),
            ingmetodo: new FormControl(),
            ingcedula: new FormControl(),
            ingestado: new FormControl(),
            ingimp: new FormControl(),
            ingsubtotal: new FormControl(),
            ingtotal: new FormControl(),
            ingforma: new FormControl(),
        })
     
        this.compra = JSON.parse(localStorage['comprapendiente']) as Compra;
    }

  
    ngOnInit() {

      
    }
    aceptarCompra()
    {
        this.compraservice.aceptarSolicitud(this.id).subscribe(datafc => {
            this.venta = datafc;
            localStorage.setItem('ventaconvertida', JSON.stringify(this.venta));
         
                this._router.navigate(['/verventa']);
                  
        })
    }
    rechazarCompra() {
        this.compraservice.rechazarSolicitud(this.id).subscribe(datafc => {
            this.compra = datafc;
            localStorage.setItem('comprarechazada', JSON.stringify(this.compra));

            this._router.navigate(['/vercomprarechazada']);

        })
    }
   

}
