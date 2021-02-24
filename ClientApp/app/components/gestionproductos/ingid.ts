import { Component, Inject, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';



import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProdService } from '../../services/prod.service';
import { Producto } from '../../entidades/producto';
import { Http } from '@angular/http';



@Component({
    selector: 'ingid',
    templateUrl: './ingid.html'
})
export class IngidComponent implements OnInit {



    producto = {} as Producto;
    get ingid() { return parseInt((<HTMLInputElement>document.getElementById("id")).value) };

    constructor(public http: Http, private _router: Router, private _prodService: ProdService
    ) {
    }
    ngOnInit()
    {


    }


    buscarprod() {
        this.buscarproductos(this.ingid)
    }

    buscarproductos(id: number) {

        this._prodService.getProducto(id).subscribe(dataprod => {
            this.producto = dataprod;
            if (dataprod) {
                localStorage.setItem('producto', JSON.stringify(this.producto));
                this._router.navigate(['/modprod']);
            }
            if (dataprod == null)
            {
                    localStorage.setItem('id', JSON.stringify(id));
                    this._router.navigate(['/addprod']);
            }
        });

    }

}