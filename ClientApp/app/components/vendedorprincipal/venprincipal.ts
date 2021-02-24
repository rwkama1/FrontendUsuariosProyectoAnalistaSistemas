import { Component, Inject, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/empservice.service'
import { Http } from '@angular/http';




@Component({
    selector: 'venprincipal',
    templateUrl: './venprincipal.html',
  
})
export class VenPrincipalComponent {
    constructor(public http: Http, private _router: Router, private _employeeService: EmployeeService) {

    }

}