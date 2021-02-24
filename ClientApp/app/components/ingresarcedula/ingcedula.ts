import { Component, Inject, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/empservice.service'
import { Usuario } from '../../entidades/usuario';


import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Administrador } from '../../entidades/admin';
import { Stocker } from '../../entidades/stocker';
import { Cadete } from '../../entidades/cadete';
import { Cajero } from '../../entidades/cajero';
import { Vendedor } from '../../entidades/vendedor';
import { Tecnico } from '../../entidades/tecnico';
import { Http } from '@angular/http';



@Component({
    selector: 'ingcedula',
    templateUrl: './ingcedula.html'
})
export class IngcedulaComponent implements OnInit
{
 
 
    ingcedulaForm;

   
    admin = {} as Administrador;
    stocker = {} as Stocker;
    tecnico = {} as Tecnico;
    vendedor = {} as Vendedor;
    cajero = {} as Cajero;
    cadete = {} as Cadete;
    get ingcedula() { return parseInt((<HTMLInputElement>document.getElementById("ingcedula")).value) };
  
    constructor(public http: Http, private _router: Router, private _employeeService: EmployeeService
       ) {   
    }
    ngOnInit()
    {
      
        
    }
    
  
    buscarusu() {
        this.buscarusuarios(this.ingcedula)
        }

    buscarusuarios(cedula: number)
        {

        this._employeeService.getAdmin(cedula).subscribe(dataadmin => {
                this.admin = dataadmin;
          
            if (dataadmin) {
                    localStorage.setItem('admin', JSON.stringify(this.admin));
                  this._router.navigate(['/modusu']);
            }
            if (dataadmin == null)
            {
                this._employeeService.getCadete(cedula).subscribe(datacadete => {
                    this.cadete = datacadete;

                    if (datacadete) {
                        localStorage.setItem('cadete', JSON.stringify(this.cadete));
                        this._router.navigate(['/modcadete']);
                    }
                    if (datacadete == null)
                    {
                        this._employeeService.getStocker(cedula).subscribe(datastocker => {
                            this.stocker = datastocker;

                            if (datastocker) {
                                localStorage.setItem('stocker', JSON.stringify(this.stocker));
                                this._router.navigate(['/modstocker']);
                            }
                            if (datastocker == null)
                            {
                                this._employeeService.getVendedor(cedula).subscribe(datavendedor => {
                                    this.vendedor = datavendedor;

                                    if (datavendedor) {
                                        localStorage.setItem('vendedor', JSON.stringify(this.vendedor));
                                        this._router.navigate(['/modvendedor']);
                                    }
                                    if (datavendedor == null)
                                    {
                                        this._employeeService.getCajero(cedula).subscribe(datacajero => {
                                            this.cajero = datacajero;

                                            if (datacajero) {
                                                localStorage.setItem('cajero', JSON.stringify(this.cajero));
                                                this._router.navigate(['/modcajero']);

                                            }
                                            if (datacajero == null)
                                            {
                                                this._employeeService.getTecnico(cedula).subscribe(datatecnico => {
                                                    this.tecnico = datatecnico;

                                                    if (datatecnico) {
                                                        localStorage.setItem('tecnico', JSON.stringify(this.tecnico));
                                                        this._router.navigate(['/modtecnico']);
                                                    }
                                                    if (datatecnico == null)
                                                    {
                                                        localStorage.setItem('cedula', JSON.stringify(this.ingcedula));
                                                        this._router.navigate(['/addprincipal']);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });

            }
         
            });
         
    }
 
    
    
}