import { Component, Inject, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/empservice.service'
import { Usuario } from '../../entidades/usuario';

import { FacturaCompraService } from '../../services/facturacompra.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FacturaCompra } from '../../entidades/facturacompra';

@Component({
    selector: 'cerrarfc',
    templateUrl: './cerrarfc.html'
})
export class CerrarFcComponent implements OnInit {
    cerrarForm;
    fc = JSON.parse(localStorage['fc']) as FacturaCompra;
    constructor(public http: Http, private _router: Router, private _fact: FacturaCompraService) {
      
    }

   ngOnInit() {
       this.cerrarForm = new FormGroup
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
       this.cerrarForm.patchValue
           (

           {
                   
                   ingnumero: this.fc.NumeroFC,
                   ingfecha: this.fc.FechaFC,
                   ingrut: this.fc.ProvFC,
                   ingimp: '$' + this.fc.ImpuestosFC,
                   ingsubtotal: '$' + this.fc.SubtotalFC,
                   ingtotal: '$' + this.fc.TotalFC,


           }
           )
    } 
    //logout()
    //{
    //    this._employeeService.logout().subscribe(data => {
    //        this._router.navigate(['/logeo']);
    //    });}


}
