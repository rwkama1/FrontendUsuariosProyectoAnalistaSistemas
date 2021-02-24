import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Usuario } from '../entidades/usuario';
import { Administrador } from '../entidades/admin';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Cadete } from '../entidades/cadete';
import { Cajero } from '../entidades/cajero';
import { Tecnico } from '../entidades/tecnico';
import { Stocker } from '../entidades/stocker';
import { Vendedor } from '../entidades/vendedor';

@Injectable()
export class EmployeeService {

    

    url = 'http://www.acarlosbackendd.somee.com/api/';
    headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    options = new RequestOptions({ headers: this.headers });
   
    constructor(private _http: Http ) { }

    //Listar
    getEmployees(): Observable<Usuario[]> {
        return this._http.get(this.url + 'Usu')
            .map((res: Response) => <Usuario[]>res.json());

    }
    
    
    //Login Usuarios
    getLogin(cedula: number, contrasena: string): Observable<Usuario> {
        return this._http.get(this.url + cedula + '&contrasena=' + contrasena)
            .map((res: Response) => <Usuario>res.json());

    }
    getLoginadmin(cedula: number, contrasena: string): Observable<Administrador> {
        return this._http.get(this.url + 'Admin?cedula=' + cedula + '&contrasena=' + contrasena)
            .map((res: Response) => <Administrador> res.json());


    }
    getLogincadete(cedula: number, contrasena: string): Observable<Cadete> {
        return this._http.get(this.url + 'Cadete?cedula=' + cedula + '&contrasena=' + contrasena)
            .map((res: Response) => <Cadete>res.json());


    }
    getLogincajero(cedula: number, contrasena: string): Observable<Cajero> {
        return this._http.get(this.url + 'Cajero?cedula=' + cedula + '&contrasena=' + contrasena)
            .map((res: Response) => <Cajero>res.json());


    }
    getLogintecn(cedula: number, contrasena: string): Observable<Tecnico> {
        return this._http.get(this.url + 'Tecnico?cedula=' + cedula + '&contrasena=' + contrasena)
            .map((res: Response) => <Tecnico>res.json());


    }
    getLoginstock(cedula: number, contrasena: string): Observable<Stocker> {
        return this._http.get(this.url + 'Stocker?cedula=' + cedula + '&contrasena=' + contrasena)
            .map((res: Response) => <Stocker>res.json());
            


    }
    getLoginvend(cedula: number, contrasena: string): Observable<Vendedor> {
        return this._http.get(this.url + 'Vendedor?cedula=' + cedula + '&contrasena=' + contrasena)
            .map((res: Response) => <Vendedor>res.json());


    }
    //Logout
    logout() {
        return this._http.get(this.url +'Autenticacion');

    }
    //Buscar Usuarios
    getUsuario(cedula: number): Observable<Usuario> {
        return this._http.get(this.url + 'Usu?cedula=' + cedula)
            .map((res: Response) => <Usuario>res.json());   

    }
    getAdmin(cedula: number): Observable<Administrador> {
        return this._http.get(this.url + 'Admin?cedula=' + cedula).map((res: Response) => <Administrador>res.json());   

    }
    getCadete(cedula: number): Observable<Cadete> {
        return this._http.get(this.url + 'Cadete?cedula=' + cedula).map((res: Response) => <Cadete>res.json());   

    }
    getStocker(cedula: number): Observable<Stocker> {
        return this._http.get(this.url + 'Stocker?cedula=' + cedula).map((res: Response) => <Stocker>res.json());  

    }
    getTecnico(cedula: number): Observable<Tecnico> {
        return this._http.get(this.url + 'Tecnico?cedula=' + cedula).map((res: Response) => <Tecnico>res.json());  

    }
    getVendedor(cedula: number): Observable<Vendedor> {
        return this._http.get(this.url + 'Vendedor?cedula=' + cedula).map((res: Response) => <Vendedor>res.json());  

    }
    getCajero(cedula: number): Observable<Cajero> {
        return this._http.get(this.url + 'Cajero?cedula=' + cedula).map((res: Response) => <Cajero>res.json());  

    }
    //Modifcar Usuarios
    modificarAdmin(admin: Administrador)
    {
        return this._http.put(this.url + 'Admin?cedula=' + admin.CedulaUsu, admin, this.options)
            .map((res: Response) => res.json());  
         
    }
    modificarCadete(cadete: Cadete) {
        return this._http.put(this.url + 'Cadete?cedula=' + cadete.CedulaUsu, cadete, this.options)
            .map((res: Response) => res.json());  
            
    }
    modificarStocker(stocker: Stocker) {
        return this._http.put(this.url + 'Stocker?cedula=' + stocker.CedulaUsu, stocker, this.options)
            .map((res: Response) => res.json());  
            
    }
    modificarVendedor(vendedor: Vendedor) {
        return this._http.put(this.url + 'Vendedor?cedula=' + vendedor.CedulaUsu, vendedor, this.options)
            .map((res: Response) => res.json());

    }
    modificarTecnico(tecnico: Tecnico) {
        return this._http.put(this.url + 'Tecnico?cedula=' + tecnico.CedulaUsu, tecnico, this.options)
            .map((res: Response) => res.json());
    }
    modificarCajero(cajero: Cajero) {
        return this._http.put(this.url + 'Cajero?cedula=' + cajero.CedulaUsu, cajero, this.options)
            .map((res: Response) => res.json());
    }
    //AGREGAR USUARIOS
    agregarAdmin(admin: Administrador) {
        return this._http.post(this.url + 'Admin', admin, this.options)
            .map((res: Response) => res.json());
    }
    agregarCadete(cadete: Cadete) {
        return this._http.post(this.url + 'Cadete', cadete, this.options)
            .map((res: Response) => res.json());
    }
    agregarCajero(cajero: Cajero) {
        return this._http.post(this.url + 'Cajero', cajero, this.options)
            .map((res: Response) => res.json());
    }
    agregarStocker(stocker: Stocker) {
        return this._http.post(this.url + 'Stocker', stocker, this.options)
            .map((res: Response) => res.json());
    }
    agregarTecnico(tecnico: Tecnico) {
        return this._http.post(this.url + 'Tecnico', tecnico, this.options)
            .map((res: Response) => res.json());
    }
    agregarVendedor(vendedor: Vendedor) {
        return this._http.post(this.url + 'Vendedor', vendedor, this.options)
            .map((res: Response) => res.json());
    }
    //ELIMINAR USUARIO
    eliminarCadete(cadete: Cadete) {
        return this._http.put(this.url + 'Cadete', cadete, this.options)
            .map((res: Response) => res.json());

        }
    eliminarStocker(stocker: Stocker) {
        const optionsst = new RequestOptions({
            headers: this.headers,
            body: stocker
        })
    

        return this._http.delete(this.url + 'Stocker', optionsst)
            .map((res: Response) => res.json());

    }
    eliminarVendedor(vende: Vendedor) {
       
        return this._http.put(this.url + 'Vendedor', vende,this.options)
            .map((res: Response) => res.json());

    }
    eliminarCajero(cajero: Cajero) {
        const optionscaj = new RequestOptions({
            headers: this.headers,
            body: cajero
        })
        return this._http.delete(this.url + 'Cajero', optionscaj)
            .map((res: Response) => res.json());
    }
     eliminarAdmin(admin: Administrador) {

         const optionsad = new RequestOptions({
             headers: this.headers,
             body: admin
         })
         return this._http.delete(this.url + 'Admin', optionsad)
             .map((res: Response) => res.json());
    }
    eliminarTecnico(tecnico: Tecnico) {
        return this._http.put(this.url + 'Tecnico',tecnico, this.options)
            .map((res: Response) => res.json());
    }
    getCadetes(): Observable<Cadete[]> {
        return this._http.get(this.url + 'Cadete')
            .map((res: Response) => <Cadete[] > res.json());

    }
    getTecnicos(): Observable<Tecnico[]> {
        return this._http.get(this.url + 'Tecnico')
            .map((res: Response) => <Tecnico[]>res.json());

    }

}