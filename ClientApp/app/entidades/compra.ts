import { LineaCompra } from "./lineacompra";


export class Compra
{
    IdC: number | undefined;
    FechaC: Date | undefined;
    MetodoPagoC: string | undefined;
    ClienteC: number | undefined;
    ImpuestosC: number | undefined;
    SubtotalC: number | undefined;
    TotalC: number | undefined;
    EstadoC: string | undefined;
    LineaCompra: LineaCompra[] | undefined;
   public constructor()
    { }
}