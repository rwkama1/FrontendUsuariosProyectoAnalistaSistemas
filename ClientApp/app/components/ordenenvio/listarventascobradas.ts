import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProdService } from '../../services/prod.service';
import { OrdenEnvioService } from '../../services/ordenenvioservice';
import { Http } from '@angular/http';

@Component({
    selector: 'listarventascobradas',
    templateUrl: './listarventascobradas.html'
})
export class ListarVentasCobradasComponent implements OnInit {

   ventasList
    venta
    get criterio() { return ((<HTMLInputElement>document.getElementById("buscar")).value) };

    constructor(public http: Http, private _router: Router, private _prodservice: ProdService, private _otservice: OrdenEnvioService) {

    }

    ngOnInit() {
        this._otservice.ListarVentasCobradas().subscribe(
            data => this.ventasList = data
        )

    }
    seleccionarVenta(IdVenta: any) {
        this._otservice.SeleccionarVentaCobrada(IdVenta).subscribe(
            data =>
            {
            this.venta = data;
        if (data) {
            localStorage.setItem('ventacobrada', JSON.stringify(this.venta));
            this._router.navigate(['/verventacobrada']);

        }
        });
    }
    buscarVenta() {
        this._otservice.BuscarVentasCobradas(this.criterio).subscribe(
            data => this.ventasList = data
        )
    }
}
