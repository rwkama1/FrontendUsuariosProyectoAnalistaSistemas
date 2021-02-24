import { LineaFacturaCompra } from "./lineafacturacompra";

export class FacturaCompra
{
     IdFC :number;
     NumeroFC: string;
    ProvFC: string;
    FechaFC: string;
    ImpuestosFC: number;
    SubtotalFC: number;
    TotalFC: number;
    Listalineas: LineaFacturaCompra[];
   public constructor()
    { }
}