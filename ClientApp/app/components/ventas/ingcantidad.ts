import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Mensaje } from '../../entidades/mensaje';

import { FormGroup, FormControl } from '@angular/forms';
import { Producto } from '../../entidades/producto';
import { LineaCompra } from '../../entidades/lineacompra';
import { VentaCompraService } from '../../services/ventacompra.service';
import { Http } from '@angular/http';



@Component({
    selector: 'ingresarcantidad',
    templateUrl: './ingresarcantidad.html'
})
export class IngresarCantidadComponent implements OnInit {
  
    
    producto = JSON.parse(localStorage['productov']) as Producto;
    linea
    prodForm;
    
    
    get idprod() { return parseInt((<HTMLInputElement>document.getElementById("idprod")).value) };
    get nomprod() { return parseInt((<HTMLInputElement>document.getElementById("nomprod")).value) };
    get ingcantidad() { return parseInt((<HTMLInputElement>document.getElementById("ingcantidad")).value) };
    

    constructor(public http: Http, private _router: Router, private _fcservice: VentaCompraService) {
      
    }
    ngOnInit(): void {

            this.prodForm = new FormGroup
                (
                {
                    idprod: new FormControl(),
                    nomprod: new FormControl(),
                   

                }
                );
            this.prodForm.patchValue
                (

                {
                    idprod: this.producto.IdProducto,
                        nomprod: this.producto.NomProd,
                       


                }
                )
        
      
    }
    registrarProd() {

        if (this.ingcantidad > this.producto.StockProd) { alert("La cantidad ingresada es mayor a la del stock del producto"); }
        if (this.ingcantidad < this.producto.StockProd)
        {
        this._fcservice.registrarLineaVenta(this.idprod, this.ingcantidad).subscribe(datafc => {
            this.linea = datafc;
            var ans = confirm("Producto registrado.....¿Desea registrar mas productos a la venta?");
            if (ans) {
                this._router.navigate(['/listarpventa']);
            }
            if (!ans) {
                this._router.navigate(['/cerrarventa']);
            }
            })
        }
    }
    volver()
    {
       this._router.navigate(['/listarpventa']);       
    }
   

   


}
