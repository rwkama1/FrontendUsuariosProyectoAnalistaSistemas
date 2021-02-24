import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/empservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { IngcedulaComponent } from '../ingresarcedula/ingcedula';
import { Administrador } from '../../entidades/admin';
import { Cadete } from '../../entidades/cadete';
import { Http } from '@angular/http';

@Component({
    selector: 'modcadete',
    templateUrl: './modcadete.html'
})
export class ModcadeteComponent implements OnInit {
    model: any = {};

    modusuForm: FormGroup;
    cadete = {} as Cadete;
   
    a = JSON.parse(localStorage['cadete']) as Cadete;

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
    modificarCadete() {
        var ans = confirm("¿Esta seguro que desea modificar los datos del usuario?");
        if (ans) {
            this.cadete.CedulaUsu = this.cedula;
            this.cadete.NombreUsu = this.nombre;
            this.cadete.ClaveUsu = this.clave;
            this.cadete.Sueldo = this.sueldo;

            this._employeeService.modificarCadete(this.cadete).subscribe(() => { }

            )
            this._router.navigate(['/adminp']);
        }
    }
    eliminarCadete() {
        var ans = confirm("¿Esta seguro que desea eliminar el usuario del sistema?");
        if (ans) {
            this.cadete.CedulaUsu = this.cedula;
            this.cadete.CedulaUsu = this.cedula;
            this.cadete.NombreUsu = this.nombre;
            this.cadete.ClaveUsu = this.clave;
            this.cadete.Sueldo = this.sueldo;
            this._employeeService.eliminarCadete(this.cadete).subscribe(() => { }

            )
            this._router.navigate(['/adminp']);
        }
    }

}
