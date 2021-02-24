import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/empservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Administrador } from '../../entidades/admin';
import { Cadete } from '../../entidades/cadete';
import { Http } from '@angular/http';
@Component({
    selector: 'addcadete',
    templateUrl: './addcadete.html'
})
export class AddCadeteComponent implements OnInit {
    cadete = {} as Cadete;
   
    addcadeteForm;
    get cedula() { return parseInt((<HTMLInputElement>document.getElementById("cedula")).value) };
    get nombre() { return ((<HTMLInputElement>document.getElementById("nombre")).value) };
    get sueldo() { return parseInt((<HTMLInputElement>document.getElementById("sueldo")).value) };
    get clave() { return ((<HTMLInputElement>document.getElementById("clave")).value) };
    constructor(public http: Http, private _router: Router, private _employeeService: EmployeeService) {

    }
    ngOnInit() {
        this.addcadeteForm = new FormGroup
            (
            {

                cedula: new FormControl(),


            }
            );
        this.addcadeteForm.patchValue
            (

            {
                cedula: localStorage.getItem('cedula'),

            }
            )
    }
    addcadete() {

       
            this.cadete.CedulaUsu = this.cedula;
            this.cadete.NombreUsu = this.nombre;
            this.cadete.ClaveUsu = this.clave;
            this.cadete.Sueldo = this.sueldo;
        var ans = confirm("¿Esta seguro que desea agregar el usuario al sistema?");
        if (ans) {
            this._employeeService.agregarCadete(this.cadete).subscribe(() => { }
               
            )
             this._router.navigate(['/adminp']); 
        }
       
        }
    
}
