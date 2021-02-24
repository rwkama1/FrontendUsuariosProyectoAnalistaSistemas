import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { VentaCompraService } from '../../services/ventacompra.service';
import { EmployeeService } from '../../services/empservice.service';

@Component({
    selector: 'nav-vendedor',
    templateUrl: './navvendedor.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavVendedorComponent {
    constructor(private _router: Router, private ventaservice: VentaCompraService, private empservice: EmployeeService) {
    }
    iniciarVenta()
    {
        this.ventaservice.iniciarVenta().subscribe(data => {       
            this._router.navigate(['/listarpventa'])
        });
    }
    
    logout() {
        this.empservice.logout().subscribe(data => {
            localStorage.removeItem('vendedor');
            this._router.navigate(['/logeo']);

        });
    }
   
}
