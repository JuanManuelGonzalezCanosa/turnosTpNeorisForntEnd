import { TipoDeJornadaLaboral } from "./tipo-de-jornada-laboral";
import { TurnoExtra } from "./turno-extra";

export class JornadaLaboral {

    id : number;
    horaEntrada : Date;
    horaSaida : Date;
    tipoDeJornadaLaboral : TipoDeJornadaLaboral = TipoDeJornadaLaboral.JORNADALABORAL;
    turnoExtra : TurnoExtra;

    constructor() {};

}
