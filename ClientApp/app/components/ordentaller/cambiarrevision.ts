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
    selector: 'cambiarrevision',
    templateUrl: './cambiarrevision.html'
})
export class CambiarRevisionComponent implements OnInit {
    verot

    ordentaller = JSON.parse(localStorage['ordenseleccionada']) as OrdenTaller;
  ot

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
                    precioot: "$"+this.ordentaller.PrecioOT,
                    comentario: this.ordentaller.ComentarioOT,
                }
            )
      
    }

   ngOnInit() {
      
    }

    cambiarestado()
    {
        var ans = confirm("ADVERTENCIA: Al cambiar el estado de la orden no se podra volver a un estado anterior" +
            "¿Esta seguro que quiere cambiar el estado de dicha orden ? ");
        if (ans) {

            if (this.ordentaller.EstadoOT == "En Revision") {
                this._fact.CambiarEstadoOrdenTaller(0, "").subscribe(datafc => {
                    this.ot = datafc;
                    localStorage.setItem('ordentallercambiada', JSON.stringify(this.ot));
                    this._router.navigate(['/verordentallercambiada']);
                })
            }
            else if (this.ordentaller.EstadoOT == "Presupuestada" || this.ordentaller.EstadoOT == "Aceptada" || this.ordentaller.EstadoOT == "Reparada(Aun en Taller)" || this.ordentaller.EstadoOT == "Reparada(Retirada)") {
                this._router.navigate(['/cambiarpreciocomentario']);
            }
        }
        if (!ans) {
            this._router.navigate(['/listarordenestaller']);
        }
    }
    rechazar()
    {
        if (this.ordentaller.EstadoOT == "En Revision" || this.ordentaller.EstadoOT == "Presupuestada" || this.ordentaller.EstadoOT == "Aceptada") {
            //this._fact.RechazarOrdenTaller(this.).subscribe(datafc => {
            //    this.ot = datafc;
            //    localStorage.setItem('ordentallercambiada', JSON.stringify(this.ot));
                this._router.navigate(['/rechazarnoreparable']);
            //})
        }
    }

    volver()
    {
        this._router.navigate(['/listarordenestaller']);
    }

}
