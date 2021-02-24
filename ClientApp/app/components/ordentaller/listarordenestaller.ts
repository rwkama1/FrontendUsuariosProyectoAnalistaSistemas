import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


import { Producto } from '../../entidades/producto';

import { ProdService } from '../../services/prod.service';
import { OrdenTallerService } from '../../services/ordetntallerservice';
import { OrdenTaller } from '../../entidades/ordentaller';
import { Http } from '@angular/http';

@Component({
    selector: 'listarordenestaller',
    templateUrl: './listarordenestaller.html'
})
export class ListarOrdenTallerComponent implements OnInit {

    ordenList
    ordentaller
    get criterio() { return ((<HTMLInputElement>document.getElementById("buscar")).value) };

    constructor(public http: Http, private _router: Router, private _prodservice: ProdService,private  _otservice: OrdenTallerService) {

    }

    ngOnInit() {
        this._otservice.listarOrdenTaller().subscribe(
            data => this.ordenList = data
        )

    }
    seleccionarOrdenTaller(IdOrden: any) {
        this._otservice.SeleccionarOrdenTaller(IdOrden).subscribe(data => {
            this.ordentaller = data;
            if (data) {
                 
                if (this.ordentaller.EstadoOT == "No Reparable" || this.ordentaller.EstadoOT == "Rechazada")
                {
                    localStorage.setItem('ordenrechazada', JSON.stringify(this.ordentaller)); 
                    this._router.navigate(['/verordentallerrechazada']);
                }
                else {
                    localStorage.setItem('ordenseleccionada', JSON.stringify(this.ordentaller));
                    this._router.navigate(['/cambiarrevision']);   }
                     
            }

        });
    }
    buscarOrdenTaller() {
        this._otservice.ListarOrdenTallerCriterio(this.criterio).subscribe(
            data => this.ordenList = data
        )
    }
}
