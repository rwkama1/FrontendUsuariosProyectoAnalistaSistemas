import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/empservice.service'
import { Usuario } from '../../entidades/usuario';
import { Producto } from '../../entidades/producto';
import { ProdService } from '../../services/prod.service';
import { Http } from '@angular/http';


//import html2pdf from 'html2pdf.js'



@Component({
    selector: 'listarProd',
    templateUrl: './listarProd.html'
})
export class ListarProdComponent implements OnInit {
    public prodList: Producto[] | undefined;
   
  
    constructor(public http: Http, private _router: Router, private _prodService: ProdService) {

    }

    ngOnInit() {
        this._prodService.listarProductos().subscribe(
            data => this.prodList = data
        )
    }
   
  

}

