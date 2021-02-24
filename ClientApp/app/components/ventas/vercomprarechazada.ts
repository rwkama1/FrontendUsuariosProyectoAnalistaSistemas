import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';


import { FormGroup, FormControl } from '@angular/forms';

import { Compra } from '../../entidades/compra';

import { VentaCompraService } from '../../services/ventacompra.service';


@Component({
    selector: 'vercomprarechazada',
    templateUrl: './vercomprarechazada.html'
    
})
export class VerCompraRechazadaComponent implements OnInit {
    vercompra: FormGroup | undefined;
   
    comprarechazada 
  
    constructor(public http: Http, private _router: Router, private _fact: VentaCompraService) {
        
    }

    ngOnInit() {

        
        this.vercompra = new FormGroup
            (
            {
                ingid: new FormControl(),
                ingfecha: new FormControl(),
                ingmetodo: new FormControl(),
                ingcedula: new FormControl(),
                ingestado: new FormControl(),
                ingimp: new FormControl(),
                ingsubtotal: new FormControl(),
                ingtotal: new FormControl(),
            }
            );
        this.comprarechazada = JSON.parse(localStorage['comprarechazada']) as Compra;
    }
    printDiv() {
        //var data = document.getElementById('contentToConvert');  //Id of the table
        //html2canvas(data).then(canvas => {
        //    // Few necessary setting options  
        //    let imgWidth = 208;
        //    let pageHeight = 295;
        //    let imgHeight = canvas.height * imgWidth / canvas.width;
        //    let heightLeft = imgHeight;

        //    const contentDataURL = canvas.toDataURL('image/png')
        //    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
        //    let position = 0;
        //    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        //    pdf.save('CompraRechazada.pdf'); // Generated PDF   
        //});  
        //let html2pdf = require('html2pdf.js');
        //const element = this.content.nativeElement;
        //var opt = {
        //    margin: 1,
        //    filename: 'myfile.pdf',
        //    image: { type: 'jpeg', quality: 0.98 },
        //    html2canvas: { scale: 2 },
        //    jsPDF: { unit: 'landscape', format: 'pt', orientation: 'A4' }
        //};
      
        //html2pdf().from(element).save();

        
    }
   
}