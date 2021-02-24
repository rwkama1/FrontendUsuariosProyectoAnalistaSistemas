import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProdService } from '../../services/prod.service';
import { OrdenEnvioService } from '../../services/ordenenvioservice';
import { Http } from '@angular/http';

@Component({
    selector: 'listaropendientes',
    templateUrl: './listordenvpend.html'
})
export class ListarOPendientes implements OnInit {

ordenenviolist
    ordenenvio
   

    constructor(public http: Http, private _router: Router, private _prodservice: ProdService, private _otservice: OrdenEnvioService) {

    }

    ngOnInit() {
        this._otservice.ListarOrdenEnvioPendientes().subscribe(
            data => this.ordenenviolist = data
        )

    }
    seleccionarOrden(IdOrden: any) {
        this._otservice.SeleccionarOrdenEnvio(IdOrden).subscribe(
            data =>
            {
                this.ordenenvio = data;
                if (data) {
                    localStorage.setItem('ov', JSON.stringify(this.ordenenvio));
            this._router.navigate(['/cambiaresorden']);

        }
        });
    }
 
}
