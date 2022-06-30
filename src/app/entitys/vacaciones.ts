import { TipoDeJornadaLaboral } from "./tipo-de-jornada-laboral";

export class Vacaciones {

    id : number;
    diaInicio : Date;
    diaFinal : Date;
    tipoDeJornadaLaboral : TipoDeJornadaLaboral = TipoDeJornadaLaboral.VACACIONES;

}
