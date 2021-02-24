import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Mensaje } from '../../entidades/mensaje';
import { MensajeService } from '../../services/mensaje.service';
import { Http } from '@angular/http';

@Component({
    selector: 'listmsj',
    templateUrl: './listmsj.component.html'
})
export class ListmsjComponent implements OnInit {
    public msjList: Mensaje[] | undefined;
    mensaje = {} as Mensaje;
    constructor(public http: Http, private _router: Router, private _msjservice: MensajeService) {
      
    }

   ngOnInit() {
       this._msjservice.getMensajesClientes().subscribe(
           data => this.msjList = data
        )
    } 
    seleccionarMensaje(IdMensaje)
    {
        this._msjservice.getMensaje(IdMensaje).subscribe(data => {
            this.mensaje = data;
            if (data) {
                localStorage.setItem('mensaje', JSON.stringify(this.mensaje));
                this._router.navigate(['/respmsj']);
            }
           
        });
    }


}
