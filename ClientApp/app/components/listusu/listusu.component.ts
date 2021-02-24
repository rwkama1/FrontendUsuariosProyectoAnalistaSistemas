import { Component, Inject, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/empservice.service'
import { Usuario } from '../../entidades/usuario';


@Component({
    selector: 'listusu',
    templateUrl: './listusu.component.html'
})
export class ListUsuComponent implements OnInit {
    public empList: Usuario[] | undefined;

    constructor(public http: Http, private _router: Router, private _employeeService: EmployeeService) {
      
    }

   ngOnInit() {
        this._employeeService.getEmployees().subscribe(
            data => this.empList = data
        )
    } 
    logout()
    {
        this._employeeService.logout().subscribe(data => {
            this._router.navigate(['/logeo']);
        });}


}
