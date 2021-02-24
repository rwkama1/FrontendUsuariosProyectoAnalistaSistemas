import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/empservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { IngcedulaComponent } from '../ingresarcedula/ingcedula';
import { Administrador } from '../../entidades/admin';
import { Cadete } from '../../entidades/cadete';
import { Cajero } from '../../entidades/cajero';
import { Stocker } from '../../entidades/stocker';
import { Tecnico } from '../../entidades/tecnico';
import { Vendedor } from '../../entidades/vendedor';
import { Http } from '@angular/http';

@Component({
    selector: 'modvendedor',
    templateUrl: './modvendedor.html'
})
export class ModVendedorComponent implements OnInit {
    model: any = {};

    modusuForm: FormGroup;
    vendedor = {} as Vendedor;
    error = "";
    a = JSON.parse(localStorage['vendedor']) as Vendedor;

    get cedula() { return parseInt((<HTMLInputElement>document.getElementById("cedula")).value) };
    get nombre() { return ((<HTMLInputElement>document.getElementById("nombre")).value) };
    get sueldo() { return parseInt((<HTMLInputElement>document.getElementById("sueldo")).value) };
    get clave() { return ((<HTMLInputElement>document.getElementById("clave")).value) };
    constructor(public http: Http, private _router: Router, private _employeeService: EmployeeService) {
        this.modusuForm = new FormGroup
            (
            {
                nombre: new FormControl(),
                cedula: new FormControl(),
                clave: new FormControl(),
                sueldo: new FormControl(),
                fecha: new FormControl(),

            }
            );
        this.modusuForm.patchValue
            (

            {
                cedula: this.a.CedulaUsu,
                nombre: this.a.NombreUsu,
                clave: this.a.ClaveUsu,
                sueldo: this.a.Sueldo,
                fecha: this.a.FechaIngreso,
            }
            )
    }
    ngOnInit() {


    }
    modificarVendedor() {
        var ans = confirm("¿Esta seguro que desea modificar los datos del usuario?");
        if (ans) {
            this.vendedor.CedulaUsu = this.cedula;
            this.vendedor.NombreUsu = this.nombre;
            this.vendedor.ClaveUsu = this.clave;
            this.vendedor.Sueldo = this.sueldo;

            this._employeeService.modificarVendedor(this.vendedor).subscribe(() => { }

            )
            this._router.navigate(['/adminp']);
        }
    }
    eliminarVendedor() {
        var ans = confirm("¿Esta seguro que desea eliminar los datos del usuario?");
        if (ans) {
            this.vendedor.CedulaUsu = this.cedula;
            this.vendedor.CedulaUsu = this.cedula;
            this.vendedor.NombreUsu = this.nombre;
            this.vendedor.ClaveUsu = this.clave;
            this.vendedor.Sueldo = this.sueldo;
            this._employeeService.eliminarVendedor(this.vendedor).subscribe(() => { }

            )
            this._router.navigate(['/adminp']);
        }
    }

}
