import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/empservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Administrador } from '../../entidades/admin';
import { Http } from '@angular/http';
@Component({
    selector: 'addusu',
    templateUrl: './addusu.html'
})
export class AddusuComponent implements OnInit {
    admin = {} as Administrador;
  
    addusuForm;
    get cedula() { return parseInt((<HTMLInputElement>document.getElementById("cedula")).value) };
    get nombre() { return ((<HTMLInputElement>document.getElementById("nombre")).value) };
    get sueldo() { return parseInt((<HTMLInputElement>document.getElementById("sueldo")).value) };
    get clave() { return ((<HTMLInputElement>document.getElementById("clave")).value) };
    constructor(public http: Http, private _router: Router, private _employeeService: EmployeeService) {

    }
    ngOnInit()
    {
        this.addusuForm = new FormGroup
            (
            {
               
                cedula: new FormControl(),
               

            }
            );
        this.addusuForm.patchValue
            (

            {
                    cedula: localStorage.getItem('cedula'),
              
            }
            )
    }
    addadmin()
    {
        var ans = confirm("¿Esta seguro que desea agregar el usuario al sistema?");
        if (ans) {
            this.admin.CedulaUsu = this.cedula;
            this.admin.NombreUsu = this.nombre;
            this.admin.ClaveUsu = this.clave;
            this.admin.Sueldo = this.sueldo;

            this._employeeService.agregarAdmin(this.admin).subscribe(() => { }

            )
            this._router.navigate(['/adminp']);
        }
    }
}
