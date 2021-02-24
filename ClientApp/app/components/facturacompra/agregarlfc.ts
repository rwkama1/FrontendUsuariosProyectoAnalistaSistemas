import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Mensaje } from '../../entidades/mensaje';
import { MensajeService } from '../../services/mensaje.service';
import { FacturaCompraService } from '../../services/facturacompra.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Producto } from '../../entidades/producto';
import { LineaFacturaCompra } from '../../entidades/lineafacturacompra';
import { Http } from '@angular/http';

@Component({
    selector: 'agregalfc',
    templateUrl: './agregalfc.html'
})
export class AgregarLFCComponent implements OnInit {
  
   
    producto = parseInt((localStorage['producto'])) as number;
    linea = {} as LineaFacturaCompra;
    prodForm;
    ingimporte: any;
    get idprod() { return parseInt((<HTMLInputElement>document.getElementById("idprod")).value) };
    get ingcantidad() { return parseInt((<HTMLInputElement>document.getElementById("ingcantidad")).value) };
  
    

    constructor(public http: Http, private act: ActivatedRoute, private _router: Router, private _fcservice: FacturaCompraService) {
      

        
    }
    ngOnInit(): void {
       
        this.prodForm = new FormGroup
            (
            {
                idprod: new FormControl(),

            }
            );
        this.prodForm.patchValue
            (

            {
                idprod: this.producto,


            }
            )
    }
    registrarProd() {

        var ans = confirm("Desea registrar el producto con id: " + this.idprod + " con una cantidad de " + this.ingcantidad+
            " unidades?");
        if (ans) {
            this._fcservice.registrarLineaFatura(this.idprod, this.ingcantidad).subscribe(datafc => {
                this.linea = datafc;
                this.ingimporte = this.linea.ImporteLFC;
            })

        }
        else
        {
            this._router.navigate(['/agregalfc']);
        }
      
    }
    volver()
    {
        this._router.navigate(['/reglineafactura']);
    }

    //seleccionarMensaje(IdMensaje)
    //{
    //    this._msjservice.getMensaje(IdMensaje).subscribe(data => {
    //        this.mensaje = data;
    //        if (data) {
    //            localStorage.setItem('mensaje', JSON.stringify(this.mensaje));
    //            this._router.navigate(['/respmsj']);
    //        }
           
    //    });
    //}


}
