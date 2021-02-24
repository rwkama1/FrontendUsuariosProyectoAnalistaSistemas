import { Component, Inject, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/empservice.service'
;

@Component({
    selector: 'adminp',
    templateUrl: './adminp.html',
    styleUrls: ['./adminp.css']
})
export class AdminpComponent
{
    empList
    constructor( private _router: Router, private _employeeService: EmployeeService) {
        this._employeeService.getEmployees().subscribe(
            data => this.empList = data)
    }

}