import { Component, Inject, OnInit } from '@angular/core';
import { Http, Headers, Request } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/empservice.service'
import { Usuario } from '../../entidades/usuario';
import { Administrador } from '../../entidades/admin';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Console } from '@angular/core/src/console';
import { Cajero } from '../../entidades/cajero';
import { Tecnico } from '../../entidades/tecnico';
import { Vendedor } from '../../entidades/vendedor';
import { Stocker } from '../../entidades/stocker';
import { Cadete } from '../../entidades/cadete';


@Component({
    selector: 'logeo',
    templateUrl: './logeo.component.html'
})
export class LogeoComponent implements OnInit {

 
    
  
   

    get cedulaa() { return parseInt((<HTMLInputElement>document.getElementById("cedulaa")).value) };
    get pass() { return ((<HTMLInputElement>document.getElementById("pass")).value) };


    admin = {} as Administrador;
    cadete = {} as Cadete;
    sto = {} as Stocker;
    vend = {} as Vendedor;
    tecn = {} as Tecnico;
    caj = {} as Cajero;
    //private usuariol: Usuario ;


    constructor(public http: Http, private _router: Router, private _employeeService: EmployeeService) {

    }
    ngOnInit() {

    }

    logeo() {
        this.metodologiar(this.cedulaa, this.pass)

    }
    metodologiar(cedula: number, pass: string) {//

        this._employeeService.getLoginadmin(cedula, pass).subscribe(datadmin => {
            this.admin = datadmin;
           
            //dataadmin => {//
            ///If/this.admin = dataadmin;
            if (datadmin)
            this._router.navigate(['/adminp']); 
            if (datadmin==null) {
                        this._employeeService.getLoginstock(cedula, pass).subscribe(datasto => {
                            this.sto = datasto;
                            if (datasto) { this._router.navigate(['/listarProd']); }
                            if (datasto == null) {
                                this._employeeService.getLoginvend(cedula, pass).subscribe(datavend => {
                                    this.vend = datavend;
                                    if (datavend) {
                                        localStorage.setItem('vendedor', JSON.stringify(this.vend));
                                        this._router.navigate(['/listarcompraspen']);
                                    }
                                    if (datavend == null) {
                                        this._employeeService.getLogincajero(cedula, pass).subscribe(datacajero => {
                                            this.caj = datacajero;
                                            if (datacajero) {
                                                localStorage.setItem('cajero', JSON.stringify(this.caj));
                                                this._router.navigate(['/listarvwebpago']);
                                            } 
                                            if (datacajero == null) {
                                                this._employeeService.getLogintecn(cedula, pass).subscribe(datatecnico => {
                                                    this.tecn = datatecnico;
                                                    if (datatecnico) {
                                                        localStorage.setItem('tecnico', JSON.stringify(this.tecn));
                                                        this._router.navigate(['/listarproductosot']);
                                                    }
                                                    if (datatecnico == null) {
                                                        this._employeeService.getLogincadete(cedula, pass).subscribe(datacadete => {
                                                            this.cadete = datacadete;
                                                            if (datacadete)
                                                                alert("Para entrar con un cadete descargue la apk que se encuentra en clientawayweb-001-site1.ctempurl.com");
                                                            if (datacadete == null) {
                                                                alert("La cedula o contraseña ingresadas son incorrectas");
                                                            }
                                                        });
                                                        }
                                });
                            }
                        });

                    }//
                });//
            }
        });
            }
        });
           
}
}