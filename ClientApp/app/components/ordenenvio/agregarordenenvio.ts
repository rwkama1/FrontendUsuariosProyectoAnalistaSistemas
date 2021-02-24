import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Venta } from '../../entidades/venta';
import { ClienteService } from '../../services/cliente.service';
import { EmployeeService } from '../../services/empservice.service';
import { OrdenEnvioService } from '../../services/ordenenvioservice';
import { FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';



@Component({
    selector: 'agregarordenenvio',
    templateUrl: './agregarordenenvio.html'
})
export class AgregarOrdenEnvioComponent implements OnInit {
    verot
    ordenenvio
    venta = JSON.parse(localStorage['ventacobrada']) as Venta;
    cadetes
    clientes
    get cedulacadete() { return parseInt((<HTMLInputElement>document.getElementById("cedulacadete")).value) };
    get cedulacliente() { return parseInt((<HTMLInputElement>document.getElementById("cedulacliente")).value)};
    get idventa() { return parseInt((<HTMLInputElement>document.getElementById("idventa")).value) };
    get destino() { return (<HTMLInputElement>document.getElementById("destino")).value };
    get localidad() { return (<HTMLInputElement>document.getElementById("localidad")).value };

    constructor(public http: Http, private _router: Router, private _fact: OrdenEnvioService, private clienteservice: ClienteService, private cadeteservice: EmployeeService) {
        this.cadeteservice.getCadetes().subscribe(
            data => this.cadetes = data
        )
        this.clienteservice.listarcliente().subscribe(
            data => this.clientes = data
        )
        this.verot = new FormGroup
            (
            {

                idventa: new FormControl(),
                clienteweb: new FormControl,
               


            }
            );
        this.verot.patchValue
            (

            {
                    idventa: this.venta.IdV,
                    clienteweb: this.venta.ClienteV,
                

            }
            )
    }

   ngOnInit() {
      
    }

    addoe()
    {

        this._fact.AgregarOrdenEnvio(this.cedulacadete, this.cedulacliente, this.idventa, this.destino, this.localidad).subscribe(datafc => {
            this.ordenenvio = datafc;
            localStorage.setItem('ordenenvioagregada', JSON.stringify(this.ordenenvio));
                this._router.navigate(['/veroeagregada']);
            })
        
      
    }

    volver()
    {
        this._router.navigate(['/listarventascobradas']);
    }

}
