import { Component, Inject, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';





import { PagoService } from '../../services/pago.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Venta } from '../../entidades/venta';
import { Tecnico } from '../../entidades/tecnico';
import { OrdenTaller } from '../../entidades/ordentaller';
import { OrdenTallerService } from '../../services/ordetntallerservice';
import { Producto } from '../../entidades/producto';
import { ClienteService } from '../../services/cliente.service';



@Component({
    selector: 'verordentaller',
    templateUrl: './verordentaller.html'
})
export class VerOrdenTallerComponent implements OnInit {
    verot

    ordentaller = JSON.parse(localStorage['ordentaller']) as OrdenTaller;
  

    constructor(public http: Http, private _router: Router, private _fact: OrdenTallerService, private clientes: ClienteService) {
    

        this.verot = new FormGroup
            (
            {

              
                idproducto: new FormControl(),
                cedulatecnico: new FormControl(),
                declaracioncliente: new FormControl(),
                cedulacliente: new FormControl(),
                fechaorden: new FormControl(),
                estadoorden: new FormControl(),
                precioot: new FormControl(),
                comentario: new FormControl(),
               
            }
            );
        this.verot.patchValue
            (

            {
                idproducto: this.ordentaller.ProductoOT,
                    cedulatecnico: this.ordentaller.TecnicoOT,
                    declaracioncliente: this.ordentaller.DeclaracionCOT,
                    cedulacliente: this.ordentaller.ClienteOT,
                    fechaorden: this.ordentaller.FechaOT,
                    estadoorden: this.ordentaller.EstadoOT,
                    precioot: "$" + this.ordentaller.PrecioOT,
                    comentario: this.ordentaller.ComentarioOT,

            }
            )
      
    }

   ngOnInit() {
      
    }
   
    volver()
    {
        this._router.navigate(['/listarproductosot']);
    }

}
