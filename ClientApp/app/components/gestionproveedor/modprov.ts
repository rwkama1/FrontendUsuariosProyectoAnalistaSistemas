import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/empservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { IngcedulaComponent } from '../ingresarcedula/ingcedula';
import { Administrador } from '../../entidades/admin';
import { Cadete } from '../../entidades/cadete';
import { Cajero } from '../../entidades/cajero';
import { ProdService } from '../../services/prod.service';
import { Producto } from '../../entidades/producto';
import { Proveedor } from '../../entidades/proveedores';
import { ProveedorService } from '../../services/proveedor.service';
import { Http } from '@angular/http';

@Component({
    selector: 'modprov',
    templateUrl: './modprov.html'
})
export class ModProvComponent implements OnInit {
    model: any = {};

    modprovForm: FormGroup;
    prov = {} as Proveedor;
    error = "";
    prove = JSON.parse(localStorage['proveedor']) as Proveedor;

    get rut() { return ((<HTMLInputElement>document.getElementById("rut")).value) };
    get nombre() { return ((<HTMLInputElement>document.getElementById("nombre")).value) };
    get direccion() { return (<HTMLInputElement>document.getElementById("direccion")).value };
    get tel() { return ((<HTMLInputElement>document.getElementById("telefono")).value) };

    constructor(public http: Http, private _router: Router, private _provService: ProveedorService) {
        this.modprovForm = new FormGroup
            (
            {
                rut: new FormControl(),
                nombre: new FormControl(),
                direccion: new FormControl(),
                telefono: new FormControl(),
            }
            );

    }
    ngOnInit() {


    }
    modificarProveedor() {
        var ans = confirm("¿Esta seguro que desea modificar el proveedor ?");
        if (ans) {
            this.prov.RutProv = this.rut;
            this.prov.NomProve = this.nombre;
            this.prov.DirProve = this.direccion;
            this.prov.telProve = this.tel;
           

            this._provService.modificarProveedor(this.prov).subscribe(() => { }

            )
            this._router.navigate(['/listarProv']); 
        }
    }
    eliminarProveedor() {
        var ans = confirm("¿Esta seguro que desea eliminar el proveedor ?");
        if (ans) {
            this.prov.RutProv = this.rut;
            this.prov.NomProve = this.nombre;
            this.prov.DirProve = this.direccion;
            this.prov.telProve = this.tel;
            this._provService.eliminarProveedor(this.prov).subscribe(() => { }

            )
            this._router.navigate(['/listarProv']); 
        }
    }

}
