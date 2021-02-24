import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProdService } from '../../services/prod.service';
import { OrdenEnvioService } from '../../services/ordenenvioservice';
import { Http } from '@angular/http';
import { VentaCompraService } from '../../services/ventacompra.service';

@Component({
    selector: 'listarventasvcobradas',
    templateUrl: './listarventavcobrada.html'
})
export class ListarVentasVCobradasComponent implements OnInit {

    ventasList
    venta
    get criterio() { return ((<HTMLInputElement>document.getElementById("buscar")).value) };

    constructor(public http: Http, private _router: Router, private venservice: VentaCompraService, private _otservice: OrdenEnvioService) {

    }

    ngOnInit() {
        this.venservice.ListarVentasCobradasTodas().subscribe(
            data => this.ventasList = data
        )

    }
   
    buscarVenta() {
        this.venservice.BuscarVentasCobradastodas(this.criterio).subscribe(
            data => this.ventasList = data
        )
    }
}
