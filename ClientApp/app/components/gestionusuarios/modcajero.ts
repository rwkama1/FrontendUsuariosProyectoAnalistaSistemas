import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/empservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { Cajero } from '../../entidades/cajero';
import { Http } from '@angular/http';

@Component({
    selector: 'modcajero',
    templateUrl: './modcajero.html'
})
export class ModCajeroComponent implements OnInit {
    modusuForm: FormGroup;
    cajero = {} as Cajero;

    a = JSON.parse(localStorage['cajero']) as Cajero;

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
    modificarCajero() {
        var ans = confirm("¿Esta seguro que desea modificar los datos del usuario?");
        if (ans) {
            this.cajero.CedulaUsu = this.cedula;
            this.cajero.NombreUsu = this.nombre;
            this.cajero.ClaveUsu = this.clave;
            this.cajero.Sueldo = this.sueldo;

            this._employeeService.modificarCajero(this.cajero).subscribe(() => { }

            )
            this._router.navigate(['/adminp']);
        }
    }
    eliminarCajero() {
        var ans = confirm("¿Esta seguro que desea eliminar el usuario del sistema?");
        if (ans) {
     
            this.cajero.CedulaUsu = this.cedula;
            this.cajero.CedulaUsu = this.cedula;
            this.cajero.NombreUsu = this.nombre;
            this.cajero.ClaveUsu = this.clave;
            this.cajero.Sueldo = this.sueldo;
            this._employeeService.eliminarCajero(this.cajero).subscribe(() => { }

            )
            this._router.navigate(['/adminp']);
        }
    }

}
