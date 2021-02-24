import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/empservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { Stocker } from '../../entidades/stocker';
import { Tecnico } from '../../entidades/tecnico';
import { Http } from '@angular/http';
@Component({
    selector: 'addtecnico',
    templateUrl: './addtecnico.html'
})
export class AddTecnicoComponent implements OnInit {
    tec = {} as Tecnico;
 
    addtecnicoForm;
    get cedula() { return parseInt((<HTMLInputElement>document.getElementById("cedula")).value) };
    get nombre() { return ((<HTMLInputElement>document.getElementById("nombre")).value) };
    get sueldo() { return parseInt((<HTMLInputElement>document.getElementById("sueldo")).value) };
    get clave() { return ((<HTMLInputElement>document.getElementById("clave")).value) };
    constructor(public http: Http, private _router: Router, private _employeeService: EmployeeService) {

    }
    ngOnInit() {
        this.addtecnicoForm = new FormGroup
            (
            {

                cedula: new FormControl(),


            }
            );
        this.addtecnicoForm.patchValue
            (

            {
                cedula: localStorage.getItem('cedula'),

            }
            )
    }
    addtecnico() {
        var ans = confirm("¿Esta seguro que desea agregar el usuario al sistema?");
        if (ans) {
            this.tec.CedulaUsu = this.cedula;
            this.tec.NombreUsu = this.nombre;
            this.tec.ClaveUsu = this.clave;
            this.tec.Sueldo = this.sueldo;

            this._employeeService.agregarTecnico(this.tec).subscribe(() => { }

            )
            this._router.navigate(['/adminp']);
          
        }
    }
}
