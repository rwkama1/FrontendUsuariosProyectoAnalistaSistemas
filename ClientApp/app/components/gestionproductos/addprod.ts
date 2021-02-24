import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Producto } from '../../entidades/producto';
import { ProdService } from '../../services/prod.service';
import { Http } from '@angular/http';
@Component({
    selector: 'addprod',
    templateUrl: './addprod.html'
})
export class AddProdComponent implements OnInit {
    prod = {} as Producto;
  
   
    get nombre() { return ((<HTMLInputElement>document.getElementById("nombre")).value) };
    get descripcion() { return (<HTMLInputElement>document.getElementById("desc")).value };
    get stock() { return parseInt((<HTMLInputElement>document.getElementById("stock")).value) };
    get precio() { return parseInt((<HTMLInputElement>document.getElementById("precio")).value) };
    get cat() { return ((<HTMLInputElement>document.getElementById("categoria")).value) };
    g
    constructor(public http: Http, private _router: Router, private _prodService: ProdService) {
     
    }
    ngOnInit()
    {
        var ans = confirm("No se encontro ningun producto con el id: " +localStorage.getItem("id")
            +" ¿Desea agregar un nuevo producto?");
        if (!ans) {
            localStorage.removeItem("id");
            this._router.navigate(['/ingid']);
        }
      

    }
    addproducto() {
        var ans = confirm("¿Esta seguro que desea agregar el producto al sistema?");
        if (ans) {
           var id = JSON.parse(localStorage.getItem('id'));
            this.prod.IdProducto = id;
           
            this.prod.NomProd = this.nombre;
            this.prod.DescProd = this.descripcion;
            this.prod.PrecioProd = this.precio;
            this.prod.StockProd = this.stock;
            this.prod.UbicProd = "Local";
            this.prod.CatProd = this.cat;

            this._prodService.agregarProducto(this.prod).subscribe(() => { }

            )
            localStorage.removeItem("id");
            this._router.navigate(['/listarProd']); 
        } 
    }
}
