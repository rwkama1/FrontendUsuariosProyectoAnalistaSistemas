import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/empservice.service'
import { Usuario } from '../../entidades/usuario';

import { Producto } from '../../entidades/producto';
import { ProdService } from '../../services/prod.service';
import { ProveedorService } from '../../services/proveedor.service';
import { Proveedor } from '../../entidades/proveedores';
import { Http } from '@angular/http';

@Component({
    selector: 'listarProv',
    templateUrl: './listarProv.html'
})
export class ListarProvComponent implements OnInit {
    public provList: Proveedor[] | undefined;

    constructor(public http: Http, private _router: Router, private _prodService: ProveedorService) {

    }

    ngOnInit() {
        this._prodService.listarProveedor().subscribe(
            data => this.provList = data
        )
    }


}
