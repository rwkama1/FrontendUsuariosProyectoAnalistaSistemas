import { Cuota } from "./cuota";

export class PagoTarjeta
{
    IDPT: number | undefined;
    NumeroT: number | undefined;
    ClienteT: number | undefined;
    CantidadCuT: number | undefined;
    TotalT: number | undefined;
    Listacuotas: Cuota[] | undefined;
    public constructor() { }
}