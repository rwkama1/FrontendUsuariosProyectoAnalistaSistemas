import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';
import { VentaCompraService } from '../../services/ventacompra.service';
import { Http } from '@angular/http';
import { ClienteService } from '../../services/cliente.service';



@Component({
    selector: 'cerrarventa',
    templateUrl: './cerrarventa.html'
})
export class CerrarVentaComponent implements OnInit {
  
    fc 
    cliexist
    get metodopago() { return ((<HTMLInputElement>document.getElementById("metodopago")).value) };
    get cli() { return parseInt((<HTMLInputElement>document.getElementById("cli")).value) };
    get formaentrega() { return ((<HTMLInputElement>document.getElementById("formaentrega")).value) };
    constructor(public http: Http, private _router: Router, private _fact: VentaCompraService, private clis: ClienteService) {
      
    }

   ngOnInit() {
      
    }
    cerrarVenta()
    {
        this.clis.getCliente(this.cli).subscribe(datacliente => {//
            this.cliexist = datacliente;
            if (datacliente == null) {
                var ans = confirm("La cedula del cliente ingresada no existe en el sistema....¿Desea agregar un nuevo cliente antes de cerrar la venta?");
                if (ans)
                {
                    this._router.navigate(['/regcli']);
                }
                if (!ans) {
                    this._router.navigate(['/cerrarventa']);
                }
            }
            if (datacliente) {
                this._fact.cerrarVenta(this.formaentrega, this.metodopago, this.cli).subscribe(datafc => {
                    this.fc = datafc;
                    localStorage.setItem('Venta', JSON.stringify(this.fc));
                    if (datafc) {
                        this._router.navigate(['/verventapersonal']);
                    }
                });
            }
        });
    }
    volver()
    {
        this._router.navigate(['/listarpventa']);  
    }
}
