import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/empservice.service'
import { Usuario } from '../../entidades/usuario';
//import print-js from 'print-js';
import { Producto } from '../../entidades/producto';
import { ProdService } from '../../services/prod.service';
import { Http } from '@angular/http';
import { VentaCompraService } from '../../services/ventacompra.service';
//import * as jsPDF from 'jspdf'
//import  html2canvas from 'html2canvas'

//import html2pdf from 'html2pdf.js'



@Component({
    selector: 'listProdMV',
    templateUrl: './listarProdMV.html'
})
export class ListarProdMVComponent implements OnInit {
   listLineaV
   

    //@ViewChild('pdf') content: ElementRef;
    constructor(public http: Http, private _router: Router, private ventaservice: VentaCompraService) {

    }

    ngOnInit() {
        this.ventaservice.listarProductosMVentas().subscribe(
            data => this.listLineaV = data
        )
    }
    printDiv() {
  //Id of the table
       /* let jspdf = require('jspdf')*/
    //   var  data = document.getElementById('content');
    //    html2canvas(data).then(canvas => {  
    //  // Few necessary setting options  
    //  let imgWidth = 208;   
    //  let pageHeight = 295;    
    //  let imgHeight = canvas.height * imgWidth / canvas.width;  
    //  let heightLeft = imgHeight;  

    //  const contentDataURL = canvas.toDataURL('image/png')  
    //    let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
    //  let position = 0;  
    //  pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
    //  pdf.save('ListadoProductos.pdf'); // Generated PDF   
    //});  
    //    //let html2pdf = require('html2pdf.js');
    //////    const element = this.content.nativeElement;
    ////    const element = this.content.nativeElement;
    ////    var opt = {
    //        margin: 1,
    //        filename: 'productos.pdf',
    //        image: { type: 'jpeg', quality: 0.98 },
    //        html2canvas: { scale: 2 },
    //        jsPDF: { unit: 'landscape', format: 'pt', orientation: 'A4' }
    //    };
    //    html2pdf().from(element).set(opt).save();
    }
  

}

