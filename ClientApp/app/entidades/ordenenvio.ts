import { ProductosOE } from "./productosoe";

export class OrdenEnvio {

  

    public IdOE: number | undefined ;
    public VentaOE: number | undefined ;
    public UbicacionOE: string | undefined ;
    public FechaOE:Date | undefined ;
    public EstadoOE: string | undefined;
    public ProductosOrdenEnvio: ProductosOE[] | undefined;
    public LocalidadOE: string;
 

    public constructor()
    {

    }
    

    

}