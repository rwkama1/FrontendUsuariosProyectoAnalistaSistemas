import { Component, Inject, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/empservice.service'
import { Http } from '@angular/http';




@Component({
    selector: 'stockprincipal',
    templateUrl: './stockprincipal.html',
  
})
export class StockPrincipalComponent {
    constructor(public http: Http, private _router: Router, private _employeeService: EmployeeService) {

    }

}