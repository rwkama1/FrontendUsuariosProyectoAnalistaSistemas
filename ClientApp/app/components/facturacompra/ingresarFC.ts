import { Component, Inject, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/empservice.service'
import { Usuario } from '../../entidades/usuario';


import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FacturaCompra } from '../../entidades/facturacompra';
import { Proveedor } from '../../entidades/proveedores';
import { FacturaCompraService } from '../../services/facturacompra.service';
import { ProveedorService } from '../../services/proveedor.service';
import { Http } from '@angular/http';




@Component({
    selector: 'ingresarFC',
    templateUrl: './ingresarFC.html'
})
export class IngresarFCComponent implements OnInit {

    public provedores: Proveedor[] | undefined;

    error = "";
 


    fc = {} as FacturaCompra;
   
    get ingfc() { return ((<HTMLInputElement>document.getElementById("ingnumero")).value) };
    get ingfecha() { return ((<HTMLInputElement>document.getElementById("ingfecha")).value) };
    get ingrut() { return ((<HTMLInputElement>document.getElementById("ingrut")).value) };

    constructor(public http: Http, private _router: Router, private _factservice: FacturaCompraService, private _provservice: ProveedorService
    ) {
    }
    ngOnInit() {
        this._provservice.listarProveedor().subscribe(
            data => this.provedores = data
        )

    }


    ingresarFC() {
        this._factservice.ingresarNumeroFactura(this.ingfc, this.ingfecha, this.ingrut).subscribe(datafc => {
      
       
            this.fc = datafc;
            localStorage.setItem('fc', JSON.stringify(this.fc));
                if (datafc) {
                    this._router.navigate(['/verfc']);
                }
               
            
           if (datafc == null) {
               var ans = confirm("No se encontro ninguna factura con el numero: " + this.ingfc + " y  rut de proveedor: " + this.ingrut
                   + " ¿Desea agregar una nueva Factura?");
               if (ans) {
                   this._router.navigate(['/reglineafactura']);
               }

           
        }
    });



    }
}