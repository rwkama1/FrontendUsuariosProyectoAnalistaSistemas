import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { IngcedulaComponent } from '../ingresarcedula/ingcedula';
import { Administrador } from '../../entidades/admin';
import { Cadete } from '../../entidades/cadete';
import { Cajero } from '../../entidades/cajero';
import { ProdService } from '../../services/prod.service';
import { Producto } from '../../entidades/producto';
import { Http } from '@angular/http';

@Component({
    selector: 'modprod',
    templateUrl: './modprod.html'
})
export class ModProductoComponent implements OnInit {
    model: any = {};

    modprodForm: FormGroup;
    prdoucto = {} as Producto;
    
    a = JSON.parse(localStorage['producto']) as Producto;

    get id() { return parseInt((<HTMLInputElement>document.getElementById("id")).value) };
    get nombre() { return ((<HTMLInputElement>document.getElementById("nombre")).value) };
    get descripcion() { return (<HTMLInputElement>document.getElementById("desc")).value };
    get stock() { return parseInt((<HTMLInputElement>document.getElementById("stock")).value) };
    get precio() { return parseInt((<HTMLInputElement>document.getElementById("precio")).value) };
    get cat() { return ((<HTMLInputElement>document.getElementById("categoria")).value) };
 
    constructor(public http: Http, private _router: Router, private _prodService: ProdService) {
        this.modprodForm = new FormGroup
            (
            {
                id: new FormControl(),
                nombre: new FormControl(),
                desc: new FormControl(),
                stock: new FormControl(),
                categoria: new FormControl(),
                ubicacion: new FormControl(),
                precio: new FormControl(),
               

            }
            );
       
    }
    ngOnInit() {


    }
    modificarProducto() {
        var ans = confirm("¿Esta seguro que desea modificar los datos del producto?");
        if (ans) {
            this.prdoucto.IdProducto = this.id;
            this.prdoucto.NomProd = this.nombre;
            this.prdoucto.DescProd = this.descripcion;
            this.prdoucto.PrecioProd = this.precio;
            this.prdoucto.StockProd = this.stock;
            this.prdoucto.UbicProd = "Local";
            this.prdoucto.CatProd = this.cat;

            this._prodService.modificarProducto(this.prdoucto).subscribe(() => { }

            )
            this._router.navigate(['/listarProd']); 
        }
    }
    eliminarProducto() {
        var ans = confirm("¿Esta seguro que desea eliminar el producto del sistema?");
        if (ans) {
            this.prdoucto.IdProducto = this.id;
            this.prdoucto.NomProd = this.nombre;
            this.prdoucto.DescProd = this.descripcion;
            this.prdoucto.PrecioProd = this.precio;
            this.prdoucto.StockProd = this.stock;   
            this.prdoucto.CatProd = this.cat;
            this._prodService.eliminarproducto(this.prdoucto).subscribe(() => { }

            )
            this._router.navigate(['/listarProd']); 
           
        }
    }

}
