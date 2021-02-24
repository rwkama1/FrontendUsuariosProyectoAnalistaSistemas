import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { VentaCompraService } from '../../services/ventacompra.service';
import { EmployeeService } from '../../services/empservice.service';
import { Http } from '@angular/http';

@Component({
    selector: 'nav-tecnico',
    templateUrl: './navtecnico.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavTecnicoComponent {
    constructor(public http: Http, private _router: Router, private empservice: EmployeeService) {

    }
    logout() {
        this.empservice.logout().subscribe(data => {
            localStorage.removeItem('tecnico');
            this._router.navigate(['/logeo']);

        });
    }
}
