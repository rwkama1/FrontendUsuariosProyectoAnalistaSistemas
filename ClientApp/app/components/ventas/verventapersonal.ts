import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Compra } from '../../entidades/compra';
import { Venta } from '../../entidades/venta';
import { VentaCompraService } from '../../services/ventacompra.service';



@Component({
    selector: 'verventapersonal',
    templateUrl: './verventapersonal.html'
    
})
export class VerVentaPersonalComponent implements OnInit {

    verventapersonal 
  
    v = JSON.parse(localStorage['Venta']) as Venta;
 
    constructor(public http: Http, private _router: Router, private _fact: VentaCompraService) {

    }

    ngOnInit() {


        this.verventapersonal = new FormGroup
            (
            {

                formaentregaweb: new FormControl(),
                fechaventa: new FormControl(),
                venfecha: new FormControl(),
                metodoventaweb: new FormControl(),          
                estdoventaweb: new FormControl(),
                impuestoventaweb: new FormControl(),
                subtotalventaweb: new FormControl(),
                totalventaweb: new FormControl(),
            }
            );
        this.verventapersonal.patchValue
            (

            {
                formaentregaweb: this.v.FormaEntregaV,
                venfecha: this.v.VencimientoV,
                fechaventa: this.v.FechaV,
                metodoventaweb: this.v.MetodoPagoV,
                estdoventaweb: this.v.EstadoV,
                impuestoventaweb: '$' + this.v.ImpuestosV,
                subtotalventaweb: '$' + this.v.SubtotalV,
                totalventaweb: '$' + this.v.TotalV,



            }
            )
    }
    printDiv() {

        //var data = document.getElementById('vpersonalpdf');  //Id of the table
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
        //const element = this.content.nativeElement;
        //var opt = {
        //    margin: 1,
        //    filename: 'myfile.pdf',
        //    image: { type: 'jpeg', quality: 0.98 },
        //    html2canvas: { scale: 2 },
        //    jsPDF: { unit: 'landscape', format: 'pt', orientation: 'A4' }
        //};

        //this.html2pdf().from(element).set(opt).save();


    }
   
}