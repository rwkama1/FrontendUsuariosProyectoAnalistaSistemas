import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { ListUsuComponent } from './components/listusu/listusu.component';
import { EmployeeService } from './services/empservice.service';
import { LogeoComponent } from './components/logeo/logeo.component';
import { AdminpComponent } from './components/adminprincipal/adminp';
import { IngcedulaComponent } from './components/ingresarcedula/ingcedula';
import { ModusuComponent } from './components/gestionusuarios/modusu';
import { AddusuComponent } from './components/gestionusuarios/addusu';
import { AddprincipalComponent } from './components/gestionusuarios/addprincipal';
import { ModcadeteComponent } from './components/gestionusuarios/modcadete';
import { ModCajeroComponent } from './components/gestionusuarios/modcajero';
import { ModStockerComponent } from './components/gestionusuarios/modstocker';
import { ModTecnicoComponent } from './components/gestionusuarios/modtecnico';
import { ModVendedorComponent } from './components/gestionusuarios/modvendedor';
import { AddCajeroComponent } from './components/gestionusuarios/addcajero';
import { AddCadeteComponent } from './components/gestionusuarios/addcadete';
import { AddStockerComponent } from './components/gestionusuarios/addstocker';
import { AddTecnicoComponent } from './components/gestionusuarios/addtecnico';
import { AddVendedorComponent } from './components/gestionusuarios/addvendedor';
import { StockPrincipalComponent } from './components/stockerprincipal/stockprincipal';
import { NavStockerComponent } from './components/navmenu/navstocker.component';
import { ProdService } from './services/prod.service';
import { IngidComponent } from './components/gestionproductos/ingid';
import { ModProductoComponent } from './components/gestionproductos/modprod';
import { AddProdComponent } from './components/gestionproductos/addprod';
import { ListarProdComponent } from './components/gestionproductos/listarProd';
import { ProveedorService } from './services/proveedor.service';
import { ModProvComponent } from './components/gestionproveedor/modprov';
import { AddProvComponent } from './components/gestionproveedor/addprov';
import { IngrutComponent } from './components/gestionproveedor/ingrut';
import { MensajeService } from './services/mensaje.service';
import { NavVendedorComponent } from './components/navmenu/navvendedor.component';
import { ListmsjComponent } from './components/listarmensajes/listmsj.component';
import { VenPrincipalComponent } from './components/vendedorprincipal/venprincipal';
import { RespmsjComponent } from './components/mensajes/respmsj';
import { ChatComponent } from './components/mensajes/chat';
import { SignalRService } from './services/chat';
import { IngresarFCComponent } from './components/facturacompra/ingresarFC';
import { FacturaCompraService } from './services/facturacompra.service';
import { RegLineaFacturaComponent } from './components/facturacompra/reglineafactura';
import { AgregarLFCComponent } from './components/facturacompra/agregarlfc';
import { CerrarFcComponent } from './components/facturacompra/cerrarfc';
import { VerFC } from './components/facturacompra/verfc';
import { VentaCompraService } from './services/ventacompra.service';
import { ListarComprasPendientesComponent } from './components/ventas/listarcompraspen';
import { VerCompraPendienteComponent } from './components/ventas/vercomprapen';
import { VerVentaComponent } from './components/ventas/verventa';
import { VerCompraRechazadaComponent } from './components/ventas/vercomprarechazada';
import { VerProductoVComponent } from './components/ventas/verproductov';
import { ListarPVentaComponent } from './components/ventas/listarpventa';
import { IngresarCantidadComponent } from './components/ventas/ingcantidad';
import { CerrarVentaComponent } from './components/ventas/cerrarventa';
import { VerVentaPersonalComponent } from './components/ventas/verventapersonal';
import { PagoService } from './services/pago.service';
import { VerVentaPagoPersonalComponent } from './components/pago/verventapagopersonal';
import { ListarVentasPersonalesPago } from './components/pago/listarventaspersonalespago';
import { NavCajeroComponent } from './components/navmenu/navcajero';
import { PagarEfectivoComponent } from './components/pago/pagarefectivo';
import { ListarVentasWebPago } from './components/pago/listarventaswebpago';
import { PagarTarjetaComponent } from './components/pago/pagartarjeta';
import { VerVentaPagoWebComponent } from './components/pago/verventawebpago';
import { ListarProductosOrdenTaller } from './components/ordentaller/listarproductosot';
import { NavTecnicoComponent } from './components/navmenu/navtecnico';
import { OrdenTallerService } from './services/ordetntallerservice';
import { VerProductoOTComponent } from './components/ordentaller/verproductoot';
import { AgregarOrdenTaller } from './components/ordentaller/agregarordentaller';
import { ClienteService } from './services/cliente.service';
import { VerOrdenTallerComponent } from './components/ordentaller/verordentaller';
import { CambiarRevisionComponent } from './components/ordentaller/cambiarrevision';
import { VerOrdenTallerCambiadaComponent } from './components/ordentaller/verordentallercambiada';
import { CambiarPrecioComentarioComponent } from './components/ordentaller/cambiarpreciocomentario';
import { RechazarNoReparableComponent } from './components/ordentaller/rechazarnoreparable';
import { VerOrdenTallerRechazadaComponent } from './components/ordentaller/verordentallerrechazada';
import { OrdenEnvioService } from './services/ordenenvioservice';
import { ListarVentasCobradasComponent } from './components/ordenenvio/listarventascobradas';
import { ListarOrdenTallerComponent } from './components/ordentaller/listarordenestaller';
import { VerVentaCobradaComponent } from './components/ordenenvio/verventa';
import { AgregarOrdenEnvioComponent } from './components/ordenenvio/agregarordenenvio';
import { VerOEAgregadaComponent } from './components/ordenenvio/veroeagregada';
import { RegCliComponent } from './components/cliente/regcli';
import { ListarProvComponent } from './components/gestionproveedor/listarProv';
import { ListarProdMVComponent } from './components/ventas/listProdMV';
import { ListarOPendientes } from './components/ordenenvio/listarordenvpend';
import { CambiarEstadoEnvio } from './components/ordenenvio/cambiaresorden';
import { ListarVentasVCobradasComponent } from './components/ventas/listarventavcobrada';
import { ListarFacturaCompraComponent } from './components/facturacompra/listarfc';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        PagarTarjetaComponent,
        VerFC,
        VenPrincipalComponent,
        CerrarFcComponent,
        AgregarLFCComponent,
        NavCajeroComponent,
        RegLineaFacturaComponent,
        PagarEfectivoComponent,
        ListarComprasPendientesComponent,
        ListarVentasVCobradasComponent,
        VerCompraPendienteComponent,
        ChatComponent,
        ListarFacturaCompraComponent,
        NavStockerComponent,
        AgregarOrdenEnvioComponent,
        ListarProdMVComponent,
        NavVendedorComponent,
        NavTecnicoComponent,
        IngresarFCComponent,
        CounterComponent,
        ListarOPendientes,
        FetchDataComponent,
        HomeComponent,
        ListUsuComponent,
        ListmsjComponent,
        AdminpComponent,
        LogeoComponent,
        IngcedulaComponent,
        ModusuComponent,
        AddusuComponent,
        AddprincipalComponent,
        ModcadeteComponent,
        VerVentaComponent,
        ModCajeroComponent,
        VerVentaPagoPersonalComponent,
        ModStockerComponent,
        RegCliComponent,
        ModTecnicoComponent,
        ModVendedorComponent,
        PagarTarjetaComponent,
        AddCadeteComponent,
        IngresarCantidadComponent,
        VerOrdenTallerRechazadaComponent,
        ListarVentasPersonalesPago,
        ListarPVentaComponent,
        AddCajeroComponent,
        VerProductoVComponent,
        RechazarNoReparableComponent,
        VerVentaPersonalComponent,
        VerOrdenTallerComponent,
        ListarVentasCobradasComponent,
        CerrarVentaComponent,
        VerVentaCobradaComponent,
        AddStockerComponent,
        AddTecnicoComponent,
        CambiarRevisionComponent,
        ListarOrdenTallerComponent,
        VerOrdenTallerCambiadaComponent,
        ListarProvComponent, 
        CambiarEstadoEnvio,
        CambiarPrecioComentarioComponent,
        VerOEAgregadaComponent,
        AgregarOrdenTaller,
        ListarVentasWebPago,
        VerCompraRechazadaComponent,
        ListarProductosOrdenTaller,
        AddVendedorComponent,
        VerProductoOTComponent,
        VerVentaPagoWebComponent,
        StockPrincipalComponent,
        IngidComponent,
        ModProductoComponent,
        AddProdComponent,
        ListarProdComponent,
        RespmsjComponent,
        ModProvComponent,
        AddProvComponent,
        IngrutComponent,



    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot([

            { path: '', redirectTo: 'logeo', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'verfc', component: VerFC },
            { path: 'regcli', component: RegCliComponent },
            { path: 'listarproductosot', component: ListarProductosOrdenTaller },
            { path: 'listarFC', component: ListarFacturaCompraComponent },
            { path: 'listarventasvcobradas', component: ListarVentasVCobradasComponent },
            { path: 'listProdMV', component: ListarProdMVComponent },
            { path: 'verventacobrada', component: VerVentaCobradaComponent },
            { path: 'rechazarnoreparable', component: RechazarNoReparableComponent },
            { path: 'listarProv', component: ListarProvComponent },
            { path: 'veroeagregada', component: VerOEAgregadaComponent },
            { path: 'agregarordenenvio', component: AgregarOrdenEnvioComponent },
            { path: 'verordentallerrechazada', component: VerOrdenTallerRechazadaComponent },
            { path: 'listarordenestaller', component: ListarOrdenTallerComponent },
            { path: 'listarventascobradas', component: ListarVentasCobradasComponent },
            { path: 'listaropendientes', component: ListarOPendientes },
            { path: 'cambiaresorden', component: CambiarEstadoEnvio },
            { path: 'cambiarpreciocomentario', component: CambiarPrecioComentarioComponent },
            { path: 'cambiarrevision', component: CambiarRevisionComponent },
            { path: 'verordentallercambiada', component: VerOrdenTallerCambiadaComponent },
            { path: 'agregarordentaller', component: AgregarOrdenTaller },
            { path: 'verordentaller', component: VerOrdenTallerComponent },
            { path: 'verproductoot', component: VerProductoOTComponent },
            { path: 'verventawebpago', component: VerVentaPagoWebComponent },
            { path: 'venprincipal', component: VenPrincipalComponent },
            { path: 'listarvwebpago', component: ListarVentasWebPago },
            { path: 'verventapersonal', component: VerVentaPersonalComponent },
            { path: 'listarvpersonalespago', component: ListarVentasPersonalesPago },
            { path: 'pagarefectivo', component: PagarEfectivoComponent },
            { path: 'pagartarjeta', component: PagarTarjetaComponent },
            { path: 'ingresarcantidad', component: IngresarCantidadComponent },
            { path: 'cerrarventa', component: CerrarVentaComponent },
            { path: 'vercomprapen', component: VerCompraPendienteComponent },
            { path: 'verventapagopersonal', component: VerVentaPagoPersonalComponent },
            { path: 'verproductov', component: VerProductoVComponent },
            { path: 'verventa', component: VerVentaComponent },
            { path: 'vercomprarechazada', component: VerCompraRechazadaComponent },
            { path: 'listarcompraspen', component: ListarComprasPendientesComponent },
            { path: 'listarpventa', component: ListarPVentaComponent },
            { path: 'cerrarfc', component: CerrarFcComponent },
            { path: 'ingresarFC', component: IngresarFCComponent },
            { path: 'chat', component: ChatComponent },
            { path: 'ingcedula', component: IngcedulaComponent },
            { path: 'reglineafactura', component: RegLineaFacturaComponent },
            { path: 'listmsj', component: ListmsjComponent },
            { path: 'modprov', component: ModProvComponent },
            { path: 'agregalfc', component: AgregarLFCComponent },
            { path: 'addprov', component: AddProvComponent },
            { path: 'respmsj', component: RespmsjComponent },
            { path: 'ingrut', component: IngrutComponent },
            { path: 'listarProd', component: ListarProdComponent },
            { path: 'addprod', component: AddProdComponent },
            { path: 'ingid', component: IngidComponent },
            { path: 'modprod', component: ModProductoComponent },
            { path: 'stockprincipal', component: StockPrincipalComponent },
            { path: 'addstocker', component: AddStockerComponent },
            { path: 'addtecnico', component: AddTecnicoComponent },
            { path: 'addvendedor', component: AddVendedorComponent },
            { path: 'addcadete', component: AddCadeteComponent },
            { path: 'addcajero', component: AddCajeroComponent },
            { path: 'modcajero', component: ModCajeroComponent },
            { path: 'modvendedor', component: ModVendedorComponent },
            { path: 'modstocker', component: ModStockerComponent },
            { path: 'modtecnico', component: ModTecnicoComponent },
            { path: 'modusu', component: ModusuComponent },
            { path: 'modcadete', component: ModcadeteComponent },
            { path: 'addusu', component: AddusuComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'listusu', component: ListUsuComponent },
            { path: 'logeo', component: LogeoComponent },
            { path: 'addprincipal', component: AddprincipalComponent },
            { path: 'adminp', component: AdminpComponent },
            { path: '**', redirectTo: 'logeo' }
        ])

    ],
    providers: [EmployeeService, ProdService, ProveedorService, MensajeService, SignalRService, FacturaCompraService, VentaCompraService, PagoService, OrdenTallerService, ClienteService, OrdenEnvioService]

})
export class AppModuleShared {
}