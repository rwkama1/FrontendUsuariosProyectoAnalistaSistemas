import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/empservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { IngcedulaComponent } from '../ingresarcedula/ingcedula';
import { Administrador } from '../../entidades/admin';
import { Http } from '@angular/http';

@Component({
    selector: 'modusu',
    templateUrl: './modusu.html'
})
export class ModusuComponent implements OnInit{
    model: any = {};
    
    modusuForm: FormGroup;
    admin = {} as Administrador;
error
    a =  JSON.parse(localStorage['admin']) as Administrador;
 
    get cedula() { return parseInt((<HTMLInputElement>document.getElementById("cedula")).value) };
    get nombre() { return ((<HTMLInputElement>document.getElementById("nombre")).value) };
    get sueldo() {return  parseInt((<HTMLInputElement>document.getElementById("sueldo")).value) } ;
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
    ngOnInit()
    {
       
       
    }
    modificaradmin()
    {
        var ans = confirm("¿Esta seguro que desea modificar los datos del usuario?");
        if (ans) {
            this.admin.CedulaUsu = this.cedula;
            this.admin.NombreUsu = this.nombre;
            this.admin.ClaveUsu = this.clave;
            this.admin.Sueldo = this.sueldo;

            this._employeeService.modificarAdmin(this.admin).subscribe(() => { }

            )
            this._router.navigate(['/adminp']);
        }
    }
    eliminarAdmin() {
        var ans = confirm("¿Esta seguro que desea eliminar los datos del usuario?");
        if (ans) {
            this.admin.CedulaUsu = this.cedula;
            this.admin.CedulaUsu = this.cedula;
            this.admin.NombreUsu = this.nombre;
            this.admin.ClaveUsu = this.clave;
            this.admin.Sueldo = this.sueldo;
            this._employeeService.eliminarAdmin(this.admin).subscribe(() => { }

            )
            this._router.navigate(['/adminp']);
        }
    }
   
}
