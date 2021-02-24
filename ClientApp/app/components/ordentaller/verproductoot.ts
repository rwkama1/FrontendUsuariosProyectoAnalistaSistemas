import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Producto } from '../../entidades/producto';
import { ProdService } from '../../services/prod.service';
import { Http } from '@angular/http';


@Component({
    selector: 'verproductoot',
    templateUrl: './verproductoot.html'
})
export class VerProductoOTComponent implements OnInit {

 
    verpForm: FormGroup;
 

    producto = JSON.parse(localStorage['prodot']) as Producto;
    

    
    

    constructor(public http: Http, private _router: Router, private prodervice: ProdService) {
        this.verpForm = new FormGroup
            (
            {
                IdProducto: new FormControl(),
                NomProd: new FormControl(),
                DescProd: new FormControl(),
                PrecioProd: new FormControl(),
                CatProd: new FormControl(),
              
               
                
            }
        );
        this.verpForm.patchValue
            (

            {
                    IdProducto: this.producto.IdProducto,
                    NomProd: this.producto.NomProd,
                    DescProd: this.producto.DescProd,
                    PrecioProd:"$"+this.producto.PrecioProd,
                    CatProd: this.producto.CatProd,
                 
                    
            }
            )

    }
    ngOnInit() {


    }
    iraddOT()
    {        
        this._router.navigate(['/agregarordentaller']);   
    }
   
    volver() {
        this._router.navigate(['/listarproductosot']);
    }

}
