import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Producto } from '../../entidades/producto';
import { ProdService } from '../../services/prod.service';
import { Proveedor } from '../../entidades/proveedores';
import { ProveedorService } from '../../services/proveedor.service';
import { Http } from '@angular/http';
@Component({
    selector: 'addprov',
    templateUrl: './addprov.html'
})
export class AddProvComponent implements OnInit {
    prov = {} as Proveedor;

    addprovForm: FormGroup;

    get rut() { return ((<HTMLInputElement>document.getElementById("rut")).value) };
    get nombre() { return ((<HTMLInputElement>document.getElementById("nombre")).value) };
    get direccion() { return (<HTMLInputElement>document.getElementById("direccion")).value };
    get tel() { return ((<HTMLInputElement>document.getElementById("telefono")).value) };
    constructor(public http: Http, private _router: Router, private _prodService: ProveedorService) {
        this.addprovForm = new FormGroup
            (
            {

                rut: new FormControl(),


            }
            )
        this.addprovForm.patchValue
            (

            {
                rut: localStorage.getItem("rut"),

            }
            )

    }
    ngOnInit() {
        var ans = confirm("No se encontro ningun proveedor con el rut: " + localStorage.getItem("rut")
            + " ¿Desea agregar un nuevo proveedor?");
        if (!ans) {
            localStorage.removeItem("rut");
            this._router.navigate(['/ingrut']);
        }


    }
    agregarProveedor() {
        var ans = confirm("¿Esta seguro que desea agregar el proveedor al sistema?");
        if (ans) {

            this.prov.RutProv = this.rut;
            this.prov.NomProve = this.nombre;
            this.prov.DirProve = this.direccion;
            this.prov.telProve = this.tel;

            this._prodService.agregarProveedor(this.prov).subscribe(() => { }

            )
            this._router.navigate(['/listarProv']);
        }
    }
}