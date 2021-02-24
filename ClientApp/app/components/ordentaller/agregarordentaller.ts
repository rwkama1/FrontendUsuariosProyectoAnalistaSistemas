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
    selector: 'agregarordentaller',
    templateUrl: './agregarordentaller.html'
})
export class AgregarOrdenTaller implements OnInit {
    addot
    ordentaller = {} as OrdenTaller
    ot
    cliente
    tecnico = JSON.parse(localStorage['tecnico']) as Tecnico;
    producto = JSON.parse(localStorage['prodot']) as Producto;
    get idproducto() { return parseInt((<HTMLInputElement>document.getElementById("idproducto")).value) };
    get cedulatecnico() { return parseInt((<HTMLInputElement>document.getElementById("cedulatecnico")).value) };
    get declcliente() { return (<HTMLInputElement>document.getElementById("declcliente")).value };
    get cedulacliente() { return parseInt((<HTMLInputElement>document.getElementById("cedulacliente")).value) };

    constructor(public http: Http, private _router: Router, private _fact: OrdenTallerService, private clientes: ClienteService) {
        this.clientes.listarcliente().subscribe(
            data => this.cliente = data
        )

        this.addot = new FormGroup
            (
            {

              
                idproducto: new FormControl(),
                cedulatecnico: new FormControl(),
               
            }
            );
        this.addot.patchValue
            (

            {
                    idproducto: this.producto.IdProducto,
                    cedulatecnico:this.tecnico.CedulaUsu
            }
            )
      
    }

   ngOnInit() {
      
    }
    addotaller()
    {

     
        this.clientes.getCliente(this.cedulacliente).subscribe(datacliente => {//
            this.cliente = datacliente;
            if (datacliente == null) {
                var ans = confirm("El cliente ingresado no existe en el sistema....Por Favor verifique la cedula");
            }
            if (datacliente) {

                this.ordentaller.ClienteOT = this.cedulacliente;
                this.ordentaller.TecnicoOT = this.cedulatecnico;
                this.ordentaller.ProductoOT = this.idproducto;
                this.ordentaller.DeclaracionCOT = this.declcliente;
                this._fact.AgregarOrdenTaller(this.ordentaller).subscribe(datafc => {
                    this.ot = datafc;
                    localStorage.setItem('ordentaller', JSON.stringify(this.ot));
                    this._router.navigate(['/verordentaller']);
                });
            }
        }

        );}
    volver()
    {
        this._router.navigate(['/listarproductosot']);
    }

}
