import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/empservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { Stocker } from '../../entidades/stocker';
import { Http } from '@angular/http';
@Component({
    selector: 'addstocker',
    templateUrl: './addstocker.html'
})
export class AddStockerComponent implements OnInit {
    stocker = {} as Stocker;
   
    addstockerForm;
    get cedula() { return parseInt((<HTMLInputElement>document.getElementById("cedula")).value) };
    get nombre() { return ((<HTMLInputElement>document.getElementById("nombre")).value) };
    get sueldo() { return parseInt((<HTMLInputElement>document.getElementById("sueldo")).value) };
    get clave() { return ((<HTMLInputElement>document.getElementById("clave")).value) };
    constructor(public http: Http, private _router: Router, private _employeeService: EmployeeService) {

    }
    ngOnInit() {
        this.addstockerForm = new FormGroup
            (
            {

                cedula: new FormControl(),


            }
            );
        this.addstockerForm.patchValue
            (

            {
                cedula: localStorage.getItem('cedula'),

            }
            )
    }
    addstocker() {
        var ans = confirm("¿Esta seguro que desea agregar el usuario al sistema?");
        if (ans) {
            this.stocker.CedulaUsu = this.cedula;
            this.stocker.NombreUsu = this.nombre;
            this.stocker.ClaveUsu = this.clave;
            this.stocker.Sueldo = this.sueldo;

            this._employeeService.agregarStocker(this.stocker).subscribe(() => { }

            )
            this._router.navigate(['/adminp']);
        }
        
    }
}
