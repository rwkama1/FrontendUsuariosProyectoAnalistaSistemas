import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';
import { Venta } from '../../entidades/venta';
import { VentaCompraService } from '../../services/ventacompra.service';
import { Http } from '@angular/http';

@Component({
    selector: 'verventa',
    templateUrl: './verventa.html'
    
})
export class VerVentaComponent implements OnInit {
    verventa: FormGroup | undefined;
  
    v = JSON.parse(localStorage['ventaconvertida']) as Venta;
  
    constructor(public http: Http, private _router: Router, private _fact: VentaCompraService) {
        
    }

    ngOnInit() {

        
        this.verventa = new FormGroup
            (
            {
               
                fechaventa: new FormControl(),
                venfecha: new FormControl(),
                metodoventaweb: new FormControl(),
                cedulaventaweb: new FormControl(),
                estdoventaweb: new FormControl(),
                impuestoventaweb: new FormControl(),
                subtotalventaweb: new FormControl(),
                totalventaweb: new FormControl(),
            }
            );
        this.verventa.patchValue
            (

            {
                  
                    venfecha: this.v.VencimientoV,
                    fechaventa: this.v.FechaV,
                    metodoventaweb: this.v.MetodoPagoV,
                    cedulaventaweb: this.v.ClienteV,
                    estdoventaweb: this.v.EstadoV,
                    impuestoventaweb: '$' + this.v.ImpuestosV,
                    subtotalventaweb: '$' + this.v.SubtotalV,
                    totalventaweb: '$' + this.v.TotalV,
              


            }
            )
    }
    printDiv() {
        //var data = document.getElementById('vervenrta');  //Id of the table
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
        //    pdf.save('Venta.pdf'); // Generated PDF   
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