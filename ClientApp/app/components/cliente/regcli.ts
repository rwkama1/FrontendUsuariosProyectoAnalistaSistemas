import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Cliente } from '../../entidades/cliente';
import { ClienteService } from '../../services/cliente.service';
import { Http } from '@angular/http';



@Component({
    selector: 'regcli',
    templateUrl: './regcli.html'
})
export class RegCliComponent implements OnInit {
    cliente = {} as Cliente;
    cliexist
   regcliForm: FormGroup | undefined;

    get cedula() { return parseInt((<HTMLInputElement>document.getElementById("cedula")).value) };
    get nombre() { return ((<HTMLInputElement>document.getElementById("nombre")).value) };
    get direccion() { return (<HTMLInputElement>document.getElementById("direccion")).value };
    get tel() { return ((<HTMLInputElement>document.getElementById("telefono")).value) };
   
    constructor(public http: Http, private _router: Router, private _cliservice: ClienteService) {
      
    }
    ngOnInit() {
      


    }
    registrarCliente() {
      

        this._cliservice.getCliente(this.cedula).subscribe(datacliente => {//
            this.cliexist = datacliente;
            if (datacliente) {
                alert("La cedula del cliente ya existe en el sistema")
            }
            if (datacliente == null) {
                this.cliente.CedulaCli = this.cedula;
                this.cliente.NomCli = this.nombre;
                this.cliente.DirCli = this.direccion;
                this.cliente.telCli = this.tel;
                this.cliente.PassCli = this.cedula.toString();

                this._cliservice.agregarCliente(this.cliente).subscribe(() => { }

                )
                var ans = confirm("El cliente se registro correctamente.....¿Desea volver a la venta?");
                if (ans) {
                    this._router.navigate(['/cerrarventa']);
                }
                if (!ans) {
                    this._router.navigate(['/listarcompraspen']);
                }
               

            }
        });

    }

 }