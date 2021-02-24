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
    selector: 'cambiarpreciocomentario',
    templateUrl: './cambiarpreciocomentario.html'
})
export class CambiarPrecioComentarioComponent implements OnInit {
    verot

    ordentaller = JSON.parse(localStorage['ordenseleccionada']) as OrdenTaller;
    ot
    get precio() { return parseInt((<HTMLInputElement>document.getElementById("precio")).value) };
    get comentario() { return (<HTMLInputElement>document.getElementById("comentario")).value };

    constructor(public http: Http, private _router: Router, private _fact: OrdenTallerService, private clientes: ClienteService) {

    }

   ngOnInit() {

       this.verot = new FormGroup
           (
           {


               comentario: new FormControl(),
               precio: new FormControl(),
              

           }
           );
       this.verot.patchValue
           (

           {
                   comentario: this.ordentaller.ComentarioOT,
                   precio: this.ordentaller.PrecioOT,
              
           }
           )
    }

    cambiarestado()
    {
        var ans = confirm("ADVERTENCIA: Al cambiar el estado de la orden no se podra volver a un estado anterior"+
        "¿Esta seguro que quiere cambiar el estado de dicha orden ? ");
        if (ans) {
            this._fact.CambiarEstadoOrdenTaller(this.precio, this.comentario).subscribe(datafc => {
                this.ot = datafc;
                localStorage.setItem('ordentallercambiada', JSON.stringify(this.ot));
                this._router.navigate(['/verordentallercambiada']);
            })
        }
        if (!ans) {
            this._router.navigate(['/listarordenestaller']);
        }
     
        
      
    }

    volver()
    {
        this._router.navigate(['/listarordenestaller']);
    }

}
