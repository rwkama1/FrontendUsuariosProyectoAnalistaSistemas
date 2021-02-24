import { Component, Inject, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';




import { PagoService } from '../../services/pago.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Venta } from '../../entidades/venta';



@Component({
    selector: 'pagartarjeta',
    templateUrl: './pagartarjeta.html'
})
export class PagarTarjetaComponent implements OnInit {
    pagartarjetaform
    v = JSON.parse(localStorage['pagoventaweb']) as Venta;
    get numerotarjeta() { return parseInt((<HTMLInputElement>document.getElementById("numerotarjeta")).value) };
    get cedulacliente() { return parseInt((<HTMLInputElement>document.getElementById("cedulacliente")).value) };
    get cantidadcuotas() { return parseInt((<HTMLInputElement>document.getElementById("cantidadcuotas")).value) };
  
   aceptada
  

    constructor(public http: Http, private _router: Router, private _fact: PagoService) {

        this.pagartarjetaform = new FormGroup
            (
            {

              
                cedulacliente: new FormControl(),
               
            }
            );
        this.pagartarjetaform.patchValue
            (

            {
                    cedulacliente: this.v.ClienteV,
            }
            )
      
    }

   ngOnInit() {
      
    }
    pagartarjeta()
    {
        this._fact.PagarVentaTarjeta(this.numerotarjeta,this.cedulacliente,this.cantidadcuotas).subscribe(datafc => {
            this.aceptada = datafc;
            if (datafc == true)
            {
                alert( "Venta Cobrada");
            }
            else
            {
              alert( "Tarjeta Rechazada, Intente Denuevo...");
            }
        });
    }
    volver()
    {
        this._router.navigate(['/listarvwebpago']);
    }

}
