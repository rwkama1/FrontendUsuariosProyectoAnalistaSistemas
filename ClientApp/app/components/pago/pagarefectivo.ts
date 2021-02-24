import { Component, Inject, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';




import { PagoService } from '../../services/pago.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Venta } from '../../entidades/venta';



@Component({
    selector: 'pagarefectivo',
    templateUrl: './pagarefectivo.html'
})
export class PagarEfectivoComponent implements OnInit {
    efectivoForm: FormGroup;
    v = JSON.parse(localStorage['pagoventaweb']) as Venta;
    get monto() { return parseInt((<HTMLInputElement>document.getElementById("montoentregado")).value) };
  
    vuelto
    

    constructor(public http: Http, private _router: Router, private _fact: PagoService) {
      
    }

   ngOnInit() {

       this.efectivoForm = new FormGroup
           (
           {

               total: new FormControl(),
              
           }
       );
       this.efectivoForm.patchValue
           (

           {
                   total: '$'+this.v.TotalV,
             
           }
           )
    }
    pagarenefectivo()
    {
        if (this.monto >= this.v.TotalV)
        {
        this._fact.PagarVentaEfectivo(this.monto).subscribe(datafc => {
            this.vuelto = datafc;
            });
            alert("La venta se cobro correctamente")
        }
        else
        {
            alert("El monto entregado debe ser mayor o igual al total de la venta")
        }

    }

}
