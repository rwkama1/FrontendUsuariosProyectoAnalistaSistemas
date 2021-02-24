import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/empservice.service';

@Component({
    selector: 'nav-stocker',
    templateUrl: './navstocker.component.html',
    styleUrls: ['./navstocker.component.css']
})
export class NavStockerComponent {
    constructor(public http: Http, private _router: Router, private empservice: EmployeeService) {

    }
    logout() {
        this.empservice.logout().subscribe(data => {

            this._router.navigate(['/logeo']);

        });
    }
}
