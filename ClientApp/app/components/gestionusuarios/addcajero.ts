import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/empservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Administrador } from '../../entidades/admin';
import { Cadete } from '../../entidades/cadete';
import { Cajero } from '../../entidades/cajero';
import { Http } from '@angular/http';
@Component({
    selector: 'addcajero',
    templateUrl: './addcajero.html'
})
export class AddCajeroComponent implements OnInit {
    cajero = {} as Cajero;
 
    addcajeroForm;
    get cedula() { return parseInt((<HTMLInputElement>document.getElementById("cedula")).value) };
    get nombre() { return ((<HTMLInputElement>document.getElementById("nombre")).value) };
    get sueldo() { return parseInt((<HTMLInputElement>document.getElementById("sueldo")).value) };
    get clave() { return ((<HTMLInputElement>document.getElementById("clave")).value) };
    constructor(public http: Http, private _router: Router, private _employeeService: EmployeeService) {

    }
    ngOnInit() {
        this.addcajeroForm = new FormGroup
            (
            {

                cedula: new FormControl(),


            }
            );
        this.addcajeroForm.patchValue
            (

            {
                cedula: localStorage.getItem('cedula'),

            }
            )
    }
    addcajero() {
        var ans = confirm("¿Esta seguro que desea agregar el usuario al sistema?");
        if (ans) {
            this.cajero.CedulaUsu = this.cedula;
            this.cajero.NombreUsu = this.nombre;
            this.cajero.ClaveUsu = this.clave;
            this.cajero.Sueldo = this.sueldo;

            this._employeeService.agregarCajero(this.cajero).subscribe(() => { }

            )
            this._router.navigate(['/adminp']);
        }
           
        }
    
}
