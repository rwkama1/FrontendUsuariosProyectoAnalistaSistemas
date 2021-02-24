import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MensajeService } from '../../services/mensaje.service';
import { Mensaje } from '../../entidades/mensaje';
import { Vendedor } from '../../entidades/vendedor';
import { Http } from '@angular/http';

@Component({
    selector: 'respmsj',
    templateUrl: './respmsj.html'
})
export class RespmsjComponent implements OnInit {
    model: any = {};

    respForm: FormGroup;
   
  
    mensaje = JSON.parse(localStorage['mensaje']) as Mensaje;
    vendedor = JSON.parse(localStorage['vendedor']) as Vendedor;

    get ComentarioMens() { return ((<HTMLInputElement>document.getElementById("ComentarioMens")).value) };
    get cli() { return parseInt((<HTMLInputElement>document.getElementById("cli")).value) };
    get ven() { return parseInt((<HTMLInputElement>document.getElementById("ven")).value) };
    get resp() { return ((<HTMLInputElement>document.getElementById("resp")).value) };
    
    

    constructor(public http: Http, private _router: Router, private _msjservice: MensajeService) {
        this.respForm = new FormGroup
            (
            {
                ComentarioMens: new FormControl(),
                cli: new FormControl(),
                ven: new FormControl(),
               
                
            }
        );
        this.respForm.patchValue
            (

            {
                    ComentarioMens: this.mensaje.ComentarioMens,
                    cli: this.mensaje.Clicom,
                    ven: this.vendedor.CedulaUsu,
                    
            }
            )

    }
    ngOnInit() {


    }
    respMensaje() {
     
            this.mensaje.ComentarioMens = this.ComentarioMens;
            this.mensaje.RespuestaMens = this.resp;
            this.mensaje.Vendresp = this.vendedor.CedulaUsu;
           
           

            this._msjservice.respnderMensaje(this.mensaje).subscribe(() => { }

            )
            alert("Mensaje respondido")
        }
    
   

}
