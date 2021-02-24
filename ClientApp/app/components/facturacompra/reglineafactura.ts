import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/empservice.service'
import { Usuario } from '../../entidades/usuario';
import { Producto } from '../../entidades/producto';
import { ProdService } from '../../services/prod.service';
import { ProveedorService } from '../../services/proveedor.service';
import { Proveedor } from '../../entidades/proveedores';
import { FacturaCompraService } from '../../services/facturacompra.service';
import { FacturaCompra } from '../../entidades/facturacompra';
import { Http } from '@angular/http';

@Component({
    selector: 'reglineafactura',
    templateUrl: './reglineafactura.html'
})
export class RegLineaFacturaComponent implements OnInit {
    public productolist: Producto[] | undefined;
    producto = {} as Producto;
    fc = {} as FacturaCompra;
    constructor(public http: Http, private _router: Router, private _fact: FacturaCompraService, private _prodService: ProdService) {

    }

    ngOnInit() {
        this._prodService.listarProductos().subscribe(
            data => this.productolist = data
        )
    }
    seleccionarProducto(IdProducto) {
        localStorage.setItem('producto', JSON.stringify(IdProducto));
         this._router.navigate(['/agregalfc']);
        }
    cerrar() {
        this._fact.cerrarIngresoFactura().subscribe(datafc => {
            this.fc = datafc;
            localStorage.setItem('fc', JSON.stringify(this.fc));
            if (datafc) {
                this._router.navigate(['/cerrarfc']);
            }

        });

    }
}
