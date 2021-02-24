import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/empservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Vendedor } from '../../entidades/vendedor';
import { Http } from '@angular/http';
@Component({
    selector: 'addvendedor',
    templateUrl: './addvendedor.html'
})
export class AddVendedorComponent implements OnInit {
    vend = {} as Vendedor;
  
    addvendedorForm;
    get cedula() { return parseInt((<HTMLInputElement>document.getElementById("cedula")).value) };
    get nombre() { return ((<HTMLInputElement>document.getElementById("nombre")).value) };
    get sueldo() { return parseInt((<HTMLInputElement>document.getElementById("sueldo")).value) };
    get clave() { return ((<HTMLInputElement>document.getElementById("clave")).value) };
    constructor(public http: Http, private _router: Router, private _employeeService: EmployeeService) {

    }
    ngOnInit() {
        this.addvendedorForm = new FormGroup
            (
            {

                cedula: new FormControl(),


            }
            );
        this.addvendedorForm.patchValue
            (

            {
                cedula: localStorage.getItem('cedula'),

            }
            )
    }
    addvendedor() {
        var ans = confirm("¿Esta seguro que desea agregar el usuario al sistema?");
        if (ans) {
            this.vend.CedulaUsu = this.cedula;
            this.vend.NombreUsu = this.nombre;
            this.vend.ClaveUsu = this.clave;
            this.vend.Sueldo = this.sueldo;

            this._employeeService.agregarVendedor(this.vend).subscribe(() => { }

            )
            this._router.navigate(['/adminp']);
           
        }
    }
}
