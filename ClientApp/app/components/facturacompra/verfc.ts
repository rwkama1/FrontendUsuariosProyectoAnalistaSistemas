import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/empservice.service'
import { Usuario } from '../../entidades/usuario';

import { FacturaCompraService } from '../../services/facturacompra.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FacturaCompra } from '../../entidades/facturacompra';


@Component({
    selector: 'verfc',
    templateUrl: './verfc.html'
    
})
export class VerFC implements OnInit {
    verfc: FormGroup | undefined;
  
    fc = JSON.parse(localStorage['fc']) as FacturaCompra;

    constructor(public http: Http, private _router: Router, private _fact: FacturaCompraService) {
        
    }

    ngOnInit() {

        
        this.verfc = new FormGroup
            (
            {
               
                ingnumero: new FormControl(),
                ingfecha: new FormControl(),
                ingrut: new FormControl(),
                ingimp: new FormControl(),
                ingsubtotal: new FormControl(),
                ingtotal: new FormControl(),

            }
            );
        this.verfc.patchValue
            (

            {
               
                ingnumero: this.fc.NumeroFC,
                ingfecha: this.fc.FechaFC,
                ingrut: this.fc.ProvFC,
                ingimp: '$' +this.fc.ImpuestosFC,
                ingsubtotal: '$' + this.fc.SubtotalFC,
                ingtotal: '$' + this.fc.TotalFC,


            }
            )
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
        //    pdf.save('FacturaCompra.pdf'); // Generated PDF   
        //});  

    
    }
   
}