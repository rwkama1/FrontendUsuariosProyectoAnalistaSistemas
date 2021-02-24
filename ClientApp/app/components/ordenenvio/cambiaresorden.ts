import { Component, Inject, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';
import { OrdenTallerService } from '../../services/ordetntallerservice';

import { ClienteService } from '../../services/cliente.service';
import { OrdenEnvio } from '../../entidades/ordenenvio';
import { Http } from '@angular/http';
import { OrdenEnvioService } from '../../services/ordenenvioservice';



@Component({
    selector: 'cambiaresorden',
    templateUrl: './cambiaresorden.html'
})
export class CambiarEstadoEnvio implements OnInit {
    verot

    orden = JSON.parse(localStorage['ov']) as OrdenEnvio;
  
    ordenenvio
    constructor(public http: Http, private _router: Router, private _fact: OrdenEnvioService, private clientes: ClienteService) {
    

        this.verot = new FormGroup
            (
            {
              
             
                VentaOE: new FormControl(),
                UbicacionOE: new FormControl(),
                FechaOE: new FormControl(),
                EstadoOE: new FormControl(),
                
               
            }
            );
        this.verot.patchValue
            (

            {
               
                VentaOE: this.orden.VentaOE,
                UbicacionOE: this.orden.UbicacionOE,
                    FechaOE: this.orden.FechaOE,
                    EstadoOE: this.orden.EstadoOE,

            }
            )
      
    }

   ngOnInit() {
      
    }

    cambiarestado() {
        this._fact.CambiarEstado(this.orden).subscribe(datafc => {
            this.ordenenvio = datafc;
            alert("El estado de la orden ha sido cambiado con exito");
        })
    }
    volver()
    {
        this._router.navigate(['/listaropendientes']);
    }

}
