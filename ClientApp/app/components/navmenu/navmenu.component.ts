import { Component } from '@angular/core';
import { EmployeeService } from '../../services/empservice.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    constructor(public http: Http, private _router: Router, private empservice: EmployeeService) {

    }
    logout() {
        this.empservice.logout().subscribe(data => {
         
            this._router.navigate(['/logeo']);

        });
    }
}
