import { TipoDeJornadaLaboral } from "./tipo-de-jornada-laboral";

export class TurnoExtra {

    id : number;
    horaEntrada : Date;
    horaSalida : Date;
    dia : Date;
    tipoDeJornadaLaboral : TipoDeJornadaLaboral = TipoDeJornadaLaboral.TURNOEXTRA;

    constructor() {};

}
