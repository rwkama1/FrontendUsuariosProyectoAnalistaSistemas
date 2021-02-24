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
import { Http } from '@angular/http';

@Component({
    selector: 'modtecnico',
    templateUrl: './modtecnico.html'
})
export class ModTecnicoComponent implements OnInit {
    model: any = {};

    modusuForm: FormGroup;
    tecnico = {} as Tecnico;
    a = JSON.parse(localStorage['tecnico']) as Tecnico;

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
    modificarTecnico() {
        var ans = confirm("¿Esta seguro que desea modificar los datos del usuario?");
        if (ans) {
            this.tecnico.CedulaUsu = this.cedula;
            this.tecnico.NombreUsu = this.nombre;
            this.tecnico.ClaveUsu = this.clave;
            this.tecnico.Sueldo = this.sueldo;

            this._employeeService.modificarTecnico(this.tecnico).subscribe(() => { }

            )
            this._router.navigate(['/adminp']);
        }
    }
    eliminarTecnico() {
        var ans = confirm("¿Esta seguro que desea eliminar el usuario del sistema?");
        if (ans) {
            this.tecnico.CedulaUsu = this.cedula;
            this.tecnico.CedulaUsu = this.cedula;
            this.tecnico.NombreUsu = this.nombre;
            this.tecnico.ClaveUsu = this.clave;
            this.tecnico.Sueldo = this.sueldo;
            this._employeeService.eliminarTecnico(this.tecnico).subscribe(() => { }

            )
            this._router.navigate(['/adminp']);
        }
    }

}
