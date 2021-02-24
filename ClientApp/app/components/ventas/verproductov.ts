import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Producto } from '../../entidades/producto';
import { ProdService } from '../../services/prod.service';
import { VentaCompraService } from '../../services/ventacompra.service';
import { Http } from '@angular/http';


@Component({
    selector: 'verproductov',
    templateUrl: './verproductov.html'
})
export class VerProductoVComponent implements OnInit {

 
    verpForm: FormGroup;
 

    producto = JSON.parse(localStorage['productov']) as Producto;
    

    
    

    constructor(public http: Http, private _router: Router, private prodervice: ProdService, private ventaService: VentaCompraService) {
        this.verpForm = new FormGroup
            (
            {
                IdProducto: new FormControl(),
                NomProd: new FormControl(),
                DescProd: new FormControl(),
                PrecioProd: new FormControl(),
                CatProd: new FormControl(),
                StockProd: new FormControl(),
            }
        );
        this.verpForm.patchValue
            (

            {
                    IdProducto: this.producto.IdProducto,
                    NomProd: this.producto.NomProd,
                    DescProd: this.producto.DescProd,
                    PrecioProd:"$"+this.producto.PrecioProd,
                    CatProd: this.producto.CatProd,
                    StockProd: this.producto.StockProd,
                 
                    
            }
            )

    }
    ngOnInit() {


    }
    registrarProducto()
    {        
        this._router.navigate(['/ingresarcantidad']);   
    }
    volver()
    { this._router.navigate(['/listarcompraspen']);   }
   
   

}
