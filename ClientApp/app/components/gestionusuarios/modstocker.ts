import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/empservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { IngcedulaComponent } from '../ingresarcedula/ingcedula';
import { Administrador } from '../../entidades/admin';
import { Cadete } from '../../entidades/cadete';
import { Cajero } from '../../entidades/cajero';
import { Stocker } from '../../entidades/stocker';
import { Http } from '@angular/http';

@Component({
    selector: 'modstocker',
    templateUrl: './modstocker.html'
})
export class ModStockerComponent implements OnInit {
    model: any = {};

    modusuForm: FormGroup;
    stocker = {} as Stocker;

    a = JSON.parse(localStorage['stocker']) as Stocker;

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
    modificarStocker() {
        var ans = confirm("¿Esta seguro que desea modificar los datos del usuario?");
        if (ans) {
            this.stocker.CedulaUsu = this.cedula;
            this.stocker.NombreUsu = this.nombre;
            this.stocker.ClaveUsu = this.clave;
            this.stocker.Sueldo = this.sueldo;

            this._employeeService.modificarStocker(this.stocker).subscribe(() => { }

            )
            this._router.navigate(['/adminp']);
        }
    }
    eliminarStocker() {
        var ans = confirm("¿Esta seguro que desea eliminar el usuario del sistema?");
        if (ans) {
            this.stocker.CedulaUsu = this.cedula;
            this.stocker.CedulaUsu = this.cedula;
            this.stocker.NombreUsu = this.nombre;
            this.stocker.ClaveUsu = this.clave;
            this.stocker.Sueldo = this.sueldo;
            this._employeeService.eliminarStocker(this.stocker).subscribe(() => { }

            )
            this._router.navigate(['/adminp']);
        }
    }

}
