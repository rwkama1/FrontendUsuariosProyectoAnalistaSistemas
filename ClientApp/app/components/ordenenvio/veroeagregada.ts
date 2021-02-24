import { Component, Inject, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';
import { OrdenTallerService } from '../../services/ordetntallerservice';

import { ClienteService } from '../../services/cliente.service';
import { OrdenEnvio } from '../../entidades/ordenenvio';
import { Http } from '@angular/http';



@Component({
    selector: 'veroeagregada',
    templateUrl: './veroeagregada.html'
})
export class VerOEAgregadaComponent implements OnInit {
    verot

    orden = JSON.parse(localStorage['ordenenvioagregada']) as OrdenEnvio;
  

    constructor(public http: Http, private _router: Router, private _fact: OrdenTallerService, private clientes: ClienteService) {
    

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
   
    volver()
    {
        this._router.navigate(['/listarventascobradas']);
    }

}
